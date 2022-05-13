const winCondition = [
    [0,4,8],
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6]
]
const player1 = "X"
const player2 = "O"
var checker = false
const cells = document.querySelectorAll(".square")
var cellsFilled = []


// *Jogabilidade:
// 	Jogadas alternadas 
		
// 		Se a jogada do X for FALSE, o X joga. Caso contrário, O joga.
// 		Após a jogada do X, o mesmo retorna TRUE



        for (let i = 0; i<cells.length; i++) {
            cells[i].addEventListener("click",function(){
                if (cells[i].innerHTML == player1 || cells[i].innerHTML == player2) {
                    cells[i].removeEventListener("click")
                }
                if (checker == false){
                    cells[i].innerHTML= player1
                    checker = true
                    winChecker()
                 } else {
                    cells[i].innerHTML = player2
                    checker = false
                    winChecker()
                 }
            })
                
        }
		
// 		Quando X e O tiverem jogado e checado se há um vencedor ou 
// 		empate, a rodada termina

        // identificar qual cell está preenchida
        // Após identificar, averiguar se há uma sequencia
        // de 3 simbolos. Na vertical, horizontal ou diagonal
        function winChecker() {
            let a
            let b 
            let c 

           for (let i = 0; i<8; i++) {
                let sequence = []

                a = winCondition[i][0]
                b = winCondition[i][1]
                c = winCondition[i][2]

                sequence.push(a,b,c)

                if (cells[a].innerHTML == player1 && cells[b].innerHTML == player1 && cells[c].innerHTML == player1) {
                    alert("Player 1 has won!!!! :D")
                    location.reload()
                } else if (cells[a].innerHTML == player2 && cells[b].innerHTML == player2 && cells[c].innerHTML == player2){
                    alert ("Player 2 has won!!!! xD")
                    location.reload()
                } else {
                    
                }

                
           }
        }

		
		

// 	O quadrado preenchido não pode ser mudado novamente até o reinício do jogo
// 		após o clique de um jogador no quadrado em questão, o quadrado específico
// 		não recebe mais cliques até o reinício da partida.

// 	validar a cada rodada se há um vencedor
// 		Sequência de X ou 0 nas verticais, horizontais ou diagonais














 