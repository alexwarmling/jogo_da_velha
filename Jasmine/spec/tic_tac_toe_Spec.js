describe("Tic Tac Toe Game - Winning Conditions", function() {
	it("player X wins", function() {
		player = 'X';
		board[0] = 'X'; board[1] = 'X'; board[2] = 'X';
		getWinner();
	    expect(msg).toEqual("O jogador 'X' ganhou!!");
  });
	it("player O wins", function() {
		player = 'O';
		board[0] = 'O'; board[1] = 'O'; board[2] = 'O';
		getWinner();
	    expect(msg).toEqual("O jogador 'O' ganhou!!");
  });
});

describe("Tic Tac Toe Game - Tie Condition", function() {
	it("No Winner - Tie", function() {
		player = 'X';
		board[0] = 'X'; board[1] = 'O'; board[2] = 'X';
		board[3] = 'X'; board[4] = 'O'; board[5] = 'O';
		board[6] = 'O';	board[7] = 'X';	board[8] = 'O';
		getWinner();
		expect(msg).toEqual("Não houve vencedor!");
	}); 
});