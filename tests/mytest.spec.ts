import {test, expect} from '@playwright/test';
test('My First Test', async ({page}) => {
    await page.goto("https://google.com");
    //await expect(page).toHaveURL('https://google.com/');
    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');

});