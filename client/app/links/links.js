angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};

  Links.getAll().then(function (data) {
    $scope.data.links = data;
  });
  
  $scope.checkFilter = function (str) {
    if (!$scope.filterBox || str.toLowerCase().indexOf($scope.filterBox.toLowerCase()) !== -1) {
      return true;
    } else {
      return false;  
    }
  };
  
  $scope.signout = function () {
    Auth.signout();
  };

});