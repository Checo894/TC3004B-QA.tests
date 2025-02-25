const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('test1', function () {
  this.timeout(30000);

  let driver;
  let vars;

  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  beforeEach(async function () {
    const chrome = require('selenium-webdriver/chrome');
    const options = new chrome.Options();
    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage', '--remote-debugging-port=9222');

    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    vars = {};
  });

  afterEach(async function () {
    if (driver) {
      const filename = this.currentTest.fullTitle().replace(/['"]+/g, '').replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const encodedString = await driver.takeScreenshot();
      fs.writeFileSync(`./screenshots/${filename}.png`, encodedString, 'base64');

      await driver.quit();  // ❌ Se eliminó driver.close() y se usa driver.quit()
    }
  });

  it('Add two letters', async function () {
    await driver.get("http://localhost:8000/");
    await driver.manage().window().setRect(1076, 960);
    await driver.findElement(By.id("num1")).click();
    await driver.findElement(By.id("num1")).sendKeys("a");
    await driver.findElement(By.id("num2")).sendKeys("a");
    await driver.findElement(By.css("button:nth-child(1)")).click();
  });
});
