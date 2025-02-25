import { Before, After , BeforeAll, AfterAll, Status, AfterStep} from "@cucumber/cucumber";
import { chromium, Browser , Page, BrowserContext} from "@playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});

})

Before(async function (){
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page= page;
});

AfterStep (async function({ pickle , result}) {
    const img = await pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img , "imagine/png");
});

After(async function ({ pickle , result}) {
    //Print results
    console.log(result?.status)
    //screenshot for failed steps
    if (result?.status == Status.FAILED){
    const img = await pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img , "imagine/png");
    }
    await pageFixture.page.close();
    await context.close();
}
)
AfterAll (async function () {
    await browser.close();
})