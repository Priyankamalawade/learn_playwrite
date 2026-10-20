
import { test, expect } from '@playwright/test';

test('Practice Playwright actions', async ({ page }) => {

    await page.goto('https://demo.playwright.dev/todomvc/');

    await page.getByPlaceholder('What needs to be done?')
        .fill('Learn Playwright');

    await page.getByPlaceholder('What needs to be done?')
        .press('Enter');

    await expect(page.getByText('Learn Playwright'))
        .toBeVisible();

});
