describe('Tic-tac-toe Test', function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    spyOn(window, 'alert');
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should display the correct winner with three X in the first row', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('X');

    getInnerText.withArgs('c11').returns('X');
    getInnerText.withArgs('c12').returns('X');
    getInnerText.withArgs('c13').returns('X');
    getInnerText.withArgs('c21').returns('O');
    getInnerText.withArgs('c22').returns('O');
    getInnerText.withArgs('c23').returns('');
    getInnerText.withArgs('c31').returns('X');
    getInnerText.withArgs('c32').returns('');
    getInnerText.withArgs('c33').returns('O');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three X in the diagonal', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('X');

    getInnerText.withArgs('c11').returns('X');
    getInnerText.withArgs('c12').returns('');
    getInnerText.withArgs('c13').returns('O');
    getInnerText.withArgs('c21').returns('O');
    getInnerText.withArgs('c22').returns('X');
    getInnerText.withArgs('c23').returns('');
    getInnerText.withArgs('c31').returns('X');
    getInnerText.withArgs('c32').returns('O');
    getInnerText.withArgs('c33').returns('X');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should get the correct winner with three X in the first column', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('X');

    getInnerText.withArgs('c11').returns('X');
    getInnerText.withArgs('c12').returns('O');
    getInnerText.withArgs('c13').returns('X');
    getInnerText.withArgs('c21').returns('X');
    getInnerText.withArgs('c22').returns('O');
    getInnerText.withArgs('c23').returns('');
    getInnerText.withArgs('c31').returns('X');
    getInnerText.withArgs('c32').returns('');
    getInnerText.withArgs('c33').returns('O');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three O in the middle row', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('O');

    getInnerText.withArgs('c11').returns('X');
    getInnerText.withArgs('c12').returns('');
    getInnerText.withArgs('c13').returns('X');
    getInnerText.withArgs('c21').returns('O');
    getInnerText.withArgs('c22').returns('O');
    getInnerText.withArgs('c23').returns('O');
    getInnerText.withArgs('c31').returns('');
    getInnerText.withArgs('c32').returns('');
    getInnerText.withArgs('c33').returns('X');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'O\'');
  });

  it('should display the correct winner with three X in the last row', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('X');

    getInnerText.withArgs('c11').returns('O');
    getInnerText.withArgs('c12').returns('X');
    getInnerText.withArgs('c13').returns('O');
    getInnerText.withArgs('c21').returns('');
    getInnerText.withArgs('c22').returns('O');
    getInnerText.withArgs('c23').returns('');
    getInnerText.withArgs('c31').returns('X');
    getInnerText.withArgs('c32').returns('X');
    getInnerText.withArgs('c33').returns('X');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three O in the middle column', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('O');

    getInnerText.withArgs('c11').returns('X');
    getInnerText.withArgs('c12').returns('O');
    getInnerText.withArgs('c13').returns('');
    getInnerText.withArgs('c21').returns('');
    getInnerText.withArgs('c22').returns('O');
    getInnerText.withArgs('c23').returns('');
    getInnerText.withArgs('c31').returns('X');
    getInnerText.withArgs('c32').returns('O');
    getInnerText.withArgs('c33').returns('X');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'O\'');
  });

  it('should display the correct winner with three X in the last column', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('X');

    getInnerText.withArgs('c11').returns('X');
    getInnerText.withArgs('c12').returns('O');
    getInnerText.withArgs('c13').returns('X');
    getInnerText.withArgs('c21').returns('');
    getInnerText.withArgs('c22').returns('O');
    getInnerText.withArgs('c23').returns('X');
    getInnerText.withArgs('c31').returns('O');
    getInnerText.withArgs('c32').returns('');
    getInnerText.withArgs('c33').returns('X');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct winner with three X in the reverse diagonal', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();
    getLastMove = sandbox.stub();
    getLastMove.returns('X');

    getInnerText.withArgs('c11').returns('X');
    getInnerText.withArgs('c12').returns('O');
    getInnerText.withArgs('c13').returns('X');
    getInnerText.withArgs('c21').returns('O');
    getInnerText.withArgs('c22').returns('X');
    getInnerText.withArgs('c23').returns('');
    getInnerText.withArgs('c31').returns('X');
    getInnerText.withArgs('c32').returns('');
    getInnerText.withArgs('c33').returns('O');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('The winner is \'X\'');
  });

  it('should display the correct message when there is no winner', function() {
    getInnerText = sandbox.stub();
    playAgain = sandbox.stub();

    getInnerText.withArgs('c11').returns('O');
    getInnerText.withArgs('c12').returns('O');
    getInnerText.withArgs('c13').returns('X');
    getInnerText.withArgs('c21').returns('X');
    getInnerText.withArgs('c22').returns('X');
    getInnerText.withArgs('c23').returns('O');
    getInnerText.withArgs('c31').returns('O');
    getInnerText.withArgs('c32').returns('X');
    getInnerText.withArgs('c33').returns('X');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('There wasn\'t winner');
  });

});
