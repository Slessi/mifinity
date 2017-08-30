(function () {
    'use strict';

    angular
        .module('mifinity')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            templateUrl: 'home/home.html',
            url: '/'
        });

        $urlRouterProvider.otherwise('/');
    }
})();