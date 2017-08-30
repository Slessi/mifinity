(function () {
    'use strict';

    angular
        .module('mifinity')
        .controller('ContactDetailsController', ContactDetailsController);

    ContactDetailsController.$inject = ['ContactsService', '$stateParams'];
    function ContactDetailsController(ContactsService, $stateParams) {
        var vm = this;

        var contactId = $stateParams.id;

        vm.save = save;
        vm.addAddress = addAddress;
        vm.removeAddress = removeAddress;

        loadData();

        ////////////////

        function loadData() {
            ContactsService.get(contactId).then(function onGetContact(response) {
                vm.contact = response;
            });

            ContactsService.getAddresses(contactId).then(function onGetAddresses(response) {
                vm.addresses = response;
            });
        }

        function save() {
            for (var i = 0; i < vm.addresses.length; i++) {
                var address = vm.addresses[i];
                ContactsService.updateAddress(address.id, address);
            }
        }

        function addAddress() {
            ContactsService.createAddress(contactId).then(loadData);
        }

        function removeAddress(id) {
            ContactsService.removeAddress(id).then(loadData);
        }
    }
})();