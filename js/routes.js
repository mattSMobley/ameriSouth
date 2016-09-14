angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/properties', {
        templateUrl: 'views/properties.html'
      })
      .when('/services', {
        templateUrl: 'views/services.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      });

  });
