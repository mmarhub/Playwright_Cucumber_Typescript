import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import PricingPageFactory from "../pages/pricingPage";
import { fixture } from "../../hooks/baseFixtures";
import { expect } from "@playwright/test";

setDefaultTimeout(30000)

let pricingPage: PricingPageFactory

Then('I click the Create an account', async function () {
  pricingPage = new PricingPageFactory(fixture.page);
  await pricingPage.clickCreatAccount();
});

Then('I click on the github icon and navigate to home page', async function () {
  await pricingPage.clickGitHubImageIcon();
});

Then('I goto Pricing page', async function () {
  await pricingPage.clickPricingMenu();
});

Then('I verify the title text is {string}', async function (expMsg) {
  const actMsg = await pricingPage.getMessage();
  this.attach(`The actual message is: ${actMsg}`);
  expect(actMsg?.trim()).toEqual(expMsg);
});

