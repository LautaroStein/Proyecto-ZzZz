const { Builder, By } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const credenciales = {
    email: 'seleniumSubscribed@gmail.com',
    password: '12345678'
}


function subscribedTest() {

    describe('Subscribed Test', function () {
        this.timeout(30000)
        let webDriver = new Builder().forBrowser('chrome').build()
        webDriver.manage().window().maximize()

        it('Verificacion en la creacion de oferta - Debe encontrar un mensaje de exito al crear la oferta', async () => {

            await webDriver.get('https://www.google.com/')
            await webDriver.sleep(5000)
            webDriver.quit()
            // await webDriver.findElement(By.name('email')).sendKeys(credenciales.email)
        })


    })

}


subscribedTest()