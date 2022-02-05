import { test, Page, expect } from "@playwright/test";
import { LoginPage } from "./Pages/login.page";

test.describe("Login scenarios", async () => {
	let page: Page;
	let loginPage: LoginPage;
	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		loginPage = new LoginPage(page);
		await page.goto("/");
	});

	test.afterAll(async () => {
		await page.close();
	});

	test("Check locked out user", async () => {
		await loginPage.pefromLogin("locked_out_user", "secret_sauce");
		await loginPage.checkValidationMessage(
			"Epic sadface: Sorry, this user has been locked out."
		);
	});

	test("Check valid login user", async ({ baseURL }) => {
		await loginPage.pefromLogin("standard_user", "secret_sauce");
		expect(page.url()).toBe(`${baseURL}/inventory.html`);
	});
});
