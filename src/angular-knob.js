angular.module('ui.knob', []).directive('knob', ['$timeout', function($timeout) {
    'use strict';

    return {
        restrict: 'EA',
        replace: true,
        template: '<input value="{{ knobData }}"/>',
        scope: {
            knobData: '=',
            knobOptions: '&'
        },
        link: function($scope, $element) {
            var knobInit = $scope.knobOptions() || {};
            var _value;
            knobInit.release = function(newValue) {
                $timeout(function() {
                    $scope.knobData = newValue;
                    _value = newValue;
                    // $scope.$apply();
                });
            };

            $scope.$watch('knobData', function(newValue, oldValue) {
                if (newValue != oldValue && newValue != _value) {
                    $($element).val(newValue).change();
                }
            });

            $($element).val($scope.knobData).knob(knobInit);
        }
    };
}]);
