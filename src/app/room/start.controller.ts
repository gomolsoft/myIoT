/// <reference path="../index.module.ts" />

module myIoTapp {
  'use strict';

  export class RoomController {
    public components: IComponent[];
    public ioTService: IoTService;

    /* @ngInject */
    constructor (ioTService: IoTService) {
      this.components = new Array();
      this.ioTService = ioTService;
    }

    public getWebDevTec() {
      this.components = this.ioTService.getComponents();
    }
  }
}
