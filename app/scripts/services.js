/**
 * Created by Vincent on 25/03/14.
 */

'use strict';

// Services has a dependance on mock.services
// it uses the ListUsers provided by mock.services
var Services = angular.module('Services',[]);

Services.factory('Service', ['$resource', 'ListUsers', 'CONFIG',
        function($resource, ListUsers, CONFIG) {
            switch(CONFIG.env) {
                case 'mock' : return ListUsers;
                default     : return $resource("http://www.filltext.com/?rows=150&delay=2&fname={firstName}&lname={lastName}");
            };

    }]);

// mock.services provides data from a configurable backendURL
Services.provider('ListUsers', function() {
        this.backendUrl = "";
        this.setBackendUrl = function(newUrl) {
            if (newUrl) this.backendUrl = newUrl;
        };
        this.$get = function($resource) { // injectables go here
            return $resource(this.backendUrl);
        };
    });
