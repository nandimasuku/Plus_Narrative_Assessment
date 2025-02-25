import {expect ,type Location,type Page} from "@playwright/test";
import { pageFixture } from "../pageFixture";



export default class logoutPage {

    async click_logout_btn(){
        await pageFixture.page.getByRole('button', { name: 'Open Menu' }).click();
        await pageFixture.page.locator('[data-test="logout-sidebar-link"]').click(); 
    }
    async verify_user_is_logged_out(){
        await pageFixture.page.locator('[data-test="login-button"]').click();

        const text2= await pageFixture.page.getByText('Swag Labs').click();
        console.log("User is logged  out" + text2);

    }


   
}