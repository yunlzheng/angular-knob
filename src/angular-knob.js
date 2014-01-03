angular.module('ui.knob', [])
  .directive('knob', function () {
    return {
      restrict: 'EACM',
      template: '<input value="{{ knob }}">',
      replace: true,
      transclude : true,
      link: function (scope, elem, attrs) {

        var renderKnob = function(){

          var opts = {};
          var data = scope.$eval(attrs.knobData);
          opts = scope.$eval(attrs.knobOptions);
          $elem = $(elem);
          scope.knob = data;
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