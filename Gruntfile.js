/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          'test/test.css': 'test/test.styl'
        }
      }
    },

    watch: {
      stylus: {
        files: [
          '*/**/*.styl'
        ],
        tasks: ['stylus:compile']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['stylus:compile', 'watch:stylus']);

};
