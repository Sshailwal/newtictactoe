let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.resetbutton');
let printwinner = document.querySelector('.printwinner');
let turn = true;
const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("Box is clicked");
        if (turn){
            box.innerHTML = 'X';
            turn = !turn;
        }
        else  {
            box.innerHTML = 'O';
            turn = !turn;
        }
    box.disabled =true;
    checkwinner();
    });

});
checkwinner = () => {
    let winner = false;
    winPattern.forEach((win) => {
        const [a, b, c] = win;
        if (boxes[a].innerHTML !== '' && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
            winner = true;
            boxes[a].style.color = 'red';
            boxes[b].style.color = 'red';
            boxes[c].style.color = 'red';
            if (boxes[a].innerHTML === 'X') {
                  

                boxes.forEach((box) => {
                    box.style.visibility = 'hidden';
                });
                printwinner.innerHTML = 'Player X wins';
               printwinner.style.visibility = 'visible';

                
            } else {
                            
                boxes.forEach((box) => {
                    box.style.visibility = 'hidden';
                });
                printwinner.innerHTML = 'Player O wins';
                printwinner.style.visibility = 'visible';
                
            }
           
        }
    });
    
    return winner;
    
    
}
resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerHTML = '';
        box.disabled = false;
        box.style.color = 'black';
        box.style.visibility = 'visible';
        printwinner.style.visibility = 'hidden';
        
    });
    turn = true;
});

