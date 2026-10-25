import {test, expect, Locator} from '@playwright/test';
test ('login test', async({page}) =>
{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("standard_user");
    await page.locator('input[id="password"]').fill("secret_sauce");
    const login : Locator= page.locator('input[id="login-button"]');
    await login.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');



})
