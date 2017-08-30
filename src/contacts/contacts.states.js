(function () {
    'use strict';

    angular
        .module('mifinity')
        .config(routes);

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider.state('contactList', {
            controller: 'ContactListController',
            controllerAs: 'vm',
            templateUrl: 'contacts/list.html',
            url: '/contacts'
        });

        $stateProvider.state('contactDetails', {
            controller: 'ContactDetailsController',
            controllerAs: 'vm',
            templateUrl: 'contacts/details.html',
            url: '/contacts/:id'
        });
    }
})();