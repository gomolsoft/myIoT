/// <reference path="../index.module.ts" />

module myIoTapp {
  'use strict';

  export class StartController {
    public components: IComponent[];
    public ioTService: IoTService;

    /* @ngInject */
    constructor (IoTService: IoTService) {
      this.components = new Array();
      this.ioTService = IoTService;
      this.load();
    }

    load() {
      this.components = this.ioTService.getComponents();
    }
  }
}
