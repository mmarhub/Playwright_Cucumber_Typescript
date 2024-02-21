import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect} from "@playwright/test"
import { fixture } from "../../hooks/baseFixtures"
import LoginPageFactory from "../pages/loginPage";

// cucumber timeout issue: similar to selenium wait until 30 seconds
setDefaultTimeout(30000)

let loginPage: LoginPageFactory

Given('Open the browser and start {string} application', async function (app)  {
  loginPage = new LoginPageFactory(fixture.page);
  if (process.env.npm_config_ENV?.toLowerCase() === "qa") {
    await loginPage.launchApp("https://github.com/");
  } else if (process.env.npm_config_ENV?.toLowerCase() === "sit") {
  
  } else {
    throw new Error("Not a valid environemnt.");
  }
  this.attach(`on the first step with => ${app}`);
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
  console.log(`The actual message is: ${actMsg} - end here.`);
  expect(actMsg?.trim()).toEqual(expMsg);
});
