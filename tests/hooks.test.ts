
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log('Opening TodoMVC website');
    await page.goto('https://demo.playwright.dev/todomvc/');
});

test('Test 1 - Check page title', async ({ page }) => {
    await expect(page).toHaveTitle(/TodoMVC/);
});

test('Test 2 - Check task input', async ({ page }) => {
    await expect(
        page.getByPlaceholder('What needs to be done?')
    ).toBeVisible();
});

test.afterEach(async () => {
    console.log('Test finished');
});
