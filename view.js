//view
show();
function show() {
let appDiv = document.getElementById('app');
let html = '';

html += `<div>Score, time, level etc:</div>`
html += `<div id="board">`
for (let element of shuffledArray) {
// let first = (element.i % width === 0) ? 'first' : ''; ${first}SE PÅ DENNE!
// let leftSide = (index % width === 0); 
html += ` 
   <div id="${element.id}"
        class="${element.class} ${tile} " 
        onclick="clicked(this, ${element.totalMines}, ${element.i})">${element.totalMines}</div>
        `   
}
`</div>`
html += `<div id="nav">

Start, restart, newxtLvl, etc:
<button onclick="newGame()">START</button>

</div>`
appDiv.innerHTML = html;
}