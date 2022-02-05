import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
	readonly page: Page;
	readonly userName: Locator;
	readonly password: Locator;
	readonly loginButton: Locator;
	readonly validationMessage: Locator;

	constructor(page: Page) {
		this.page = page;
		this.userName = page.locator("[data-test='username']");
		this.password = page.locator("[data-test='password']");
		this.loginButton = page.locator("[data-test='login-button']");
		this.validationMessage = page.locator("[data-test='error']");
	}

	async pefromLogin(username: string, password: string) {
		await this.userName.fill(username);
		await this.password.fill(password);
		await this.loginButton.click();
	}

	async checkValidationMessage(expectedValidationMsg: string) {
		await expect(this.validationMessage).toHaveText(expectedValidationMsg);
	}
}
