angular.module('knobApp', [
	'ui.knob'
]);

angular.module('knobApp').controller('exampleCtrl', ['$scope', function($scope) {
	$scope.max = 100;

	$scope.data = 30;

	$scope.knobOptions = {
		width: 145,
        height: 145
	};
}]);