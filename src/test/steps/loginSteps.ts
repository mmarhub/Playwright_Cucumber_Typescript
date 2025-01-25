import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect} from "@playwright/test"
import LoginPageFactory from "../pages/loginPage";
import { fixture } from "../../hooks/baseFixtures";

// cucumber timeout issue: similar to selenium wait until 30 seconds
setDefaultTimeout(30000)

let loginPage: LoginPageFactory

Given('Open the browser and start {string} application', async function (app)  {
  //loginPage = new LoginPageFactory(fixture.page);
  loginPage = new LoginPageFactory();
  try {
    await loginPage.launchApp(process.env.base_url!);
  } catch (err) {
    throw new Error(`"No enviroment URL is specified." : ${err}`);
  }
  /*if (process.env.npm_config_ENV?.toLowerCase() === "qa") {
    await loginPage.launchApp("https://github.com/");
  } else if (process.env.npm_config_ENV?.toLowerCase() === "sit") {
  
  } else {
    throw new Error("Not a valid environemnt.");
  }*/
  this.attach(`From first step with '${app}' app from '${fixture.environment}' environment`);
});

Given('Navigate to {string} page', async (string) => {
  // Correct, only matches the <article> element
  // await page.locator('article:has-text("Playwright")').click();
  await loginPage.clickSignIn();
});

When('Login to user account with user as {string} and pass as {string}', async function (user, pwd) {
    await loginPage.loginApp(user, pwd);
    this.attach('{"some": "JSON"}', { mediaType: 'application/json' })
});

Then('Validate the app message as {string}', async (expMsg) =>{
  const actMsg = await loginPage.getErrorMessage();
  console.log(`\nThe actual message is: ${actMsg} \n- end here.`);
  expect(actMsg?.trim()).toEqual(expMsg);
});
