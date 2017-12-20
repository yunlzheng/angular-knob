angular
  .module('ui.knob', [])
  .directive('knob', ['$timeout', function($timeout) {
    'use strict';

    return {
        restrict: 'EA',
        replace: true,
        template: '<input value="{{ knobData }}"/>',
        scope: {
            knobData: '=',
            knobOptions: '=',
            readOnly: '=ngReadonly'
        },
        link: function($scope, $element) {
            var knobInit = $scope.knobOptions || {};

            if($scope.readOnly) {
                knobInit.readOnly = $scope.readOnly;
            }

            var _value;
            knobInit.release = function(newValue) {
                $timeout(function() {
                    $scope.knobData = newValue;
                    _value = newValue;
                });
            };

            $scope.$watch('knobOptions', function(newValue, oldValue) {
                if (!angular.equals(newValue, oldValue) && !angular.equals(newValue, _value)) {
                    $($element).trigger('configure', newValue);
                }
            });

            $scope.$watch('knobData', function(newValue, oldValue) {
                if (newValue != oldValue && newValue != _value) {
                    $($element).val(newValue).change();
                }
            });

            $scope.$watch('readOnly', function(){
                $($element).trigger('configure', {
                  'readOnly': $scope.readOnly
                });
            });

            $($element).val($scope.knobData).knob(knobInit);
        }
    };
}]);