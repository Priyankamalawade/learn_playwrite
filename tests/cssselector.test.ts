
import { test, expect } from '@playwright/test';

//test('Practice CSS and text locators', async ({ page }) => {

    //await page.goto('https://demo.playwright.dev/todomvc/');

    // Find the input using its placeholder
    //const taskInput = page.getByPlaceholder('What needs to be done?');

    //await taskInput.fill('Learn CSS locators');
    //await taskInput.press('Enter');

    // Find the task using its visible text
    //await expect(page.getByText('Learn CSS locators'))
        //.toBeVisible();

//});


test('Practice different locators', async ({ page }) => {

    await page.goto('https://demo.playwright.dev/todomvc/');

    // Find the input using a CSS attribute selector
    const taskInput = page.locator(
        'input[placeholder="What needs to be done?"]'
    );

    await taskInput.fill('My first CSS locator test');
    await taskInput.press('Enter');

    // Find the task using its visible text
    const task = page.getByText('My first CSS locator test');

    await expect(task).toBeVisible();
    await expect(task).toHaveText('My first CSS locator test');

});

