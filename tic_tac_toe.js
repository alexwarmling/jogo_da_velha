var player = "X";
var board = new Array();

function initialize(){
  board[0] = document.getElementById('c11').textContent;
  board[1] = document.getElementById('c12').textContent;
  board[2] = document.getElementById('c13').textContent;
  board[3] = document.getElementById('c21').textContent;
  board[4] = document.getElementById('c22').textContent;
  board[5] = document.getElementById('c23').textContent;
  board[6] = document.getElementById('c31').textContent;
  board[7] = document.getElementById('c32').textContent;
  board[8] = document.getElementById('c33').textContent;
}

function jogada(celula){
  var celulaclicada = document.getElementById(celula).textContent;
  if (celulaclicada == "X" || celulaclicada == "O"){
    alert("Opa, este quadrado já foi escolhido!");
  }
  else{
    document.getElementById(celula).textContent = player;
    initialize();
    if(getWinner()){
      alert(msg);
      window.location.reload();
    }

    if (player == "X"){
      player = "O";
    }else{
      player = "X";
    }
  }
}

function checkWinner() {
    return  ((board[0] !== '') && (board[1] !== '') && (board[2] !== '') && (board[0] == board[1]) && (board[1] == board[2])) ||
            ((board[0] !== '') && (board[4] !== '') && (board[8] !== '') && (board[0] == board[4]) && (board[4] == board[8])) ||
            ((board[0] !== '') && (board[3] !== '') && (board[6] !== '') && (board[0] == board[3]) && (board[3] == board[6])) ||
            ((board[3] !== '') && (board[4] !== '') && (board[5] !== '') && (board[3] == board[4]) && (board[4] == board[5])) ||
            ((board[6] !== '') && (board[7] !== '') && (board[8] !== '') && (board[6] == board[7]) && (board[7] == board[8])) ||
            ((board[1] !== '') && (board[4] !== '') && (board[7] !== '') && (board[1] == board[4]) && (board[4] == board[7])) ||
            ((board[2] !== '') && (board[5] !== '') && (board[8] !== '') && (board[2] == board[5]) && (board[5] == board[8])) ||
            ((board[6] !== '') && (board[4] !== '') && (board[2] !== '') && (board[6] == board[4]) && (board[4] == board[2]));

}

function getWinner(){
  if(checkWinner()){
    msg = "O jogador '" + player + "' ganhou!!";
    return true;
  }
  if (!availableMoves()) {
      msg = "Não houve vencedor!";
    return true;
  }
  return false;
}

function availableMoves() {
  for (var i = 0; i < board.length; i++){
    if (board[i] == '') {
      availableMove = true;
      break;
    }else {
      availableMove = false;
    }
  }
  return availableMove;
}