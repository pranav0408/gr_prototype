var cd1 = document.querySelector('.cd1');
var cd2 = document.querySelector('.cd2');
var d1 = document.querySelector('.d1');
var d2 = document.querySelector('.d2');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

d1.addEventListener('click', async ()=>{
    cd2.style['opacity'] = "0";
    await sleep(400);
    cd2.style['display'] = "none";
    await sleep(400);
    cd1.style['display'] = "block";
    await sleep(400);
    cd1.style['opacity'] = "1";
})

d2.addEventListener('click', async ()=>{
    cd1.style['opacity'] = "0";
    await sleep(400);
    cd1.style['display'] = "none";
    await sleep(400);
    cd2.style['display'] = "block";
    await sleep(400);
    cd2.style['opacity'] = "1";
})