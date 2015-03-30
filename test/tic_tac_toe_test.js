describe('Tic-tac-toe Test', function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should call the playAgain function successfully', function() {
    sandbox.stub(document, 'getElementById').returns('');
    playAgain();

    expect(playAgain).toBeDefined();
  });

  it('should get the correct winner, when it is X', function() {
    sandbox.stub(document, 'getElementById').returns('<td>X</td>')
    spyOn(window, 'alert');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('bla');
  });

  it('should get the correct winner, when it is O', function() {
    sandbox.stub(document, 'getElementById').returns('<td>O</td>')
    spyOn(window, 'alert');

    getWinner();
    expect(window.alert).toHaveBeenCalledWith('bla');
  });

  it('should display an adequate message when there is no winner', function() {

  });

});
