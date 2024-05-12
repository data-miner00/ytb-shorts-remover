/**
 * The task for concatenating files.
 * Refer to https://github.com/gruntjs/grunt-contrib-concat
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");

  var config = {
    initScript: {
      options: {
        banner: "(async function(){'use strict';\n",
        footer: "\n})();",
      },
      src: ["<%= srcPath %>/constants.js", "<%= srcPath %>/init/index.js"],
      dest: "<%= distPath %>/index.js",
    },
    popupScript: {
      options: {
        banner: "(async function(){'use strict';\n",
        footer: "\n})();",
      },
      src: ["<%= srcPath %>/constants.js", "<%= srcPath %>/popup/popup.js"],
      dest: "<%= distPath %>/popup.js",
    },
    // css: {
    //   src: ["<%= srcPath %>/styles/*.css"],
    //   dest: "<%= distPath %>/styles.css",
    // },
  };

  grunt.config("concat", config);
};
