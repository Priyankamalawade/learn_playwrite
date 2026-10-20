
import { test, expect } from '@playwright/test';

test('Practice auto-waiting', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const taskInput = page.getByPlaceholder(
        'What needs to be done?'
    );

    await taskInput.fill('Learn auto-waiting');
    await taskInput.press('Enter');

    await expect(
        page.getByText('Learn auto-waiting')
    ).toBeVisible();
});
