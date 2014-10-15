angular.module('ui.knob', []).directive('knob', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<input value="{{ knobData }}"/>',
        reuire: 'knobData',
        scope: {
            knobData: '=',
            knobOptions: '&'
        },
        link: function($scope, $element, $attrs) {
            var knobInit = $scope.knobOptions() || {};

            knobInit.release = function(value) {
                $scope.knobData = knobValue = Math.round(value);

                $scope.$apply();
            };

            $($element).val($scope.knobData).knob(knobInit);
        }
    };
});