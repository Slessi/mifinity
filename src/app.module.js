(function () {
    'use strict';

    angular.module('mifinity', [
        'ngMaterial',
        'ui.router'
    ]);

    angular.element(document).ready(function onDocumentReady() {
        angular.bootstrap(document, ['mifinity']);
    });
})();
