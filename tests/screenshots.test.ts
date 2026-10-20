
import { test, expect } from '@playwright/test';

test('Take a screenshot', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    await page.getByPlaceholder('What needs to be done?')
        .fill('Learn Playwright screenshots');

    await page.getByPlaceholder('What needs to be done?')
        .press('Enter');

    await expect(
        page.getByText('Learn Playwright screenshots')
    ).toBeVisible();

    await page.screenshot({
        path: 'screenshots/todo-test.png',
        fullPage: true
    });


});
