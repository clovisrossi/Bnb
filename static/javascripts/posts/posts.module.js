(function() {
    'use strict';

    angular
        .module('bnb.posts', [
            'bnb.posts.controllers',
            'bnb.posts.directives',
            'bnb.posts.services'
        ]);

    angular
        .module('bnb.posts.controllers', []);

    angular
        .module('bnb.posts.directives', ['ngDialog']);

    angular
        .module('bnb.posts.services', []);
})();