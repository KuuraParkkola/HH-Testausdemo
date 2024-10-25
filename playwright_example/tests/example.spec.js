const { test, expect } = require('@playwright/test');


test.describe('Frontpage', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000');
  })

  test('Quote Carousel Content Changes every 10 seconds', async ({page}) => {
    const testimonial_content = page.getByTestId("testimonial-quote-content");
    await testimonial_content.scrollIntoViewIfNeeded();
    const content_now = await testimonial_content.textContent();
    await expect(testimonial_content).not.toContainText(content_now, { timeout: 15000 });
    console.log("Text content changed");

    const time_at_change = Date.now();
    const content_changed = await testimonial_content.textContent();

    await expect(testimonial_content).not.toContainText(content_changed, { timeout: 15000 });
    const change_interval = Date.now() - time_at_change;
    console.log(`Text content changed again after ${change_interval}ms`);

    const target = 10000; // 10s
    const tolerance = 1000; // 1000ms
    await expect(Math.abs(target - change_interval)).toBeLessThan(tolerance);
  });

  test.describe('Contact Button', () => {
    test('In Services Section Opens Contact Modal', async ({page}) => {
      expect(await page.getByTestId("contact-modal").getAttribute('aria-hidden')).toBe("true");
      await page.getByTestId('services-request-quote-btn').click();
      expect(await page.getByTestId("contact-modal").getAttribute('aria-hidden')).toBe("false");
    });

    test('In CTA Section Opens Contact Modal', async ({page}) => {
      expect(await page.getByTestId("contact-modal").getAttribute('aria-hidden')).toBe("true");
      await page.getByTestId('cta-request-quote-btn').click();
      expect(await page.getByTestId("contact-modal").getAttribute('aria-hidden')).toBe("false");
    });
  });
});
