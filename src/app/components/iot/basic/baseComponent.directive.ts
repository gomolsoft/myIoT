/// <reference path="../../../index.module.ts" />

module myIoTapp {
  'use strict';

  /** @ngInject */
  export function baseComponent(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        component: '='
      },
      link: function (scope: any, elem: any, attr: any){
        //console.log( 'link:' + attr.component );
      },
      templateUrl: 'app/components/iot/basic/basecomp.html',
      controller: BaseComponentController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class BaseComponentController {
    public component: IComponent;

    constructor() {
      //console.log( 'constr:' + this.component );
    }

  }
}
