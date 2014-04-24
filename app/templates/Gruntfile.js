module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
    requirejs:{
      compile:{
        var config = {
          //appDir:".",
          baseUrl: './',
          name: 'app',
          out: './app.min.js',
          enforceDefine: false,
          wrap: true,
          paths: {
              deepjs:"./node_modules/deepjs",
              ,"deep-routes":"./node_modules/deep-routes"
              ,rql: "./node_modules/rql"
              ,"deep-jquery": "./node_modules/deep-jquery"
              //,"deep-browser": "./node_modules/deep-browser"
          }
        };
      }
    }
  });

  grunt.loadNpmTasks('grunt-requirejs');

  // Default task(s).
  grunt.registerTask('default', ["requirejs"]);
/*
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });
*/
};