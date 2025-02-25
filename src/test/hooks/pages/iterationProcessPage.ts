import {expect ,type Location,type Page} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";



export default class iterationProcessPage {

    async navigate_product_listing_page(){
        await pageFixture.page.waitForTimeout(1000);
        await pageFixture.page.locator('[data-test="inventory-container"]').click();
    }
    async select_items(){
         await pageFixture.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await pageFixture.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await pageFixture.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    }
    async add_items_to_cart(){
        await pageFixture.page.locator('[data-test="shopping-cart-link"]').click();

    }
    async checkout_the_cart(){
        await pageFixture.page.locator('[data-test="checkout"]').click();

    }
    async enter_random_valid_data(){
        await pageFixture.page.locator('[data-test="firstName"]').click();
            await pageFixture.page.locator('[data-test="firstName"]').fill('Tom');
            await pageFixture.page.waitForTimeout(2000);
            await pageFixture.page.locator('[data-test="lastName"]').click();
            await pageFixture.page.locator('[data-test="lastName"]').fill('Jerry');
            await pageFixture.page.waitForTimeout(2000);
            await pageFixture.page.locator('[data-test="postalCode"]').click();
            await pageFixture.page.locator('[data-test="postalCode"]').fill('7676');
            await pageFixture.page.waitForTimeout(2000);
            await pageFixture.page.locator('[data-test="continue"]').click();
    }
    async verify_expected_confirmation_message(){
        await pageFixture.page.locator('[data-test="payment-info-label"]').click();
        await pageFixture.page.locator('[data-test="payment-info-value"]').click();
        await pageFixture.page.locator('[data-test="finish"]').click();
        await pageFixture.page.locator('[data-test="complete-header"]').click();
        await pageFixture.page.locator('[data-test="complete-text"]').click();
        await pageFixture.page.locator('[data-test="back-to-products"]').click();
    }
}