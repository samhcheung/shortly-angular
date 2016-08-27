'use strict';

describe('ShortenController', function () {
  var $scope, $rootScope, $location, createController, $httpBackend, Links;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    Links = $injector.get('Links');
    $location = $injector.get('$location');

    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('ShortenController', {
        $scope: $scope,
        Links: Links,
        $location: $location
      });
    };

    createController();
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a link property on the $scope', function () {
    expect($scope.link).to.be.an('object');
  });

  it('should have a addLink method on the $scope', function () {
    expect($scope.addLink).to.be.a('function');
  });
  
  it('should successfully sign a user out', function () {
    expect($scope.signout).to.be.a('function');
  });
  it('should have an onType function', function () {
    expect($scope.onType).to.be.a('function');
  });
  it('should accept valid urls', function () {
    $scope.linkModel = 'http://www.google.com';
    $scope.onType();
    expect($scope.validText).to.equal('Is valid');
  });
  it('should reject invalid urls', function () {
    $scope.linkModel = 'This should not be a valid url';
    $scope.onType();
    expect($scope.validText).to.equal('Is not valid');
  });
  
  it('should be able to create new links with addLink()', function () {
    $httpBackend.expectPOST('/api/links').respond(201, '');
    $scope.addLink();
    $httpBackend.flush();
  });
});
