(function () {
    'use strict';

    angular
        .module('mifinity')
        .factory('ContactsService', ContactsService);

    ContactsService.$inject = ['$http'];
    function ContactsService($http) {
        var service = {
            get: get,
            getAddresses: getAddresses,
            create: create,
            createAddress: createAddress,
            update: update,
            updateAddress: updateAddress,
            removeAddress: removeAddress,
        };

        return service;

        ////////////////

        function request(config) {
            return $http(config).then(responseHandler);

            function responseHandler(response) {
                return response.data;
            }
        }

        function get(id) {
            return request({
                method: 'GET',
                url: '/contacts/' + (id || '')
            });
        }

        function getAddresses(id) {
            return request({
                method: 'GET',
                url: '/contacts/' + id + '/addresses'
            });
        }

        function create(data) {
            return request({
                method: 'POST',
                url: '/contacts/',
                data: data
            });
        }

        function createAddress(id) {
            return request({
                method: 'POST',
                url: '/contacts/' + id + '/addresses'
            });
        }

        function update(id, data) {
            return request({
                method: 'PUT',
                url: '/contacts/' + (id || ''),
                data: data
            });
        }

        function updateAddress(id, data) {
            return request({
                method: 'PUT',
                url: '/addresses/' + id,
                data: data
            });
        }

        function removeAddress(id) {
            return request({
                method: 'DELETE',
                url: '/addresses/' + (id || '')
            });
        }
    }
})();