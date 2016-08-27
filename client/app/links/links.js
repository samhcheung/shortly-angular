angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  // console.log($scope, 'scope');
  // console.log(Links, 'links');
  // console.log(this.getAll(), 'this.getall');
  Links.getAll().then(function (data) {
    $scope.data.links = data;
  });
  $scope.onType = function () {
    //console.log($scope.filterBox);
    
  };
  
  $scope.checkFilter = function (str) {
    console.log(str, 'str');
    if (!$scope.filterBox || str.toLowerCase().indexOf($scope.filterBox.toLowerCase()) !== -1) {
      return true;
    } else {
      return false;  
    }
  };

});