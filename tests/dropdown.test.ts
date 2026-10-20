
import { test, expect } from '@playwright/test';

//test('Practice dropdown selection', async ({ page }) => {
    //await page.goto('https://the-internet.herokuapp.com/dropdown', {
        //waitUntil: 'domcontentloaded',
        //timeout: 100000
    //});

    //const dropdown = page.locator('#dropdown');

    //await dropdown.selectOption('2');

    //await expect(dropdown).toHaveValue('2');
//});



test('Select dropdown by visible label', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown', {
        waitUntil: 'domcontentloaded',
        timeout: 100000
    });

    const dropdown = page.locator('#dropdown');

    await dropdown.selectOption({ label: 'Option 1' });

    const selectedValue = await dropdown.inputValue();

    console.log('Selected value:', selectedValue);

    await expect(dropdown).toHaveValue('1');
});

