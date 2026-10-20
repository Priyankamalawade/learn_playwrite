
import { test, expect } from '@playwright/test';

test('Record a video of test execution', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const taskInput = page.getByPlaceholder(
        'What needs to be done?'
    );

    await taskInput.fill('Learn Playwright videos');
    await taskInput.press('Enter');

    await expect(
        page.getByText('Learn Playwright videos')
    ).toBeVisible();
});
