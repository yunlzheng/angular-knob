angular.module('knobApp', ['ui.knob'])

angular.module('knobApp')
  .controller('exampleCtrl', ['$scope', function($scope){

    $scope.data = 30;

    $scope.knobOptions = {
      'width':100,
      'displayInput': false
    };

  }]);