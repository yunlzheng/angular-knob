(function() {
	'use strict';

	angular
		.module('app')
		.controller('ExampleCtrl', ExampleCtrl);

	function ExampleCtrl() {
		var self = this;

		self.value = 10;
		self.options = {
			min: 0,
			max: 100,
			width: 300,
			height: 300
		};

		self.getFormattedOptions = getFormattedOptions;

		function getFormattedOptions() {
			return JSON
				.stringify(self.options)
				.replace(/,/g,"\n");
		}
	}
})();
