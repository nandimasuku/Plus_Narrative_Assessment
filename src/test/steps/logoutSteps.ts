import { Given , When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { chromium, Page, Browser, expect, firefox} from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import LogoutPage from "../hooks/pages/logoutPage";


setDefaultTimeout (60 * 1000 * 2)

const logoutPage = new LogoutPage();

Then('simulate the logout action by clicking the logout button.', async function () {
  await pageFixture.page.waitForTimeout(1000);
  await logoutPage.click_logout_btn();
});

Then('verify that the user is logged out and redirected to the login page.', async function () {
  await pageFixture.page.waitForTimeout(1000);
  await logoutPage.verify_user_is_logged_out();
});

  

