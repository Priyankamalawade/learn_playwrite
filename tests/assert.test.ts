
import { test, expect } from '@playwright/test';

test('Practice Playwright assertions', async ({ page }) => {

    await page.goto('https://demo.playwright.dev/todomvc/');

    const taskInput = page.getByPlaceholder('What needs to be done?');

    await taskInput.fill('Learn Playwright');

    await taskInput.press('Enter');

    // Assertion 1: Verify the task is visible
    await expect(page.getByText('Learn Playwright'))
        .toBeVisible();

    // Assertion 2: Verify the input is empty
    await expect(taskInput).toHaveValue('');

    // Assertion 3: Verify the task text
    await expect(page.getByText('Learn Playwright'))
        .toHaveText('Learn Playwright');

});
