/**
 * Created by Vincent on 08/04/14.
 */

'use strict';

/* Filters */

var Filters = angular.module('Filters',[])

// checkmark
Filters.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});