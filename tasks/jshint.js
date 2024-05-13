var fs = require("node:fs");

var commentRegex = /\/\/.*?$/gm;
var jshintFile = fs.readFileSync(".jshintrc", "utf-8");
var sanitizedJson = jshintFile.replace(commentRegex, "");
var jshintOptions = JSON.parse(sanitizedJson);

/**
 * The task for JsHint.
 * Refer to https://github.com/gruntjs/grunt-contrib-jshint
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  "use strict";
  grunt.loadNpmTasks("grunt-contrib-jshint");

  var config = {
    files: {
      src: ["<%= distPath %>/*.js"],
    },
    options: jshintOptions,
  };

  grunt.config("jshint", config);
};
