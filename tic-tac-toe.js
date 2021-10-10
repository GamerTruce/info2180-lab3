document.addEventListener('DOMContentLoaded', (event) => {
     
    var playerTurn = document.getElementById("status");
        
    var noWin = true;
    var count = 1;
    var squaresArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    
     
     // Layout Board
     
    var board = document.getElementById("board").children;
                 for(let s=0; s < board.length; s++)
            {
                const squares = board[s];
        squares.setAttribute("class", "square");


            

    // Add X or O when Clicked
    squares.addEventListener("click", function() {
        if (squares.textContent== "" && noWin == true ) {

            if (count % 2 == 0) {
                squares.textContent = "O";
                squares.classList.add("square", "O");
                squaresArray[s] = "O";
                playerTurn.textContent = ("Player X turn");

            } 
            
            else 
            {
                squares.textContent = "X";
                squares.classList.add("square", "X");
                squaresArray[s] = "X";
                playerTurn.textContent = ('Player O Turn');
            }
            
        }


    });

    
    }
            
     
    




      
     


});


