const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log('Lanzamos navegador');
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://es.wikipedia.org/wiki/Node.js');

        const titulo1 = await page.evaluate(() => {
            const h1 = document.querySelector('h1');
            console.log(h1.innerHTML);
            return h1.innerHTML;
        });

        console.log(titulo1);

        console.log('cerramos navegador...');
        await browser.close();
        console.log('navegador cerrado');
    } catch (error) {
        console.error('Error:', error);
    }
})();

