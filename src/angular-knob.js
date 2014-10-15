angular.module('ui.knob', []).directive('knob', ['$timeout', function($timeout) {
    'use strict';

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

            knobInit.release = function(newValue) {
                $timeout(function() {
                    $scope.knobData = newValue;

                    $scope.$apply();
                });
            };

            $scope.$watch('knobData', function(newValue, oldValue) {
                if (newValue != oldValue) {
                    $($element).val(newValue).change();
                }
            });

            $($element).val($scope.knobData).knob(knobInit);
        }
    };
}]);