import { chromium } from 'playwright';

async function captureScrolled() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  await page.goto('http://localhost:5173/');
  await page.locator('.game-card-active .btn-primary').click();
  await page.locator('button:has-text("Enter 5 Player Names")').click();
  await page.locator('button:has-text("START GAME")').click();

  for (let i = 0; i < 5; i++) {
    await page.locator('.player-select-btn').first().click();
    await page.waitForTimeout(100);
    await page.locator('button:has-text("HIDE & PASS PHONE")').click();
    await page.waitForTimeout(100);
  }

  await page.locator('.suspect-card').first().click();
  await page.locator('button:has-text("REVEAL RESULT")').click();
  await page.waitForTimeout(600);

  // Scroll to bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshot_8_result_buttons.png' });

  console.log('Result buttons screenshot saved!');
  await browser.close();
}

captureScrolled();
