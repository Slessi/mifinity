(function () {
    'use strict';

    angular
        .module('mifinity')
        .controller('ContactListController', ContactListController);

    ContactListController.$inject = ['ContactsService'];
    function ContactListController(ContactsService) {
        var vm = this;

        vm.createContact = createContact;

        loadData();

        ////////////////

        function loadData() {
            ContactsService.get().then(function onGetData(response) {
                vm.contacts = response;
            });
        }

        function createContact() {
            var data = {
                name: vm.newContactName
            };

            ContactsService.create(data).then(function onCreateContact() {
                vm.newContactName = '';

                loadData();
            });
        }
    }
})();