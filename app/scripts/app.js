'use strict';

angular.module('angularJsDirectivesApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'Controllers',
        'Directives',
        'Services',
        'Filters'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function(ListUsersProvider) {
        ListUsersProvider.setBackendUrl("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}");
    })
    .value('version', '1.0')
    .constant(
        {
            'CONFIG': {
                'env':'mock'
            },
            'dirTmplDir' : './views/directives'
        }
    );

