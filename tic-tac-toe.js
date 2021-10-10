document.addEventListener('DOMContentLoaded', (event) => {
     
    var playerTurn = document.getElementById("status");
    var WinningTiles = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 4, 7], 
                         [0, 3, 6], [2, 5, 8], [0, 4, 8], [2, 4, 6] 
                       ]; 
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
            winner= winnerCheck(playerTurn,squaresArray);
            count++;
        }


    });

    
    // Changes Style when Mouse Hovering
        squares.addEventListener("mouseover", () => {
                squares.classList.add("hover");
            });

        squares.addEventListener("mouseout", function () {
                squares.classList.remove("hover");
            });


    
        
            



    }
            
     // Check For  Winner
     function winnerCheck (playerTurn,squaresArray){
        for (let i = 0; i < WinningTiles.length; i++) {
            var winningRow = WinningTiles[i];
            var r1 = winningRow[0];
            var r2 = winningRow[1];
            var r3 = winningRow[2];
    
            if (squaresArray[r1] == squaresArray[r2] && squaresArray[r2] == squaresArray[r3]) 
            {
                playerTurn.textContent = ('Congratulations! ' + squaresArray[r1] + ' is the Winner!');
                return true;
            }
        }
    
        return false;
    
    }
    




      
     


});


