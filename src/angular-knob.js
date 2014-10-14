angular.module('ui.knob', []).directive('knob', function() {

    return {
        restrict: 'EA',
        replace: true,
        template: '<input value="{{ knobData }}"/>',
        scope: {
            knobOptions: '=',
            knobData: '='
        },
        link: function($scope, $element) {
            var knobInit = $scope.knobOptions || {};
            knobInit.change = setKnobData;

            function setKnobData (value) {
                $scope.knobData = knobValue = Math.round(value);

                $scope.$apply();
            }

            $element.on('change', function(event) {
                setKnobData(event.target.value);
            });

            $($element).val($scope.knobData).knob(knobInit);
        }
    }
});