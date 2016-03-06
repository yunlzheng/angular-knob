(function(module) {
	'use strict';

	module.exports = function(grunt) {
		grunt.initConfig({});

		[
			'grunt-contrib-jshint',
			'grunt-contrib-uglify'
		].forEach(function(task) {
			grunt.loadNpmTasks(task);
		});

		[
			'grunt/configs',
			'grunt/tasks'
		].forEach(function(folder) {
			grunt.loadTasks(folder);
		});
	};
})(module);
