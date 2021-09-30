// Controller
function newGame() {
    shuffle();
    addNumbers();
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
            }
            mineArray.push(object);
        }
        for (let i = 0; i < ((width * width)-mines); i++) {
            let object = {
                id: "div"+(width+i),
                class: "valid",  
                i: width+i,
            }
            validArray.push(object);
        }   
    tempArray = validArray.concat(mineArray);
    shuffledArray = tempArray.sort(() => Math.random() - 0.5);
}

function clicked(element, type, i) {
   console.log("element", element)
   console.log("type", type)
   console.log("i", i)
   console.log("arrI", shuffledArray[i])
    // endre style / farge
    // bilde på mines? 
    // vis number
    if (type === 0) {
        shuffledArray[i].class = "zero";
        open(element, type, i);
    }
    if (type >= 1) {
        shuffledArray[i].class = "field";
    }
    
    if (type === 10){
    //     //LEGG INN TAP FUNKSJON - Delay?
        shuffledArray[i].class = "boom";
    }
show();
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
 
    for (let index = 0; index < shuffledArray.length; index++) {
        let leftSide = (index % width === 0);
        let rightSide = (index % width === width - 1);
       
        if (shuffledArray[i].totalMines === 0) {

            console.log("kjører")
        //Venstre    
            if ((element =! leftSide) && (shuffledArray[index - 1].totalMines === 0)) {
                shuffledArray[index - 1].class = "zero";
            } 
        //Høyre    
            if ((element =! rightSide) && (shuffledArray[index + 1].totalMines === 0)) {
                shuffledArray[index + 1].class = "zero";
            }
        //Opp    
            if ((index >= width) && (shuffledArray[index - width].totalMines === 0)) {
                shuffledArray[index - width].class = "zero";
            };
        //Ned    
            if ((index < (width * width - width)) && 
                    (shuffledArray[index + width].totalMines === 0)) {
                    shuffledArray[index + width].class = "zero"; 
                };
        //Venstre Opp    
            if ((index >= width) && (element =! leftSide) && 
                (shuffledArray[index - 1 - width].totalMines === 0)) {
                    shuffledArray[index - 1 - width].class = "zero"; 
                };
        //Høyre Opp    
            if ((index >= width) && (element =! rightSide) && 
                (shuffledArray[index + 1 - width].totalMines === 0)) {
                    shuffledArray[index + 1 - width].class = "zero"; 
                };
        //Venstre Ned
            if ((index < (width * width - width)) && (element =! leftSide) && 
                (shuffledArray[index - 1 + width].totalMines === 0)) {
                    shuffledArray[index - 1 + width].class = "zero"; 
                };
        //Høyre Ned     
            if ((index < (width * width - width)) && (element =! rightSide) && 
                (shuffledArray[index + 1 + width].totalMines === 0)) {
                    shuffledArray[index + 1 + width].class = "zero"; 
                };   
        }
    }
show();
}  
