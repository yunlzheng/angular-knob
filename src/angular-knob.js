angular.module('ui.knob', [])
  .directive('knob', function () {
    return {
      restrict: 'EACM',
      template: function(elem, attrs){

        return '<input value="{{ knob }}">';

      },
      replace: true,
      scope: true,
      link: function (scope, elem, attrs) {

        scope.knob = scope.$eval(attrs.knobData);

        var renderKnob = function(){

          scope.knob = scope.$eval(attrs.knobData);

          var opts = {}; 
          if(!angular.isUndefined(attrs.knobOptions)){
            opts = scope.$eval(attrs.knobOptions);
          }

          if(!angular.isUndefined(attrs.knobMax)){
            var max = scope.$eval(attrs.knobMax);
            if(!angular.isUndefined(max)){

              opts.max = max;
            
            }
          }
          
          $elem = $(elem);
          $elem.val(scope.knob);
          $elem.change();
          $elem.knob(opts);

        };

        var updateMax = function updateMax() {
          var max = scope.$eval(attrs.knobMax);
          $elem.trigger('configure', {
            'max': max
          }).trigger('change');
        }

        scope.$watch(attrs.knobData, function () {
           renderKnob();
        });

        scope.$watch(attrs.knobMax, function() {
          updateMax();
        });

        scope.$watch(attrs.knobOptions, function () {
          renderKnob();
        }, true);

      }
    };
  });