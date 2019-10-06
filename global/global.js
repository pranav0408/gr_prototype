var btb = document.querySelector('.btb');
var btc = document.querySelector('.btc');
var d1 = document.querySelector('.d1');
var d2 = document.querySelector('.d2');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

d1.addEventListener('click', async ()=>{
    btc.style['opacity'] = "0";
    await sleep(400);
    btc.style['display'] = "none";
    await sleep(400);
    btb.style['display'] = "block";
    await sleep(400);
    btb.style['opacity'] = "1";
})

d2.addEventListener('click', async ()=>{
    btb.style['opacity'] = "0";
    await sleep(400);
    btb.style['display'] = "none";
    await sleep(400);
    btc.style['display'] = "block";
    await sleep(400);
    btc.style['opacity'] = "1";
})