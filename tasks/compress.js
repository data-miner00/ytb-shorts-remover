/**
 * The task to compress artifacts.
 * Refer to https://github.com/gruntjs/grunt-contrib-compress
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-compress");

  var config = {
    all: {
      options: {
        archive: "<%= zipPath %>/YoutubeShortsRemover.zip",
      },
      files: [
        {
          expand: true,
          cwd: "<%= distPath %>/",
          src: ["**"],
        },
      ],
    },
  };

  grunt.config("compress", config);
};
