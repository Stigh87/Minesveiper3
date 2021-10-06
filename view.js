//view
show();
function show() {
let appDiv = document.getElementById('app');
let html = '';



html += `<div id="info">MINESVEIPER: <br>
                </br>
                Field:${width}x${width} </br>         
                Mines:${mines}  </br>
                ${difficulty} </br>
                Time: ${time}sec <br> 
                </br>
                Velg størrelse: </br>  
                        <select id="størrelse" class="option" ${disable} onchange="setSize()">
                        <option name="null" value="" ></option> 
                        <option name="Small" value="10" >10</option>
                        <option name="Medium" value="12" >12</option>
                        <option name="Medium" value="16" >16</option>
                        <option name="Large" value="18" >18</option>
                        </select>
                <br>        
                </br>
                Velg vansklighetsgrad: </br>
                <select id="difficulity" class="option" ${disable} onchange="setMines()" value="difficulity.value">
                <option name="" value=""></option>
                <option value="1">Practice</option>
                <option value="2">Normal</option>
                <option value="3">Intermediate</option>
                <option value="4">Expert</option>
                </select>
                </br>


        <button class="btn" ${disable} onclick="newGame()">START</button> </br>
        <button class="btn" ${disable1} onclick="restart()">RESTART</button>
        </div>`

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
`
appDiv.innerHTML = html;
}