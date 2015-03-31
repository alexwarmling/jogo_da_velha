module.exports = function(grunt) {
  grunt.task.loadNpmTasks('grunt-contrib-jshint');
  grunt.task.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    jshint: {
      all: ['test/**/*.js']
    },

    karma: {
      saucelabs: {
        configFile: 'karma.conf.js'
      },
      local: {
        configFile: 'karma.conf.js',
        reporters: ['progress', 'coverage'],
        singleRun: false,
        browsers: ['Chrome']
      }
    }
  });

  grunt.registerTask("default", ["jshint", "karma:local"]);
  grunt.registerTask("ci", ["jshint", "karma:saucelabs"]);
};
