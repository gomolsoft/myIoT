/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="start/start.controller.ts" />

/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/malarkey/malarkey.directive.ts" />
/// <reference path="../app/components/webDevTec/webDevTec.service.ts" />
/// <reference path="../app/components/webService/webServiceIoT.service.ts" />
/// <reference path="../app/components/githubContributor/githubContributor.service.ts" />

/// <reference path="../app/components/iot/basic/baseComponent.directive.ts" />

/// <reference path="../app/user/login.controller.ts" />


declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;

module myIoTapp {
  'use strict';

  angular.module('myIoTapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'xeditable'])

    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)

    .config(Config)
    .config(RouterConfig)

    .config(['RestangularProvider',
        (RestangularProvider:restangular.IProvider) => {
          RestangularProvider.setBaseUrl('http://mbp.fritz.box:8080');
//          RestangularProvider.setBaseUrl('https://secure.mysmartthings.de/api');
        }
    ])

    .run(RunBlock)

    .service   ('githubContributor', GithubContributor)
    .service   ('webDevTec',         WebDevTecService)
    .service   ('IoTService',        IoTService)

    .controller('MainController',    MainController)
    .controller('StartController',   StartController)
    .controller('LoginController',   LoginController)

    .directive ('acmeNavbar',        acmeNavbar)
    .directive ('acmeMalarkey',      acmeMalarkey)
    .directive ('baseComponent',     baseComponent)
  ;
}
