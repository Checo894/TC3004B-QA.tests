// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Odds values sum', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Odds values sum', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect(1073, 958)
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("1")
    await driver.findElement(By.id("num2")).sendKeys("1")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.close()
  })
})
