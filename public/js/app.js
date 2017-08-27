(function () {
    'use strict';

    angular.module('mifinity', [
        'ngMaterial'
    ]);

    angular.element(document).ready(function onDocumentReady() {
        angular.bootstrap(document, ['mifinity']);
    });
})();