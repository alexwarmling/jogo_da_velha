# tic_tac_toe [![Circle CI](https://circleci.com/gh/stefanteixeira/tic_tac_toe.svg?style=shield)](https://circleci.com/gh/stefanteixeira/tic_tac_toe)

Sample tic-tac-toe JS project.

### Tests

You can find the project tests in the ```test``` directory.

##### Unit Tests

Unit Tests are located in ```test/unit``` directory. The tests were written with [Jasmine](http://jasmine.github.io/) and [Sinon.JS](http://sinonjs.org/). The project also uses [Karma](http://karma-runner.github.io/0.12/index.html) to run the tests either locally (on Google Chrome) or in the cloud with [SauceLabs](https://saucelabs.com/) on environments with Windows 7, Firefox 35 and Chrome 39.

When the unit tests run, a code coverage report is automatically generated in the ```coverage``` directory. The project uses [Istanbul](https://gotwarlost.github.io/istanbul/) to generate this report.

##### UI Tests

UI Tests are located in ```test/ui``` directory. The tests were written with [CasperJS](http://casperjs.org/), which uses [PhantomJS](http://phantomjs.org/) as a headless browser.

### Build

The project uses [CircleCI](https://circleci.com/) as a CI server. Every commit will trigger a new build on CircleCI.

To build the project manually just run ```npm install``` to install the dependencies and ```npm test``` to run all tests. If you want to run the tests separately:

- The ```grunt``` command will run the unit tests locally. PS: It requires Chrome to run, and if you don't have grunt-cli installed globally, please run ```npm install -g grunt-cli``` also.
- The ```grunt ci``` will run the unit tests on SauceLabs environments described in ```karma.conf.js```.
- The ```casperjs test test/ui/tic_tac_toe_uiTest.js``` will run the UI tests.


