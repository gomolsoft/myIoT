module myIoTapp {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
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
        });

      ;

      $urlRouterProvider.otherwise('/');
    }

  }
}
