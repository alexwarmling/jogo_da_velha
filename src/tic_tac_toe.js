var currentMove = "X";
var lastMove;

function move(cell){
  var cellClicked = getInnerText(cell);
  if (cellClicked == "X" || cellClicked == "O"){
    alert("Oops, this box has been selected!");
  }
  else{
    setInnerText(cell, currentMove);
    lastMove = currentMove;
    if (currentMove == "X"){
      currentMove = "O";
    }else{
      currentMove = "X";
    }
    getWinner();
  }
}

function getWinner(){
  var ce11 = getInnerText('c11');
  var ce12 = getInnerText('c12');
  var ce13 = getInnerText('c13');
  var ce21 = getInnerText('c21');
  var ce22 = getInnerText('c22');
  var ce23 = getInnerText('c23');
  var ce31 = getInnerText('c31');
  var ce32 = getInnerText('c32');
  var ce33 = getInnerText('c33');

  if (((ce11 !== '') && (ce12 !== '') && (ce13 !== '') && (ce11 == ce12) && (ce12 == ce13)) ||
    ((ce11 !== '') && (ce22 !== '') && (ce33 !== '') && (ce11 == ce22) && (ce22 == ce33)) ||
    ((ce11 !== '') && (ce21 !== '') && (ce31 !== '') && (ce11 == ce21) && (ce21 == ce31)) ||
    ((ce21 !== '') && (ce22 !== '') && (ce23 !== '') && (ce21 == ce22) && (ce22 == ce23)) ||
    ((ce31 !== '') && (ce32 !== '') && (ce33 !== '') && (ce31 == ce32) && (ce32 == ce33)) ||
    ((ce12 !== '') && (ce22 !== '') && (ce32 !== '') && (ce12 == ce22) && (ce22 == ce32)) ||
    ((ce13 !== '') && (ce23 !== '') && (ce33 !== '') && (ce13 == ce23) && (ce23 == ce33)) ||
    ((ce31 !== '') && (ce22 !== '') && (ce13 !== '') && (ce31 == ce22) && (ce22 == ce13))){
      alert("The winner is '" + getLastMove() + "'");
      playAgain();
    }
  else {
    if (ce11 != '' && ce12 != '' && ce13 != '' &&
      ce21 != '' && ce22 != '' && ce23 != '' &&
      ce31 != '' && ce32 != '' && ce33 != ''){
        alert("There wasn't winner");
        playAgain();
    }
  }
}

function playAgain(){
  for (var i=1; i<=3; i++){
    for (var j=1; j<=3; j++){
      celName = 'c' + i + j
      setInnerText(celName, '');
    }
  }
  currentMove = "X";
}

function getInnerText(elemId) {
  return document.getElementById(elemId).innerText;
}

function setInnerText(elemId, text) {
  document.getElementById(elemId).innerText = text;
}

function getLastMove() {
  return lastMove;
}
