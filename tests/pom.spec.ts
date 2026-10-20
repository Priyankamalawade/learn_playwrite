
import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Add a task using Page Object Model', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.open();
    await todoPage.addTask('Learn Page Object Model');

    await expect(
        page.getByText('Learn Page Object Model')
    ).toBeVisible();
});
