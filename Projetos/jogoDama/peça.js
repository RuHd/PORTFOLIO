var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Pintando o tabuleiro
$(function(){
    let squareBlack = false

let square = "<div class = 'demo'></div>"
for (let i = 0 ; i<64; i++) {
     $("#container").append(square)  
} 

const squares = document.querySelectorAll(".demo")
            for (let i = 0 ; i<64; i++) {
                
                    if ( i < 8) {
                        if (squareBlack == false) {
                            squares[i].classList.add("isBlack")
                            squareBlack = true
                        } else {
                            squareBlack = false
                        }
                     }
                     
                if ( (i < 16) && (i>=8)){
                    if (squareBlack) {
                        squares[i].classList.add("isBlack")
                        squareBlack = false
                    } else {
                        squareBlack = true
                    }
                }

                if ( (i < 24) && (i>=16)){
                    if (squareBlack == false) {
                            squares[i].classList.add("isBlack")
                            squareBlack = true
                        } else {
                            squareBlack = false
                        }
                }

                if ( (i < 32) && (i>=24)){
                    if (squareBlack) {
                        squares[i].classList.add("isBlack")
                        squareBlack = false
                    } else {
                        squareBlack = true
                    }
                }

                if ( (i < 40) && (i>=32)){
                    if (squareBlack == false) {
                            squares[i].classList.add("isBlack")
                            squareBlack = true
                        } else {
                            squareBlack = false
                        }
                }

                if ( (i < 48) && (i>=40)){
                    if (squareBlack) {
                        squares[i].classList.add("isBlack")
                        squareBlack = false
                    } else {
                        squareBlack = true
                    }
                }

                if ( (i < 56) && (i>=48)){
                    if (squareBlack == false) {
                            squares[i].classList.add("isBlack")
                            squareBlack = true
                        } else {
                            squareBlack = false
                        }
                }

                if ( (i < 64) && (i>=56)){
                    if (squareBlack) {
                        squares[i].classList.add("isBlack")
                        squareBlack = false
                    } else {
                        squareBlack = true
                    }
                }
            }
            alert("loaded")

})

