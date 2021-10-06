// Controller
function setSize() {
    if (størrelse.value === "10") {width = 10;}
    if (størrelse.value === "12") {width = 12;}
    if (størrelse.value === "16") {width = 16;}
    if (størrelse.value === "18") {width = 18;}
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
    if (shuffledArray[i].class === "zero") return; 
    if (shuffledArray[i].class === "field") return; 
    if (shuffledArray[i].class === "boom") return; 
    if (type === 0 && element.classList.contains("valid")) {
        if (shuffledArray[i].totalMines === 1) return; 
        if (shuffledArray[i].totalMines === 2) return; 
        if (shuffledArray[i].totalMines === 3) return; 
        if (shuffledArray[i].totalMines === 4) return; 
        if (shuffledArray[i].totalMines === 5) return; 
        if (shuffledArray[i].totalMines === 6) return; 
        if (shuffledArray[i].totalMines === 7) return; 
        if (shuffledArray[i].totalMines === 8) return; 
        if (shuffledArray[i].totalMines === 99) return; 
        if (shuffledArray[i].class === 'mine') return;
        if (element.classList.contains('mine')) return;
        
      else { open(element, type, i);
        shuffledArray[i].class = "zero";
     }   
    }
    if (type >= 1 && type < 9) {
        shuffledArray[i].class = "field";
        shuffledArray[i].field = type;
    }
     if (((type === 99) && 
        (element.classList.contains('mine')) && 
        (shuffledArray[i].totalMines === 99) &&
        (shuffledArray[i].class === 'mine'))) {
        //     //LEGG INN TAP FUNKSJON - Delay?
        console.log("kjører")
            shuffledArray[i].class = "boom";
            loose();
    }
    
show();
}
function flag(element){ 
console.log("kjører")
}



function loose() {
    // looseClass = 'boardLock';
    // alert("Du Tapte. Trykk restart for nytt spill");
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
            shuffledArray[index].totalMines = '99';
            shuffledArray[index].i = index;
        } 
          
    }
show();    
}

function open(element, type, i) {
    
        let leftSide = (i % width === 0);
        let rightSide = (i % width === width - 1);
        if (type === 0 && element.classList.contains("valid")) {
            if (shuffledArray[i].class === "zero") return; 
            if (shuffledArray[i].totalMines === '1') return; 
            if (shuffledArray[i].totalMines === '2') return; 
            if (shuffledArray[i].totalMines === '3') return; 
            if (shuffledArray[i].totalMines === '4') return; 
            if (shuffledArray[i].totalMines === '5') return; 
            if (shuffledArray[i].totalMines === '6') return; 
            if (shuffledArray[i].totalMines === '7') return; 
            if (shuffledArray[i].totalMines === '8') return; 
            if (shuffledArray[i].totalMines === '99') return;
            if (shuffledArray[i].class === 'mine') return;
            if (element.classList.contains("mine")) return;
            else {
         setTimeout(function()  {    
console.log("i", i)
console.log("element", element)

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
    }


