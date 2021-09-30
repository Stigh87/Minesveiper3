//view
show();
function show() {
let appDiv = document.getElementById('app');
let html = '';

html += `<div>Score, time, level etc:</div>` //Lag variabler
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
<br>
<button class="btn" ${disable} onclick="newGame()">START</button>
<button class="btn" ${!disable} onclick="newGame()">RESTART</button>
<br>
<input class="option" type=menu>Slider Size
        <option1>"5 default"</option1>
        <option2></option1>
        <option3></option1>
        <option4></option1>
</>
<input class="option" type=menu>Slider Mines
        <option1>10?</option1>
        <option2></option1>
        <option3></option1>
        <option4></option1>
</>

</div>`
appDiv.innerHTML = html;
}