import { expect, Page, test } from "@playwright/test";
import { DashboardPage } from "./Pages/dasboard.page";

test.use({
	storageState: "slDemoAuth.json",
});
test.describe("Items purchases", async () => {
	let page: Page;
	let dashboardPage: DashboardPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		dashboardPage = new DashboardPage(page);
		await page.goto("/inventory.html");
	});

	test.afterAll(async () => {
		await page.close();
	});

	test("Add items to cart", async () => {
		await dashboardPage.clickOnAddToCartButton();
	});

	test("Check shopping cart", async () => {
		await dashboardPage.checkItemsCountInCart("1");
	});
});
