import { expect, Locator, Page } from "@playwright/test";

export class DashboardPage {
	readonly page: Page;
	readonly firstItem: Locator;
	readonly swagLabsLogo: Locator;
	readonly shoppingCart: Locator;

	constructor(page: Page) {
		this.page = page;
		this.firstItem = page.locator("data-test=add-to-cart-sauce-labs-backpack");
		this.shoppingCart = page.locator("span.shopping_cart_badge");
	}

	async clickOnAddToCartButton() {
		await this.firstItem.click();
	}

	async checkItemsCountInCart(itemsCount: string) {
		await expect(this.shoppingCart).toHaveText(itemsCount);
	}
}
