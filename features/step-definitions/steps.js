import LoginPage from '../pages/login.page.js';
import { expect } from "@wdio/globals"
import { Given, When, Then } from "@wdio/cucumber-framework";


Given(/^User is located on the main page of saucedemo website/, async () => {
    await LoginPage.open('https://www.saucedemo.com/');
});

When(/^User click “Login” button/, async () => {
    await LoginPage.submitLoginBtn();
});

Then(/^User should see “(.*)” error message/, async (message) => {
    await LoginPage.errorMessageIsHidden();
    await expect(LoginPage.errorMessage).toHaveText(message);
});

