//view
show();
function show() {
let appDiv = document.getElementById('app');
let html = '';



html += `<div id="info">Mines:${mines} Field:${width}x${width} Time:${time}sec ${difficulty}</div>` //Lag variabler
html += `<div id="board" class="${looseClass}">`
for (let element of shuffledArray) {
let first = (element.i % width === 0) ? 'first' : ''; 
html += ` 
   <div id="${element.id}"
        class="${element.class} ${first} ${tile}" 
        onclick="clicked(this, ${element.totalMines}, ${element.i})">${element.field}</div>
        `   
}


html += `</div>
<div id="nav">
        <br>
        <button class="btn" ${disable} onclick="newGame()">START</button>
        <button class="btn" ${disable1} onclick="restart()">RESTART</button>
        <br>
        </>
        <div id="tekst">Velg størrelse brett og antall miner</div>

                <select id="størrelse" class="option" ${disable} onchange="setSize()">
                <option name="null" value="" ></option> 
                <option name="Small" value="10" >10</option>
                <option name="Medium" value="12" >12</option>
                <option name="Medium" value="16" >16</option>
                <option name="Large" value="20" >20</option>

                </select>
                <br>
                <select id="difficulity" class="option" ${disable} onchange="setMines()" value="difficulity.value">
                <option name="" value=""></option>
                <option name="Practice" value="1">Practice</option>
                <option name="Easy" value="2">Easy</option>
                <option name="Medium" value="3">Medium</option>
                <option name="Hard" value="4">Hard</option>
                </select>
</div>
`
appDiv.innerHTML = html;
}