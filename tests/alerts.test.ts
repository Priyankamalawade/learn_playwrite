
import { test, expect } from '@playwright/test';

test('Check JavaScript alert page', async ({ page }) => {
    test.setTimeout(60000);

    console.log('Opening page...');

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts',
        { waitUntil: 'domcontentloaded', timeout: 20000 }
    );

    console.log('Page loaded.');

    await expect(
        page.getByRole('button', { name: 'Click for JS Alert' })
    ).toBeVisible();

    console.log('Alert button is visible.');
});
