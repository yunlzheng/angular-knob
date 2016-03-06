(function() {
    'use strict';

    angular
        .module('ui.knob', [])
        .directive('knob', knob);

    knob.$inject = [
        '$timeout'
    ];

    function knob($timeout) {
        var directive = {
            template: '<input ng-model="knobData" ng-value="knobData"/>',
            scope: { knobData: '=', knobOptions: '&' },
            link: link
        };

        return directive;

        function link(scope, element) {
            var knobInit = getKnobInit(scope);
            element
                .val(scope.knobData)
                .knob(knobInit);

            scope.$watch('knobData', function(newValue, oldValue) {
                knobDataChangeEventHandler(newValue, oldValue, element);
            });
        }

        function knobDataChangeEventHandler(newValue, oldValue, element) {
            if (newValue !== oldValue) {
                element
                    .val(newValue)
                    .change();
            }
        }

        function getKnobInit(scope) {
            var init = scope.knobOptions() || {};
            init.release = function(newValue) {
                $timeout(function() {
                    scope.knobData = newValue;
                    scope.$apply();
                });
            };
            return init;
        }
    }
})();
