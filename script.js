/*
  Pedra   -> 1
  Papel   -> 2
  Tesoura -> 3

  - Quando o jogador ganha?
  J 1 x 3 IA
  J 2 x 1 IA
  J 3 x 2 IA
  - Quando o jogador ganha?
  J 3 x 1 IA
  J 1 x 2 IA
  J 2 x 3 IA
    - Quando empata?
  J 1 x 1 IA
  J 2 x 2 IA
  J 3 x 3 IA

*/
var playerScore = 0;
var iaScore = 0;

function play(player)
{
  // a IA jogar alguma coisa
  var ia = Math.floor(Math.random() * 3) + 1; //[1,3]
  var msg = "";
  

  // verificar quem ganhou
   if( (player == 1 && ia == 3) || (player == 2 && ia == 1) || (player == 3 && ia == 2))
    {
      msg = "player Wins";
      playerScore = playerScore + 1;
      
    }

  if( (player == 3 && ia == 1) || (player == 1 && ia == 2) || (player == 2 && ia == 3) )
  {
    msg = "IA Wins";
    iaScore = iaScore + 1;
  }

  if( (player == 1 && ia == 1) || (player == 2 && ia == 2) || (player == 3 && ia == 3) )
  {
    msg = "Empatou";
  }


  // Exibir o ganhador
  document.getElementById("resultados").className = "show";
  document.getElementById("lastRound").innerText = msg;
  document.getElementById("score").innerText = 
            "PLAYER " + playerScore + " X " + iaScore + " IA";
  // Atualizar o placar
}

