import { by, element, expect } from 'detox';

describe('Main', () => {
  it('should have welcome screen', async () => {
    await expect(
      element(by.text('Open up App/ to start working on your app!')),
    ).toBeVisible();
  });
});
