describe('Tic-tac-toe Test', function() {

  it('should call the playAgain function successfully', function() {
    sinon.stub(document, 'getElementById').returns('');
    playAgain();
    
    expect(playAgain).toBeDefined();
  });

});
