const { By, until,Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const options = new chrome.Options();
 //options.addArguments('--headless');

async function TestUrl() {
    let driver;
    try {
        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .build();

        const testUrl = "https://www.google.com";
        const testPortfolio="https://ashdude14-github-io-git-main-ashdude14s-projects.vercel.app/"
        //await driver.get(testUrl);
         await driver.get(testPortfolio)
        // Wait for the search input field to be visible
        //await driver.wait(until.elementLocated(By.name("q")), 5000);

        // Find the search input field and enter a query
        //const searchInput = await driver.findElement(By.name("q"));
       // await searchInput.sendKeys('what is the weather outside?');

       await driver.wait(until.elementLocated(By.className('react-switch-bg')),15000)
       
        const searchRadio= await driver.findElement(By.className('react-switch-bg'));
       
        await searchRadio.click();


        // Submit the search
        //await searchInput.submit();

        // Wait for the search results to be visible
        //await driver.wait(until.elementLocated(By.id("result-stats")), 10000);

        // Check if the search results are displayed
        //const resultStats = await driver.findElement(By.id("result-stats"));

        await driver.wait(until.elementLocated(By.className("pro__1")), 10000);
        const clickDisneyUiClone = await driver.findElement(By.className("pro__1"));
        clickDisneyUiClone.click();
            
      
        await driver.wait(until.elementLocated(By.className('pro pro__1')),1000)
        const resultStats= await driver.findElement(By.className('pro pro__1'))
        if (resultStats) {
            console.log("Search successful");
            
        } else {
            console.log("Search failed");
        }
    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

TestUrl();
