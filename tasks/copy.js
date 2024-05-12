/**
 * The task for copying files.
 * Refer to https://github.com/gruntjs/grunt-contrib-copy
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-copy");

  var config = {
    metadataFiles: {
      files: [
        {
          src: ["<%= root %>LICENSE", "<%= root %>manifest.json"],
          dest: "<%= distPath %>/",
          filter: "isFile",
        },
      ],
    },
    popupFiles: {
      files: [
        {
          expand: true,
          flatten: true,
          src: [
            "<%= srcPath %>/popup/popup.html",
            "<%= srcPath %>/popup/styles.css",
          ],
          dest: "<%= distPath %>/",
          filter: "isFile",
        },
      ],
    },
    icons: {
      files: [
        {
          expand: true,
          flatten: true,
          src: "icons/**",
          dest: "<%= distPath %>/",
          filter: "isFile",
        },
      ],
    },
  };

  grunt.config("copy", config);
};
