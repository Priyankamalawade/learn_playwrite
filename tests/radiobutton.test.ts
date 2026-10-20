import { test, expect } from '@playwright/test';
test('Practice radio buttons', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');

    const yesRadio = page.getByText('Yes', { exact: true });

    await yesRadio.click();

    await expect(page.locator('input#yesRadio')).toBeChecked();
});
