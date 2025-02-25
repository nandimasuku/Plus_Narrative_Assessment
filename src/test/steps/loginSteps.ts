import { Given , When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { chromium, Page, Browser, expect, firefox} from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from "../hooks/pages/LoginPage";


setDefaultTimeout (60 * 1000 * 2)

const loginPage = new LoginPage();

Given('User navigates to the application', async function () {
   
    await pageFixture.page.goto("https://www.saucedemo.com/");
    
  });

  Given('enter username {string}', async function (username) {
    await pageFixture.page.waitForTimeout(1000);
    await loginPage.enter_username();
 
  });


  Given('enter password {string}', async function (password) {
     await loginPage.enter_password();
    
  });


  Then('click login button', async function () {
    await loginPage.click_login_btn();
  });

  Then('verify the standard_user is successfully logged in', async function () {
    await loginPage.verify_heading();
  });

  Then('verify the problem_user is successful logged in', async function () {
    await loginPage.verify_heading();

  });


  Then('verify blocked user validation message', async function () {
   await loginPage.verify_validation_error_message();

  
  });


