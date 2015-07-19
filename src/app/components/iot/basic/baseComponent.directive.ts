/// <reference path="../../../index.module.ts" />

module myIoTapp {
  'use strict';

  /** @ngInject */
  export function baseComponent(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      templateUrl: 'app/components/iot/basic/basecomp.html',
      controller: BaseComponentController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class BaseComponentController {
    public name: string;

    constructor() {
      this.name = 'test123';
    }
  }
}
