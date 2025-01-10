import BasePage from "./basePage";

export default class PricingPageFactory extends BasePage{

    constructor() {
      super();
    }

    private Elements = {
      linkCreatAccount: "//a[contains(text(),'Create an account')]",
      githubImage: "header[role='banner'] a[aria-label='Homepage']",
      pricing: "//nav[@aria-label='Global']//a[contains(text(),'Pricing')]",
      priceTitleText: "//h1[@class='h2-mktg']"
    }

    async clickCreatAccount() {
      await this.page.locator(this.Elements.linkCreatAccount).click();
    }

    async clickGitHubImageIcon() {
      //await this.page.locator(this.Elements.githubImage).click();
      await this.page.goto("https://github.com/pricing");
    }

    async clickPricingMenu() {
      await this.page.locator(this.Elements.pricing).click();
    }

    async getMessage() {
      return await this.page.locator(this.Elements.priceTitleText).textContent();
    }
}
