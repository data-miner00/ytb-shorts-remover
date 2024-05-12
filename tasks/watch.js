/**
 * The task for watching Grunt project files.
 * Refer to https://github.com/gruntjs/grunt-contrib-watch
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");

  var config = {
    watch: {
      files: [
        "<%= srcPath %>/**/*.js",
        "<%= srcPath %>/**/*.css",
        "<%= srcPath %>/**/*.html",
      ],
      tasks: ["concat", "copy"],
    },
  };

  grunt.config("watch", config);
};
