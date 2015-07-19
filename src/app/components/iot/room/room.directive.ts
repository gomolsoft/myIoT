/// <reference path="../../../index.module.ts" />

module myIoTapp {
  'use strict';

  /** @ngInject */
  export function roomDirective(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      templateUrl: 'app/components/iot/room/room.html',
      controller: RoomDirectiveController,
      controllerAs: 'rd',
      bindToController: true
    };

  }

  /** @ngInject */
  class RoomDirectiveController {
    public name: string;

    constructor() {
      this.name = 'test123';
    }
  }
}
