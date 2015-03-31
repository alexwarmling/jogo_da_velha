var url = 'https://www.google.com.br';

casper.test.begin('Tic-tac-toe UI Test', function(test) {

  casper.start(url);

  casper.run(function() {
    test.done();
  });
});
