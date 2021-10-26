// Controller
function setSize() {
    if (størrelse.value === "10") {width = 10;}
    if (størrelse.value === "12") {width = 12;}
    if (størrelse.value === "16") {width = 16;}
    if (størrelse.value === "20") {width = 20;}
}
function setMines() {
    if (difficulity.value === "1") {
        mines = ((5 * parseInt(width*width))/100);
        difficulty = "Practice";}
    if (difficulity.value === "2") {
        mines = parseInt((10 * (width*width))/100);
        difficulty = "Easy";}
    if (difficulity.value === "3") {
        mines = parseInt((15 * (width*width))/100);
        console.log(mines);
        difficulty = "Medium";}
    if (difficulity.value === "4") {
        mines = parseInt((20 * (width*width))/100);
        difficulty = "Hard";}
}
function startTime() {
    if (time = '-') return;
    time = setInterval(function(){
        
        time++; 
    console.log(time)
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
    startTime();
    shuffle();
    addNumbers();
    disable = "disabled";
    disable1 = "";
show();
}

function restart() {
    object = {};
    shuffledArray = [];
    numberArray = [];
    tile = "tile";
    width = 0;
    mines = 0;
    stopTime();
    time = 0;
    difficulty = '-';

    looseClass = "";
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
                class: "mine",
                i: i, 
                field: '',
            }
            mineArray.push(object);
        }
        for (let i = 0; i < ((width * width)-mines); i++) {
            let object = {
                id: "div"+(width+i),
                class: "valid",  
                i: width+i,
                field: '',
            }
            validArray.push(object);
        }   
    tempArray = validArray.concat(mineArray);
    shuffledArray = tempArray.sort(() => Math.random() - 0.5);
}

function clicked(element, type, i) {
    // endre style / farge
    // bilde på mines? 
    if (type === 0) {
        open(element, type, i);
        shuffledArray[i].class = "zero";
    }
    if (type >= 1) {
        shuffledArray[i].class = "field";
        shuffledArray[i].field = type;
    }
    
    if (type === 10){
    //     //LEGG INN TAP FUNKSJON - Delay?
        shuffledArray[i].class = "boom";
        loose();
    }
show();
}
function flag(element){ 
console.log("kjører")
}



function loose() {
    console.log("kjører");
    looseClass = 'boardLock';
    alert("Du Tapte. Trykk restart for nytt spill");
}


function addNumbers() {

    for (let index = 0; index < shuffledArray.length; index++) {
        let totalMines = 0;
        let leftSide = (index % width === 0);
        let rightSide = (index % width === width - 1);
       
        if (shuffledArray[index].class === 'valid') {
        //Venstre    
            if ((element =! leftSide) && (shuffledArray[index - 1].class === 'mine')) totalMines++; 
        //Høyre    
            if ((element =! rightSide) && (shuffledArray[index + 1].class === 'mine')) totalMines++; 
        //Opp    
            if ((index >= width) && (shuffledArray[index - width].class === 'mine')) totalMines++; 
        //Ned    
            if ((index < (width * width - width)) && 
                (shuffledArray[index + width].class === 'mine')) totalMines++; 
        //Venstre Opp    
            if ((index >= width) && (element =! leftSide) && 
                (shuffledArray[index - 1 - width].class === 'mine')) totalMines++;
        //Høyre Opp    
            if ((index >= width) && (element =! rightSide) && 
                (shuffledArray[index + 1 - width].class === 'mine')) totalMines++; 
        //Venstre Ned
            if ((index < (width * width - width)) && (element =! leftSide) && 
                (shuffledArray[index - 1 + width].class === 'mine')) totalMines++;
        //Høyre Ned     
            if ((index < (width * width - width)) && (element =! rightSide) && 
                (shuffledArray[index + 1 + width].class === 'mine')) totalMines++; 
             
        shuffledArray[index].totalMines = totalMines;
        shuffledArray[index].i = index;
    }
        if (shuffledArray[index].class === 'mine') {
            shuffledArray[index].totalMines = 10;
            shuffledArray[index].i = index;
        } 
          
    }
show();    
}

function open(element, type, i) {
    // for (let index = 0; index < shuffledArray.length; index++) {
        let leftSide = (i % width === 0);
        let rightSide = (i % width === width - 1);
        if (type === 0) {
        if (shuffledArray[i].class === "zero") return; 
        
         setTimeout(() => {    
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
                    (shuffledArray[i- 1 + width].totalMines === 0)) {
                        const newI = shuffledArray[i- 1 + width];
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


