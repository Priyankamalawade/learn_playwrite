
import { test, expect } from '@playwright/test';

test('Debug new tab', async ({ page, context }) => {
    test.setTimeout(60000);

    await page.goto('https://the-internet.herokuapp.com/windows', {
        waitUntil: 'domcontentloaded'
    });

    console.log('Step 1: Original page opened');

    const newPagePromise = context.waitForEvent('page');

    await page.getByText('Click Here').click();

    console.log('Step 2: Clicked the link');

    const newPage = await newPagePromise;

    console.log('Step 3: New tab detected');
    console.log('New tab URL:', newPage.url());

    await newPage.waitForLoadState('domcontentloaded', {
        timeout: 15000
    }).catch(() => {
        console.log('New tab did not finish loading in time');
    });

    console.log('Step 4: Checking page content');

    await expect(newPage.locator('body')).toContainText('New Window', {
        timeout: 15000
    });
});
