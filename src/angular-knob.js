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

          scope.knob = scope.$eval(attrs.knobData);

          var opts = {}; 
          if(!angular.isUndefined(attrs.knobOptions)){
            opts = scope.$eval(attrs.knobOptions);
          }

          var max = 100;
          if(!angular.isUndefined(attrs.knobMax)){
            var max = scope.$eval(attrs.knobMax);
            if(!angular.isUndefined(max)){

              console.log(scope.knob+ '---' + max);
              opts.max = max;
            
            }else{
              console.log('max is undefined');
            }
          }
          
          $elem = $(elem);
          $elem.knob(opts);

        };

        scope.$watch(attrs.knobData, function () {
           renderKnob();
        });

        scope.$watch(attrs.knobOptions, function () {
          renderKnob();
        }, true);

      }
    };
  });