import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber"
import { Browser, Page, BrowserContext} from "@playwright/test"
import { fixture } from "./baseFixtures";
import { launchBrowser } from "../Utils/browserUtils";

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll( async function () {
  // browser = await chromium.launch({headless: false});
  const { loadEnvFile } = require('node:process');
  fixture.environment = process.env.npm_config_ENV?.toLowerCase() || "qa";
  if (fixture.environment === "qa") {
    // loadEnvFile() function works from Node version 21.7+
    loadEnvFile(`${process.cwd()}/config/.env.qa`);
  } else if (fixture.environment === "sit") {
    loadEnvFile(`${process.cwd()}/config/.env.stage`);
  } else {
    throw new Error("Not a valid test environemnt.");
  }
  browser = await launchBrowser();
})

Before( async function () {
  context = await browser.newContext({viewport: null});
  page = await context.newPage();
  fixture.page = page;
})

After( async function ({pickle, result}) {
  if (result?.status == Status.FAILED) {
    const sShot = await fixture.page.screenshot({
      path: `./test-results/screenshot/${pickle.name}.png`,
      type: 'png'
    })
    this.attach(sShot, "image/png");
  }
  await fixture.page.close();
  await context.close();
})

AfterAll(async function () {
  await browser.close();
})
