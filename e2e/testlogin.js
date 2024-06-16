const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:4200');

        // Wait for the username input to be visible
        let usernameInput = await driver.wait(until.elementLocated(By.id('username')), 40000);
        await driver.wait(until.elementIsVisible(usernameInput), 70000);
        assert.ok(await usernameInput.isDisplayed(), "Le champ username est affiché");

        // Pause to observe the username element
        await driver.sleep(3000);

        // Wait for the password input to be visible
        let passwordInput = await driver.wait(until.elementLocated(By.id('password')), 40000);
        await driver.wait(until.elementIsVisible(passwordInput), 70000);
        assert.ok(await passwordInput.isDisplayed(), "Le champ password est affiché");

        // Pause to observe the password element
        await driver.sleep(3000);

        // Enter values into the fields
        await usernameInput.sendKeys('admin'); // Replace with the correct username
        await driver.sleep(1000); // Pause after entering the username
        await passwordInput.sendKeys('admin'); // Replace with the correct password
        await driver.sleep(1000); // Pause after entering the password

        // Submit the form
        let loginButton = await driver.findElement(By.css('button[type="submit"]'));
        await loginButton.click();

        // Pause to observe the submit button click
        await driver.sleep(3000);

        // Verify the URL of the home page
        await driver.wait(until.urlIs('http://localhost:4200/home'), 70000);

        // Pause to observe the home page
        await driver.sleep(5000);

        console.log("Le test de connexion a réussi !");
    } catch (error) {
        console.error('Le test a échoué avec l\'erreur:', error);
    } finally {
        await driver.quit();
    }
}

runTest();
