angular.module('mifinity').run(['$templateCache', function($templateCache) {$templateCache.put('contacts/details.html','<h3 class="md-headline">{{vm.contact.name}}</h3>\r\n\r\n<form name="addressForm" ng-submit="vm.save()">\r\n    <p ng-if="!vm.addresses.length">Contact has no addresses.</p>\r\n\r\n    <div ng-repeat="address in vm.addresses | orderBy:\'id\'">\r\n        <h4 class="md-subhead">Address #{{$index + 1}} <md-button type="button" ng-click="vm.removeAddress(address.id)"><i class="fa fa-times" aria-hidden="true"></i> Remove</md-button></h4>\r\n\r\n        <md-input-container class="md-block">\r\n            <label>Street 1</label>\r\n            <input ng-model="address.street_1" required>\r\n        </md-input-container>\r\n\r\n        <md-input-container class="md-block">\r\n            <label>Street 2</label>\r\n            <input ng-model="address.street_2" required>\r\n        </md-input-container>\r\n\r\n        <md-input-container class="md-block">\r\n            <label>Town</label>\r\n            <input ng-model="address.town" required>\r\n        </md-input-container>\r\n\r\n        <md-input-container class="md-block">\r\n            <label>Country</label>\r\n            <input ng-model="address.country" required>\r\n        </md-input-container>\r\n    </div>\r\n\r\n    <md-button type="button" ng-click="vm.addAddress()"><i class="fa fa-plus" aria-hidden="true"></i> Add Address</md-button>\r\n    <md-button type="submit" ng-disabled="addressForm.$invalid || !vm.addresses.length"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</md-button>\r\n</form>');
$templateCache.put('contacts/list.html','<h3 class="md-headline">Contacts</h3>\r\n<h4 class="md-subhead">You have {{vm.contacts.length}} contacts</h4>\r\n\r\n<md-list class="contacts-list">\r\n    <md-list-item ng-repeat="contact in vm.contacts">\r\n        <md-button ui-sref="contactDetails({id: contact.id})">\r\n            <i class="fa fa-user" aria-hidden="true"></i>\r\n            <span>{{contact.name}}</span>\r\n        </md-button>\r\n    </md-list-item>\r\n</md-list>\r\n\r\n<md-divider></md-divider>\r\n\r\n<form ng-submit="vm.createContact()">\r\n    <md-input-container>\r\n        <label>New Contact</label>\r\n        <input ng-model="vm.newContactName" required>\r\n    </md-input-container>\r\n\r\n    <md-button type="submit">Save</md-button>\r\n</form>');
$templateCache.put('home/home.html','<h1>John Doe</h1>\r\n<h4>Front-End Developer</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>');}]);