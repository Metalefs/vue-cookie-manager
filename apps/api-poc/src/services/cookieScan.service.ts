// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer');
export class CookieScan {
  async Scan(url: string) {
    try {
      const browser = await puppeteer.launch({});
      const [page] = await browser.pages();
      await page.goto(url, {
        waitUntil: 'networkidle0',
      });

      const sources = await page.evaluate(() =>
        Array.from(document.querySelectorAll('script')).map((elem) => elem.src),
      );
      console.log(sources);

      // Here we can get all of the cookies
      const cookies = await page._client.send('Network.getAllCookies');
      await browser.close();

      return { cookies, sources };
    } catch (err) {
      throw err;
    }
  }
}
