(function () {
    'use strict';
    angular.module('calendar.controllers', []).controller('calendarController', calendarController);

    // controllers
    calendarController.$inject = ['$scope', '$q', 'calendarService'];
    function calendarController($scope, $q, calendarService) {
        // constructor
        function activate() {
        }

        // start
        activate();
    }
})();