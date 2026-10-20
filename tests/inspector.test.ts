
import { test, expect } from '@playwright/test';

test('Learn Playwright Inspector', async ({ page }) => {

    await page.goto('https://demo.playwright.dev/todomvc/');

    // Pause the test and open Playwright Inspector
    await page.pause();

    const taskInput = page.getByPlaceholder(
        'What needs to be done?'
    );

    await taskInput.fill('Learning Inspector');

    await taskInput.press('Enter');

    await expect(
        page.getByText('Learning Inspector')
    ).toBeVisible();

});
