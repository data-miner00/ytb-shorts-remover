/**
 * The entry for Grunt task runner.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });

  // Register tasks
  grunt.loadTasks("tasks");

  grunt.registerTask("default", ["concat", "copy", "compress"]);
};
