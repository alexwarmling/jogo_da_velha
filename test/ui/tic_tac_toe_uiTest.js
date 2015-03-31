var path = fs.absolute('./src');
var files = fs.list(path).filter(function (f) {
  return /.*\.html/.test(f);
});

casper.test.begin('Tic-tac-toe UI Test', function(test) {
  casper.on('remote.alert', function verifyAlert(msg) {
    this.capture('gameResult.png');
    test.assertMatch(msg, /The winner is/);
  });

  casper.start(path+'/'+files[0]);

  casper.then(function verifyTitle() {
    this.waitForSelector('#c11', function() {
      test.assertTitle('Tic Tac Toe');
    });
  });

  casper.then(function performMoves() {
    move('#c11');
    move('#c33');
    move('#c13');
    move('#c12');
    move('#c31');
    move('#c22');
    move('#c21');
  });

  casper.then(function clickOnNewGame() {
    var btnId = '#btnNewGame';
    this.waitForSelector(btnId, function() {
      this.click(btnId);
    });
  });

  casper.then(function verifyThatCellsAreEmpty() {
    for (var i=1; i<=3; i++){
      for (var j=1; j<=3; j++){
        cellId = '#c' + i + j;
        verifyIfCellIsEmpty(cellId);
      }
    }
  });

  casper.run(function() {
    test.done();
  });

  var move = function(cellId) {
    casper.then(function() {
      this.waitForSelector(cellId, function() {
        this.click(cellId);
      });
    });
  };

  var verifyIfCellIsEmpty = function(cellId) {
    casper.then(function() {
      test.assertEquals('', this.fetchText(cellId));
    });
  };
});
