angular.module('ui.knob', [])
  .directive('knob', function () {
    return {
      restrict: 'EACM',
      template: '<input value="{{ knob }}">',
      replace: true,
      transclude : true,
      link: function (scope, elem, attrs) {

        scope.knob = scope.$eval(attrs.knobData);

        var renderKnob = function(){

          var opts = {};
          opts = scope.$eval(attrs.knobOptions);
          $elem = $(elem);
          $elem.knob(opts);

        };

        scope.$watch(attrs.knobData, function () {
           renderKnob();
        }, true);

        scope.$watch(attrs.knobOptions, function () {
          renderKnob();
        }, true);

      }
    };
  });