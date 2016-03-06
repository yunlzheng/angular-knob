(function(module) {
	'use strict';

	module.exports = function(grunt) {
		grunt.config.merge({
			jshint: {
				src: ['src/angular-knob.js'],
				options: {
					camelcase: true,
					browser: true,
					curly: true,
					eqeqeq: true,
					forin: true,
					freeze: true,
					indent: true,
					nonew: true,
					strict: true,
					maxdepth: 2,
					maxcomplexity: 3,
					undef: true,
					unused: true,
					globals: { angular: true }
				}
			}
		});
	};
})(module);
