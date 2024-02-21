import { Page } from "@playwright/test"

export default class PricingPageFactory {

    constructor(private page: Page) {    }

    private Elements = {
      linkCreatAccount: "//a[contains(text(),'Create an account')]",
      githubImage: "header[role='banner'] a[aria-label='Homepage']",
      pricing: "//nav[@aria-label='Global']//a[contains(text(),'Pricing')]",
      priceTitleText: "h2[id='billing-frequency-header']"
    }

    async clickCreatAccount() {
      await this.page.locator(this.Elements.linkCreatAccount).click();
    }

    async clickGitHubImageIcon() {
      await this.page.locator(this.Elements.githubImage).click();
    }

    async clickPricingMenu() {
      await this.page.locator(this.Elements.pricing).click();
    }

    async getMessage() {
      return await this.page.locator(this.Elements.priceTitleText).textContent();
    }
}
