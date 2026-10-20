
import { test, expect } from '@playwright/test';

test('Get a post from an API', async ({ request }) => {
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Check the HTTP status
    expect(response.status()).toBe(200);

    // Read the response body as JSON
    const data = await response.json();

    // Verify the returned data
    expect(data.userId).toBe(1);
    expect(data.id).toBe(1);
    expect(data.title).toBeTruthy();
});
