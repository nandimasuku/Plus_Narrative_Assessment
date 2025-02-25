import {expect ,type Location,type Page} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";



export default class loginPage {

    async enter_username(){
         await pageFixture.page.locator('[data-test="username"]').click();
         await pageFixture.page.locator('[data-test="username"]').fill("standard_user");
    }
    async enter_password(){
        await pageFixture.page.locator('[data-test="password"]').click();
            await pageFixture.page.locator('[data-test="password"]').fill("password");
    }
    async click_login_btn(){
        await pageFixture.page.locator('[data-test="login-button"]').click();  
        await pageFixture.page.waitForTimeout(1000);
    }
    async verify_heading(){
        const text1 = await pageFixture.page.getByText('Swag Labs').click();
            console.log("Page heading" + text1);
            // await page.waitForTimeout(2000);
           //  await expect(text).toBeVisible();
            //  await page.waitForTimeout(1000);
              // await browser.close(); //use this for logout step
    }

    async verify_validation_error_message(){
        const error_message = await pageFixture.page.getByText('Epic sadface: Sorry, this user has been locked out.')
   console.log("Blocked user error message:" + error_message);
  //  await page.waitForTimeout(2000);
   //  await page.locator('[data-test="error"]').click();
  //  await browser.close(); //use this for logout step
    }
}