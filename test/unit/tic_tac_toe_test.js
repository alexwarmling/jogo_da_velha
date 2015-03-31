describe('Tic-tac-toe Test', function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    spyOn(window, 'alert');
  });

  afterEach(function() {
    sandbox.restore();
  });

  var buildStubBoard = function(){
    var i,j, str="", move;
    var moves = Array.prototype.slice.call(arguments);
    for(i=0;i<moves.length;i++){
      getInnerText.withArgs(moves[i][0]).returns(moves[i][1]);
    }
    console.log(moves[0][1] + moves[1][1] + moves[2][1]);
    console.log(moves[3][1] + moves[4][1] + moves[5][1]);
    console.log(moves[6][1] + moves[7][1] + moves[8][1]);
    console.log('---');
  };

  it('should perform a move in an empty cell', function() {
    getInnerText.withArgs('c11').returns('');
    setInnerText = sandbox.spy();

    move('c11');
    expect(setInnerText.calledOnce).toBe(true);
  });

  it('should not perform a move when the cell already contains X', function() {
    getInnerText.withArgs('c12').returns('X');

    move('c12');
    expect(window.alert).toHaveBeenCalledWith('Oops, this box has been selected!');
  });

  it('should not perform a move when the cell already contains O', function() {
    getInnerText.withArgs('c22').returns('O');

    move('c22');
    expect(window.alert).toHaveBeenCalledWith('Oops, this box has been selected!');
  });

  it('should display the correct winner with three X in the first row', function() {
    getLastMove.returns('X');

    buildStubBoard(['c11', 'X'], ['c12', 'X'], ['c13', 'X'],
                  ['c21', 'O'], ['c22', 'O'], ['c23', ' '],
                  ['c31', 'X'], ['c32', ' '], ['c33', 'O']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three X in the diagonal', function() {
    getLastMove.returns('X');

    buildStubBoard(['c11', 'X'], ['c12', ' '], ['c13', 'O'],
                  ['c21', 'O'], ['c22', 'X'], ['c23', ' '],
                  ['c31', 'X'], ['c32', 'O'], ['c33', 'X']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should get the correct winner with three X in the first column', function() {
    getLastMove.returns('X');

    buildStubBoard(['c11', 'X'], ['c12', 'O'], ['c13', 'X'],
                  ['c21', 'X'], ['c22', 'O'], ['c23', ' '],
                  ['c31', 'X'], ['c32', ' '], ['c33', 'O']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three O in the middle row', function() {
    getLastMove.returns('O');

    buildStubBoard(['c11', 'X'], ['c12', ' '], ['c13', 'X'],
                  ['c21', 'O'], ['c22', 'O'], ['c23', 'O'],
                  ['c31', ' '], ['c32', ' '], ['c33', 'X']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'O\'');
  });

  it('should display the correct winner with three X in the last row', function() {
    getLastMove.returns('X');

    buildStubBoard(['c11', 'O'], ['c12', 'X'], ['c13', 'O'],
                  ['c21', ' '], ['c22', 'O'], ['c23', ' '],
                  ['c31', 'X'], ['c32', 'X'], ['c33', 'X']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three O in the middle column', function() {
    getLastMove.returns('O');

    buildStubBoard(['c11', 'X'], ['c12', 'O'], ['c13', ' '],
                  ['c21', ' '], ['c22', 'O'], ['c23', ' '],
                  ['c31', 'X'], ['c32', 'O'], ['c33', 'X']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'O\'');
  });

  it('should display the correct winner with three X in the last column', function() {
    getLastMove.returns('X');

    buildStubBoard(['c11', 'X'], ['c12', 'O'], ['c13', 'X'],
                  ['c21', ' '], ['c22', 'O'], ['c23', 'X'],
                  ['c31', 'O'], ['c32', ' '], ['c33', 'X']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three X in the reverse diagonal', function() {
    getLastMove.returns('X');

    buildStubBoard(['c11', 'X'], ['c12', 'O'], ['c13', 'X'],
                  ['c21', 'O'], ['c22', 'X'], ['c23', ' '],
                  ['c31', 'X'], ['c32', ' '], ['c33', 'O']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct message when there is no winner', function() {
    buildStubBoard(['c11', 'O'], ['c12', 'O'], ['c13', 'X'],
                  ['c21', 'X'], ['c22', 'X'], ['c23', 'O'],
                  ['c31', 'O'], ['c32', 'X'], ['c33', 'X']);

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('There wasn\'t winner');
  });

});
