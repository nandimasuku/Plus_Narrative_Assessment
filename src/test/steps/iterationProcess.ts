import { Given , When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { chromium, Page, Browser, expect, firefox} from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from "../hooks/pages/LoginPage";
import IterationProcessPage from "../hooks/pages/iterationProcessPage";


setDefaultTimeout (60 * 1000 * 2)

const iterationProcessPage = new IterationProcessPage();


setDefaultTimeout (60 * 1000 * 2)

Then('navigate to the product listing page', async function () {
   await iterationProcessPage.navigate_product_listing_page();

  });


  Then('randomly select theree items', async function () {
    await iterationProcessPage.select_items();   

  });

  Then('add items to the cart', async function () {
    await iterationProcessPage.add_items_to_cart();
  });

  Then('navigate to the checkout page with items in the cart', async function () {
    await iterationProcessPage.checkout_the_cart()

  });


  Then('use random but valid test data', async function () {
    await iterationProcessPage.enter_random_valid_data()
  
  });
  Then('Verify that the page displays the expected confirmation message.', async function () {
    await iterationProcessPage.verify_expected_confirmation_message();
  });

