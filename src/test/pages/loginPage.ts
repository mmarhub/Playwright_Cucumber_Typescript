import { Page } from "@playwright/test"

export default class LoginPageFactory {

    constructor(private page: Page) {    }

    private Elements = {
      signInBtn: "//div[contains(@class, 'header-menu-wrapper')]//a[@href='/login']",
      userInput: "input[name='login']",
      passwordInput: "input[name='password']",
      loginBtn: "input[name='commit']",
      errorMessage: "div[id='js-flash-container'] div[role='alert']"
    }

    async launchApp(url: string) {
      await this.page.goto(url);
    }

    async getPageTitle() {
      return await this.page.title();
    }

    async clickSignIn() {
      await this.page.locator(this.Elements.signInBtn).click();
    }

    async loginApp(user: string, pass: string) {
      await this.page.locator(this.Elements.userInput).fill(user);
      await this.page.locator(this.Elements.passwordInput).fill(pass);
      await this.page.locator(this.Elements.loginBtn).click();
    }

    async getErrorMessage() {
      return await this.page.locator(this.Elements.errorMessage).textContent();
    }
}
