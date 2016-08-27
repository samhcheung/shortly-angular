angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function (link) {
    console.log(link);
    Links.addOne({ url: link });
    $scope.linkModel = '';
  };
});
