const puppeteer = require('puppeteer');

async function scrapeChannel(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[4]/div/div/div[2]/div/section/div/div[2]/div[1]/div[2]/div[1]/div[1]/h1');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    const [el2] = await page.$x('/html/body/div[4]/div/div/div[2]/div/section/div/div[2]/div[1]/div[1]/div[2]/div/div[1]/div/div[1]/div[1]/div/div[1]/div/img');
    const src = await el2.getProperty('src');
    const avatarURL = await src.jsonValue();

    const [el3] = await page.$x('/html/body/div[4]/div/div/div[2]/div/section/div/div[2]/div[2]/div/div[1]/div[1]/div/div[1]/div[1]/div/span');
    const text2 = await el3.getProperty('innerText');
    const price = await text2.jsonValue();

    browser.close();

    return { name, avatarURL, price }

}

module.exports = {
    scrapeChannel
}