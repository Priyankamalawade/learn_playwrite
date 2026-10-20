
import { test, expect } from '@playwright/test';

const tasks = [
    'Learn Playwright',
    'Practice TypeScript',
    'Build an automation framework'
];

test('Add multiple tasks using test data', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const taskInput = page.getByPlaceholder(
        'What needs to be done?'
    );

    for (const task of tasks) {
        await taskInput.fill(task);
        await taskInput.press('Enter');

        await expect(page.getByText(task)).toBeVisible();
    }
});
