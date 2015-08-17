var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'ResumeController'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsController'
    })
    .when('/:templatePath*', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController'
    });
});

app.controller('NavController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  };
});

app.controller('ProjectsController', function ($scope) {
  $scope.projects = [
    {
      title: 'Reddit Clone in Angular',
      url: 'https://github.com/prowe214/reddit-angular-clone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageurl: 'http://www.aux.tv/wp-content/uploads/2012/10/8_bit_reddit.png'
    },
    {
      title: 'eBae',
      url: 'http://ebae.herokuapp.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageurl: 'http://orig04.deviantart.net/5cd2/f/2014/270/a/f/ebae_by_morellex-d80qlb2.jpg'
    }
  ];
});

app.controller('BioController', function ($scope) {
  $scope.message = 'THIS IS DOG';
});

app.controller('ResumeController', function ($scope) {
  $scope.jobs = [
    {
      company: 'WeeZee: The Science of Play',
      position: 'Founding Developer',
      url: 'www.weezeeworld.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageurl: 'http://www.weezeeworld.com/wp-content/uploads/2014/03/WZlogo_websiteheader-01-e1394137285731.png'
    },
    {
      company: 'Conquer',
      position: 'Executive Director',
      url: 'www.conquerspd.org',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageurl: 'https://cdn.evbuc.com/eventlogos/91582287/cqlogotranswhite04.png'
    }
  ];
});
