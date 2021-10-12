// Controller
function setSize() {
    if (størrelse.value === "10") {width = 10;}
    if (størrelse.value === "12") {width = 12;}
    if (størrelse.value === "16") {width = 16;}
    if (størrelse.value === "20") {width = 20;}
}

function setMines() {
    if (difficulity.value === "1") {
        mines = parseInt((5 * (width*width))/100);
        difficulty = "Practice";}
    if (difficulity.value === "2") {
        mines = parseInt((10 * (width*width))/100);
        difficulty = "Normal";}
    if (difficulity.value === "3") {
        mines = parseInt((15 * (width*width))/100);
        console.log(mines);
        difficulty = "Intermediate";}
    if (difficulity.value === "4") {
        mines = parseInt((20 * (width*width))/100);
        difficulty = "Expert";}
}

function startTime() {
    if (time = '-') return;
    time = setInterval(function(){
        
        time++; 
    show();
    }, 1000);
}

function stopTime() {
    clearInterval(time);
    time = '-';
}

function newGame() {
    setSize();
    setMines();
    if (mines === 0) return;
    time = 0;
    shuffle();
    addNumbers();
    disable = "disabled";
    disable1 = "";
    minesLeft = mines;
show();
}

function restart() {
    object = {};
    shuffledArray = [];
    numberArray = [];
    tile = "tile";
    width = 0;
    mines = 0;
    difficulty = '-';
    flagToggle = "false";
    flagEnable = 'OFF';
    wrong = 0;
    flags = 0;
    winLoose = '';
    reveal = "false";
    boardClass = "";
    disable = "";
    disable1 = "disabled";

show();
}

function shuffle() {
   let mineArray = [];
   let validArray = [];
   let tempArray = []; 
        
        for (let i = 0; i < (mines); i++) {
            let object = {
                id: "div"+i,
                class: 'mine',
                // i: i, 
                field: '',
            }
            mineArray.push(object);
        }
        for (let i = 0; i < ((width * width)-mines); i++) {
            let object = {
                id: "div"+(mines+i),
                class: 'valid',  
                // i: width+i,
                field: '',
            }
            validArray.push(object);
        }   
    tempArray = validArray.concat(mineArray);
    shuffledArray = tempArray.sort(() => Math.random() - 0.5);
   
}

function clicked(element, totMines, index) {
    if (flagEnable === 'ON') {
        if (shuffledArray[index].class === 'valid') { 
            wrong++;
        }
        shuffledArray[index].class = 'flagged';
        flags++;   
    }
        
    if (flagEnable === 'OFF') {
        if (shuffledArray[index].class === 'flagged') {
            shuffledArray[index].class = 'valid'
            element.classList.remove('flagged');
            element.classList.add('valid');
            element.click();
            flags --;
            wrong --;
        }    
            if (shuffledArray[index].class === 'zero') return; 
            if (shuffledArray[index].class === 'field') return; 
            if (shuffledArray[index].class === 'boom') return; 
            if (totMines === 0) {
                open(element, totMines, index);
                shuffledArray[index].class = 'zero';
            }   
        
            if (totMines >= 1 && totMines < 9) {
                shuffledArray[index].class = 'field';
                shuffledArray[index].field = totMines;
            }
            if ((element.classList.contains('mine')) || 
                (shuffledArray[index].class === 'mine') || 
                (totMines === 'mine')) {
                //     //LEGG INN TAP FUNKSJON - Delay?
                    shuffledArray[index].class = 'boom';
                    boardClass = 'boardLock';
                if (reveal === 'false') {
                    revealMines()
                    reveal = 'true';
                    winLoose = 'GAME OVER'
                }   
    }
} 
minesLeft = (mines - flags);
 if (minesLeft === 0) checkWin();

show();
}

function flag() { 
    flagToggle != "false" ? flagToggle = "false" : flagToggle = "true";
    if (flagToggle == "true") {
        flagEnable = 'ON';
        boardClass = "boardFlag";
    }
    if (flagToggle == "false") {
        flagEnable = 'OFF';
        boardClass = "";
    }    
show();
}

function checkWin() {
    if (minesLeft === 0) {
        for (let i = 0; i < shuffledArray.length; i++) {
            if (shuffledArray[i].class === 'mine') {
                    winLoose = "Wrong flag(s)";         
                }
        }
        if (wrong === 0) {
            winLoose = '';
            if (flags === mines) {
                winLoose = "Congratulations!";
                boardClass = 'boardLock';
            }
        }
    } 
}

function revealMines() {
    for (let i = 0; i < shuffledArray.length; i++) {
        
        if (shuffledArray[i].class === 'mine') {
            setTimeout(function() {         
                const newI = shuffledArray[i];
                const checkedDiv = document.getElementById(newI.id);
                checkedDiv.click();
            }, 10) 
        }        
    }
}

function win() {
   
   
    winner();

}


function addNumbers() {

    for (let i = 0; i < shuffledArray.length; i++) {
        let totalMines = 0;
        let leftSide = (i % width === 0);
        let rightSide = (i % width === width - 1);

        if (shuffledArray[i].class === 'valid') {
        //Venstre    
            if ((element =! leftSide) && (shuffledArray[i - 1].class === 'mine')) totalMines++; 
        //Høyre    
            if ((element =! rightSide) && (shuffledArray[i + 1].class === 'mine')) totalMines++; 
        //Opp    
            if ((i >= width) && (shuffledArray[i - width].class === 'mine')) totalMines++; 
        //Ned    
            if ((i < (width * width - width)) && 
                (shuffledArray[i + width].class === 'mine')) totalMines++; 
        //Venstre Opp    
            if ((i >= width) && (element =! leftSide) && 
                (shuffledArray[i - 1 - width].class === 'mine')) totalMines++;
        //Høyre Opp    
            if ((i >= width) && (element =! rightSide) && 
                (shuffledArray[i + 1 - width].class === 'mine')) totalMines++; 
        //Venstre Ned
            if ((i < (width * width - width)) && (element =! leftSide) && 
                (shuffledArray[i - 1 + width].class === 'mine')) totalMines++;
        //Høyre Ned     
            if ((i < (width * width - width)) && (element =! rightSide) && 
                (shuffledArray[i + 1 + width].class === 'mine')) totalMines++; 
             
        shuffledArray[i].totalMines = totalMines;
        shuffledArray[i].i = i;
    }
        if (shuffledArray[i].class === 'mine') {
            shuffledArray[i].totalMines = 'mine';
            shuffledArray[i].i = i;
        } 
          
    }
show();    
}

function open(element, totMines, i) {
    
        let leftSide = (i % width === 0);
        let rightSide = (i % width === width - 1);
       
        if (totMines === 0 && element.classList.contains('valid')) {
            
         setTimeout(function()  {    
            //Venstre    
                if ((element =! leftSide) && (shuffledArray[i - 1].totalMines === 0)) {
                    const newI = shuffledArray[i - 1];
                    const checkedDiv = document.getElementById(newI.id);
                    checkedDiv.click();                   
                } 
            //Høyre    
                if ((element =! rightSide) && (shuffledArray[i + 1].totalMines === 0)) {
                    const newI = shuffledArray[i + 1];
                    const checkedDiv = document.getElementById(newI.id);
                    checkedDiv.click();
                }
            //Opp    
                if ((i >= width) && (shuffledArray[i - width].totalMines === 0)) {
                    const newI = shuffledArray[i - width];
                    const checkedDiv = document.getElementById(newI.id);
                    checkedDiv.click();
                };
            //Ned    
                if ((i< (width * width - width)) && 
                        (shuffledArray[i + width].totalMines === 0)) {
                            const newI = shuffledArray[i + width];
                            const checkedDiv = document.getElementById(newI.id);
                                checkedDiv.click();            
                };
            //Venstre Opp    
                if ((i >= width) && (element =! leftSide) && 
                    (shuffledArray[i - 1 - width].totalMines === 0)) {
                        const newI = shuffledArray[i - 1 - width];
                        const checkedDiv = document.getElementById(newI.id);
                            checkedDiv.click();
                        };
            //Høyre Opp    
                if ((i >= width) && (element =! rightSide) && 
                    (shuffledArray[i + 1 - width].totalMines === 0)) {
                        const newI = shuffledArray[i + 1 - width];
                        const checkedDiv = document.getElementById(newI.id);
                            checkedDiv.click();
                };
            //Venstre Ned
                if ((i < (width * width - width)) && (element =! leftSide) && 
                    (shuffledArray[i - 1 + width].totalMines === 0)) {
                        const newI = shuffledArray[i - 1 + width];
                        const checkedDiv = document.getElementById(newI.id);
                            checkedDiv.click();
                };
            //Høyre Ned     
                if ((i< (width * width - width)) && (element =! rightSide) && 
                    (shuffledArray[i + 1 + width].totalMines === 0)) {
                        const newI = shuffledArray[i + 1 + width];
                        const checkedDiv = document.getElementById(newI.id);
                            checkedDiv.click();
                };    
                return;         
            }, 10)
           
        } 
    }


