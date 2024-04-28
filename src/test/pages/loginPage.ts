import BasePage from "./basePage";
import { fixture } from "../../hooks/baseFixtures";

export default class LoginPageFactory extends BasePage {

    constructor() {
      super();
    }

    private Elements = {
      signInBtn: "//div[contains(@class, 'header-menu-wrapper')]//a[@href='/login']",
      userInput: "input[name='login']",
      passwordInput: "input[name='password']",
      loginBtn: "input[name='commit']",
      errorMessage: "div[id='js-flash-container'] div[role='alert']"
    }

    async launchApp(url: string) {
      await this.page.goto(url);
      fixture.sample = "I got this from fixture declaration";
    }

    async getPageTitle() {
      return await this.page.title();
    }

    async clickSignIn() {
      //await this.page.locator(this.Elements.signInBtn).click();
      await this.click(this.Elements.signInBtn);
    }

    async loginApp(user: string, pass: string) {
      //await this.page.locator(this.Elements.userInput).fill(user);
      //await this.page.locator(this.Elements.passwordInput).fill(pass);
      //await this.page.locator(this.Elements.loginBtn).click();

      await this.type(this.Elements.userInput, user);
      await this.type(this.Elements.passwordInput, pass);
      await this.click(this.Elements.loginBtn);
    }

    async getErrorMessage() {
      //return await this.page.locator(this.Elements.errorMessage).textContent();
      return await this.getValue(this.Elements.errorMessage);
    }
}
