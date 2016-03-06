(function(module) {
	'use strict';

	module.exports = function(grunt) {
		grunt.registerTask('dist', [
			'jshint',
			'uglify:dist'
		]);
	};
})(module);
