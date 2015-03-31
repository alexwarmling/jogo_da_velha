module.exports = function(grunt) {
  grunt.task.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    karma: {
      saucelabs: {
        configFile: 'karma.conf.js'
      },
      local: {
        configFile: 'karma.conf.js',
        singleRun: 'false',
        logLevel: 'INFO',
        browsers: ['Chrome']
      }
    }
  });
};
