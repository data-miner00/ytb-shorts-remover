/**
 * The task to declare globally usable variables.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.config("root", "./");
  grunt.config("srcPath", "<%= root %>src");
  grunt.config("distPath", "<%= root %>dist");
  grunt.config("zipPath", "<%= root %>artifacts");
};
