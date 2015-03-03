letra = "X";

function jogada(celula){

  var celulaclicada = document.getElementById(celula).innerText;

  if (celulaclicada == "X" || celulaclicada == "O"){
    alert("Opa, este quadrado já foi escolhido!");
  }
  else{
    document.getElementById(celula).innerText = letra;
    if (letra == "X"){
      letra = "O";
    }else{
      letra = "X";
    }
    verif();
  }
}

function verif(){
  var ce11 = document.getElementById('c11').innerText;
  var ce12 = document.getElementById('c12').innerText;
  var ce13 = document.getElementById('c13').innerText;
  var ce21 = document.getElementById('c21').innerText;
  var ce22 = document.getElementById('c22').innerText;
  var ce23 = document.getElementById('c23').innerText;
  var ce31 = document.getElementById('c31').innerText;
  var ce32 = document.getElementById('c32').innerText;
  var ce33 = document.getElementById('c33').innerText;

  if (((ce11 !== '') && (ce12 !== '') && (ce13 !== '') && (ce11 == ce12) && (ce12 == ce13)) ||
    ((ce11 !== '') && (ce22 !== '') && (ce33 !== '') && (ce11 == ce22) && (ce22 == ce33)) ||
    ((ce11 !== '') && (ce21 !== '') && (ce31 !== '') && (ce11 == ce21) && (ce21 == ce31)) ||
    ((ce21 !== '') && (ce22 !== '') && (ce23 !== '') && (ce21 == ce22) && (ce22 == ce23)) ||
    ((ce31 !== '') && (ce32 !== '') && (ce33 !== '') && (ce31 == ce32) && (ce32 == ce33)) ||
    ((ce12 !== '') && (ce22 !== '') && (ce32 !== '') && (ce12 == ce22) && (ce22 == ce32)) ||
    ((ce13 !== '') && (ce23 !== '') && (ce33 !== '') && (ce13 == ce23) && (ce23 == ce33)) ||
    ((ce31 !== '') && (ce22 !== '') && (ce13 !== '') && (ce31 == ce22) && (ce22 == ce13))){
      alert("O jogador '" + letra + "' ganhou!!");
      novo_jogo();
    }
  else {
    if (ce11 != '' && ce12 != '' && ce13 != '' &&
      ce21 != '' && ce22 != '' && ce23 != '' &&
      ce31 != '' && ce32 != '' && ce33 != ''){
        alert('Não houve vencedor!');
        novo_jogo();
    }
  }
}

function novo_jogo(){
  for (var i=1; i<=3; i++){
    for (var j=1; j<=3; j++){
      nomecelula = 'c' + i + j
      document.getElementById(nomecelula).innerText = '';
    }
  }
  letra = "X";
}