
import { type Page, type Locator } from '@playwright/test';

export class TodoPage {
    readonly page: Page;
    readonly taskInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.taskInput = page.getByPlaceholder(
            'What needs to be done?'
        );
    }

    async open() {
        await this.page.goto(
            'https://demo.playwright.dev/todomvc/'
        );
    }

    async addTask(task: string) {
        await this.taskInput.fill(task);
        await this.taskInput.press('Enter');
    }
}
