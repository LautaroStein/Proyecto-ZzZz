const { Builder, By } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const credenciales = {
    email: 'seleniumAdmin@gmail.com',
    password: '12345678'
}


function adminTest() {

    describe('Admin Test', function () {
        this.timeout(30000)
        let webDriver = new Builder().forBrowser('chrome').build()
        webDriver.manage().window().maximize()

        it('Verificacion de Aceptacion de NFT pendiente - Debe encontrar un mensaje de exito al validar un NFT creado por el usuario', async () => {

            await webDriver.get('https://www.youtube.com/')
            await webDriver.sleep(5000)
            webDriver.quit()
            // await webDriver.findElement(By.name('email')).sendKeys(credenciales.email)
        })


    })

}


adminTest()