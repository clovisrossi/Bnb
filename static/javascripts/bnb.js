(function() {
    'use strict';

    angular
        .module('bnb', [
            'bnb.config',
            'bnb.routes',
            'bnb.authentication',
            'bnb.layout',
            'bnb.posts',
            'bnb.utils',
            'bnb.profiles',
        ]);

    angular
        .module('bnb.routes', ['ngRoute']);

    angular
        .module('bnb.config', []);

    angular
        .module('bnb')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    }

})();