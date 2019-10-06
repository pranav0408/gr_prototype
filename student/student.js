var d1 = document.querySelector('.d1');
var d2 = document.querySelector('.d2');
var d3 = document.querySelector('.d3');
var d4 = document.querySelector('.d4');
var content = document.querySelectorAll('.right-content');
var hs = document.querySelector('.high-school');
var ug = document.querySelector('.ug');
var pg = document.querySelector('.pg');
var general = document.querySelector('.general');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

d1.addEventListener('click', async ()=>{
    content.forEach( (el) => {el.style['opacity'] = "0";} )
    await sleep(400);
    content.forEach ( (el) => { el.style['display'] = "none";} )
    await sleep(400);
    hs.style['display'] = "block";
    await sleep(400);
    hs.style['opacity'] = "1";
})

d2.addEventListener('click', async ()=>{
    content.forEach( (el) => {el.style['opacity'] = "0";} )
    await sleep(400);
    content.forEach ( (el) => { el.style['display'] = "none";} )  
    await sleep(400);
    ug.style['display'] = "block";
    await sleep(400);
    ug.style['opacity'] = "1";
})

d3.addEventListener('click', async ()=>{
    content.forEach( (el) => {el.style['opacity'] = "0";} )
    await sleep(400);
   content.forEach ( (el) => { el.style['display'] = "none";} )  
    await sleep(400);
    pg.style['display'] = "block";
    await sleep(400);
    pg.style['opacity'] = "1";
})

d4.addEventListener('click', async ()=>{
    content.forEach( (el) => {el.style['opacity'] = "0";} )
    await sleep(400);
   content.forEach ( (el) => { el.style['display'] = "none";} )  
    await sleep(400);
    general.style['display'] = "block";
    await sleep(400);
    general.style['opacity'] = "1";
})