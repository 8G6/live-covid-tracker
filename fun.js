const options={
    headless:true,
    args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu'
          ],
    executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
}

fun_data=()=>{
    $=(a)=>{return document.querySelector(a).innerText}
    final=[]
    p='body > div > div > div.col.col-lg-3 > div:nth-child(3) > p:nth-child'
    for(i=1;i<18;i++){
      try{
        if(i%2!=0)
          final.push($(`${p}(${i})`).replace(/[,]/g,'')+','+$(`${p}(${i+1})`))
        }
        catch(e){
          console.log(e)
        }
      }
     final.filter(n=>n)
     return final
}

module.exports={
    options:options,
    fun:fun_data
}