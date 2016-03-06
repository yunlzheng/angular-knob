(function(module) {
	'use strict';

	module.exports = function(grunt) {
		grunt.config.merge({
			uglify: {
				dist: {
					files: {
						'src/angular-knob.min.js': [
							'src/angular-knob.js'
						]
					}
				}
			}
		});
	};
})(module);
