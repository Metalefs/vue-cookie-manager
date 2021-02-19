"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieScan = void 0;
const puppeteer = require('puppeteer');
class CookieScan {
    async Scan(url) {
        try {
            const browser = await puppeteer.launch({});
            const [page] = await browser.pages();
            await page.goto(url, {
                waitUntil: 'networkidle0',
            });
            const sources = await page.evaluate(() => Array.from(document.querySelectorAll('script')).map((elem) => elem.src));
            console.log(sources);
            const cookies = await page._client.send('Network.getAllCookies');
            await browser.close();
            return { cookies, sources };
        }
        catch (err) {
            throw err;
        }
    }
}
exports.CookieScan = CookieScan;
//# sourceMappingURL=cookieScan.service.js.map