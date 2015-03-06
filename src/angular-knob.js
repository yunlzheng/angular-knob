angular.module('ui.knob', []).directive('knob', ['$timeout', function($timeout) {
  'use strict';

  return {
    restrict: 'EA',
    replace: true,
    template: '<input value="{{ knobData }}"/>',
    scope: {
      knobData: '=',
      knobOptions: '&',
      readOnly: '=ngReadonly'
    },
    link: function($scope, $element) {
      var knobInit = $scope.knobOptions() || {};

      if($scope.readOnly) {
        knobInit.readOnly = $scope.readOnly;
      }

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

      $scope.$watch('readOnly', function(){
        $($element).trigger('configure', {
          'readOnly': $scope.readOnly
        });
      });

      $($element).val($scope.knobData).knob(knobInit);
    }
  };
}]);