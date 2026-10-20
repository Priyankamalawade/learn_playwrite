import { test, expect } from '@playwright/test';

//test('Practice checkbox', async ({ page }) => {
    //await page.goto('https://the-internet.herokuapp.com/checkboxes');

    //const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);

    //await firstCheckbox.check();

    //await expect(firstCheckbox).toBeChecked();
//});


//test('Practice unchecking a checkbox', async ({ page }) => {
    //await page.goto('https://the-internet.herokuapp.com/checkboxes');

    //const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);

    //await firstCheckbox.check();
    //await expect(firstCheckbox).toBeChecked();

    //await firstCheckbox.uncheck();
    //await expect(firstCheckbox).not.toBeChecked();
//});


test('Practice unchecking a checkbox', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/checkboxes',
        { waitUntil: 'domcontentloaded', timeout: 60000 }
    );

    const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);

    await firstCheckbox.check();
    await expect(firstCheckbox).toBeChecked();

    await firstCheckbox.uncheck();
    await expect(firstCheckbox).not.toBeChecked();
});



