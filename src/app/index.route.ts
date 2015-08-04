module myIoTapp {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider) {

//      $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';


      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/start/start.html',
          controller: 'StartController',
          controllerAs: 'main'
        })

        .state('room', {
          url: '/room',
          templateUrl: 'app/room/room.html',
          controller: 'RoomController',
          controllerAs: 'room'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'app/user/login.html',
            controller: 'LoginController',
            controllerAs: 'us'
          });

      ;

      $urlRouterProvider.otherwise('/');
    }

  }
}
