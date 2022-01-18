const { Builder, By } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const credenciales = {
    email: 'seleniumGame@gmail.com',
    password: '12345678'
}


function gameTest() {

    describe('Game Test', function () {
        this.timeout(30000)
        let webDriver = new Builder().forBrowser('chrome').build()
        webDriver.manage().window().maximize()

        it('Verificacion de NFT de typo game - Debe encontrar un mensaje haciendo referencia a la falta de NFT de tipo "Game"', async () => {

            await webDriver.get('https://www.google.com/')
            await webDriver.sleep(5000)
            webDriver.quit()
            // await webDriver.findElement(By.name('email')).sendKeys(credenciales.email)
        })


    })

}


gameTest()