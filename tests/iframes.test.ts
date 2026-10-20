
import { test, expect } from '@playwright/test';

test('Read text inside an iframe', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');

    const iframe = page.frameLocator('iframe[title="W3Schools HTML Tutorial"]');

    await expect(iframe.locator('body')).toBeVisible();
});
