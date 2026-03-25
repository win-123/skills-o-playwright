import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';

export async function runPlaywright(code) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));

  try {
    const fn = new Function('page', 'context', 'browser', code);
    await fn(page, context, browser);

    const screenshot = await page.screenshot();
    const screenshotPath = join(process.cwd(), `screenshot-${Date.now()}.png`);
    writeFileSync(screenshotPath, screenshot);

    return { success: true, logs, screenshotPath };
  } catch (error) {
    return { success: false, error: error.message, logs };
  } finally {
    await browser.close();
  }
}
