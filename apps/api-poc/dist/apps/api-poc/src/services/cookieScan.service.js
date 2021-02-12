"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieScan = void 0;
const puppeteer = require('puppeteer');
class CookieScan {
    async Scan(url) {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });
        return await page._client.send('Network.getAllCookies');
    }
}
exports.CookieScan = CookieScan;
//# sourceMappingURL=cookieScan.service.js.map