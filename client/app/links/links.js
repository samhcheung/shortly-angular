angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  // console.log($scope, 'scope');
  // console.log(Links, 'links');
  // console.log(this.getAll(), 'this.getall');
  Links.getAll().then(function (data) {
    $scope.data.links = data;
  });

});