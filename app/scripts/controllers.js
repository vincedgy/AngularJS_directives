'use strict';

var sortJSON = function (data, key) {
    'use strict';
    return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

var Controllers = angular.module('Controllers',['Services']);

Controllers.controller('AboutCtrl', ['$scope','ListUsers', function($scope, ListUsers) {
        $scope.listUsers = [];
        ListUsers.query(function(data) {
            $scope.listUsers = data;
        });
    }])
    .controller('ContactCtrl', ['$scope', function($scope) {
        $scope.contact= "Contact !";
    }])
    .controller('TestCtrl', ['$scope', function($scope) {

        $scope.fullValueResult="";

        $scope.firstList = [
            {"code":1, "label":"value1"},
            {"code":2, "label":"value2"},
            {"code":3, "label":"value3"},
            {"code":4, "label":"value4"},
            {"code":5, "label":"value5"},
        ];
        $scope.secondList = [
            {"code":"A", "label":"valueA"},
            {"code":"B", "label":"valueB"},
            {"code":"C", "label":"valueC"},
            {"code":"D", "label":"valueD"},
            {"code":"E", "label":"valueE"},
        ];

        $scope.firstSelected=$scope.firstList[0];
        $scope.secondSelected=$scope.secondList[0];

        $scope.$watch("firstSelected",function() {
            $scope.fullValueResult = $scope.firstSelected.code + $scope.secondSelected.code;
        });
        $scope.$watch("secondSelected",function() {
            $scope.fullValueResult = $scope.firstSelected.code + $scope.secondSelected.code;
        });
    }])
    .controller('HomeCtrl', ['$scope','Service', function($scope, Service) {
        var table = [];
        $scope.things = [];
        $scope.nItems = "";
        $scope.selected = {};
        $scope.selected.lname = "(Waiting for data...)";
        Service.query(function(data) {
            table = sortJSON(data,'lname');
            $scope.nItems = 0;
            table.forEach(function(item) {
                item.firstLetter = item.lname.substr(0,1);
                item.lname = angular.uppercase(item.lname);
                $scope.things.push(item);
                $scope.nItems ++;
            });
            table = [];
            $scope.selected = $scope.things[0];
        });

        $scope.home= "Home";
    }])
    .controller('HeaderCtrl', ['$scope','$location', function($scope, $location) {
        $scope.header= "Header";
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }])
    .controller('FooterCtrl', ['$scope', function($scope) {
        $scope.footer= "♥ from the Yeoman team";
    }]);
