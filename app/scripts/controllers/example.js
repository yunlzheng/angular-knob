angular.module('knobApp', ['ui.knob'])

angular.module('knobApp')
  .controller('exampleCtrl', ['$scope', function($scope){

    $scope.data = 20;

    $scope.knobOptions = {
      'width':100,
      'displayInput': false
    };

  }]);