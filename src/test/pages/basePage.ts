import { Locator, Page } from "@playwright/test";
import { fixture } from "../../hooks/baseFixtures";

export default class BasePage {

  protected page: Page;

  constructor() {
    this.page = fixture.page;
  }

  getLocator(locator: string) {
    return this.page.locator(locator);
  }

  async click(locator: string) {
    await this.getLocator(locator).click();
  }

  async type(locator: string, value: string) {
    await this.getLocator(locator).fill(value);
  }

  async getValue(locator: string): Promise<string | null> {
    return await this.getLocator(locator).textContent();
  }
}
