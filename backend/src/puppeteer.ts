import puppeteer from 'puppeteer';

export async function setupPuppeteer() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  return browser;
} 