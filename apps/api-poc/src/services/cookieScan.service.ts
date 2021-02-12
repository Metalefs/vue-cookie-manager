const puppeteer = require('puppeteer');
export class CookieScan{

    async Scan(url:string){
      const browser = await puppeteer.launch({});
      const page = await browser.newPage();
      await page.goto(url, {waitUntil : 'networkidle2' });
    
      // Here we can get all of the cookies
      return await page._client.send('Network.getAllCookies');
    }
}