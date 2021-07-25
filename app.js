
const express    = require('express')
const ejs        = require('express-ejs-layouts')
const puppeteer  = require('puppeteer-core');
const {fun,options}=require('./fun');


const app     = express()
const port    = 3000

app.set('view engine','ejs');
app.set('viwes',__dirname+'/viwes')
app.use(ejs)
app.use(express.static('public'))
let data;
(async () => {
    const browser = await puppeteer.launch(options)
    const page    = await browser.newPage();
    await page.setDefaultNavigationTimeout(0)
    await page.goto('https://ncov2019.live/');
    while(true){
        await page.waitForSelector('body > div > div > div.col.col-lg-3 > div:nth-child(3)',{visible:true})
        data=await page.evaluate(fun)
        console.log(data)
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    }
})();
app.get('/',(req,res)=>{
    res.render('layout',{html:data  ? data.join('<br>') : 'page initilaizing please wait'})
})

app.listen(port,()=>console.log(`Server is running at ${port} in ${new Date().toString().split(' ')[4]}`))