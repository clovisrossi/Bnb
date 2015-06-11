(function () {
  'use strict';

  angular
    .module('bnb.authentication', [
      'bnb.authentication.controllers',
      'bnb.authentication.services'
    ]);

  angular
    .module('bnb.authentication.controllers', []);

  angular
    .module('bnb.authentication.services', ['ngCookies']);
})();