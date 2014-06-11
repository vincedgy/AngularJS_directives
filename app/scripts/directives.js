/**
 * Created by Vincent on 08/04/14.
 */

'use strict';


var Directives = angular.module('Directives',[]);

    // appVersion
Directives.directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);

    // tabs
Directives.directive('tabs', function($parse) {
        return {
            template: '<ul class="nav nav-tabs">' +
                '<li ng-repeat="tab in tabs" ' +
                '    ng-class="{\'active\': isSelected(tab)}" ' +
                '    ng-click="selectTab(tab)">' +
                '  <a href="">{{ tab.title }}</a>' +
                '</li>' +
                '</ul>' +
                '<div class="tab-content">' +
                '  <div class="tab-pane"' +
                '       ng-repeat="tab in tabs"' +
                '       ng-class="{\'active\': isSelected(tab)}">' +
                '    {{ tab.content }}' +
                '  </div>' +
                '</div>',
            link: function(scope, tabsElement, attributes) {
                scope.tabs = $parse(attributes.tabs)(scope);

                var selectedTab = scope.tabs[0];

                scope.isSelected = function(tab) {
                    return selectedTab == tab;
                }

                scope.selectTab = function(tab) {
                    selectedTab = tab;
                }
            }
        }
    });

// Element
Directives.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div>Hi there</div>',
        replace: true
    };
});

// Attributes & Template with Injected constatn for configuration
Directives.directive('greeting', ['dirTmplDir', function(dirTmplDir) {
    return {
        restrict: 'A',
        templateUrl: dirTmplDir + '/greetingDirectiveTemplate.html',
        transclude: true
    };
}]);
