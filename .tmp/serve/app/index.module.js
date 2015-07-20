var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var Config = (function () {
        /** @ngInject */
        function Config($logProvider, toastr) {
            // enable log
            $logProvider.debugEnabled(true);
            // set options third-party lib
            toastr.options.timeOut = 3000;
            toastr.options.positionClass = 'toast-top-right';
            toastr.options.preventDuplicates = true;
            toastr.options.progressBar = true;
        }
        return Config;
    })();
    myIoTapp.Config = Config;
})(myIoTapp || (myIoTapp = {}));

var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'app/start/start.html',
                controller: 'StartController',
                controllerAs: 'main'
            }).state('room', {
                url: '/room',
                templateUrl: 'app/room/room.html',
                controller: 'RoomController',
                controllerAs: 'room'
            });
            ;
            $urlRouterProvider.otherwise('/');
        }
        return RouterConfig;
    })();
    myIoTapp.RouterConfig = RouterConfig;
})(myIoTapp || (myIoTapp = {}));

var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var RunBlock = (function () {
        /** @ngInject */
        function RunBlock($log) {
            $log.debug('runBlock end');
        }
        return RunBlock;
    })();
    myIoTapp.RunBlock = RunBlock;
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var MainController = (function () {
        /* @ngInject */
        function MainController($timeout, webDevTec, toastr) {
            this.awesomeThings = new Array();
            this.webDevTec = webDevTec;
            this.classAnimation = '';
            this.activate($timeout);
        }
        MainController.prototype.activate = function ($timeout) {
            this.getWebDevTec();
            var self = this;
            $timeout(function () {
                self.classAnimation = 'rubberBand';
            }, 4000);
        };
        MainController.prototype.showToastr = function () {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            this.classAnimation = '';
        };
        MainController.prototype.getWebDevTec = function () {
            this.awesomeThings = this.webDevTec.tec;
        };
        return MainController;
    })();
    myIoTapp.MainController = MainController;
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var StartController = (function () {
        /* @ngInject */
        function StartController(IoTService) {
            this.components = new Array();
            this.ioTService = IoTService;
            this.load();
        }
        StartController.prototype.load = function () {
            this.components = this.ioTService.getComponents();
        };
        return StartController;
    })();
    myIoTapp.StartController = StartController;
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    /** @ngInject */
    function acmeNavbar() {
        return {
            restrict: 'E',
            scope: {
                creationDate: '='
            },
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    myIoTapp.acmeNavbar = acmeNavbar;
    /** @ngInject */
    var NavbarController = (function () {
        function NavbarController(moment) {
            this.relativeDate = moment(1437217698151).fromNow();
        }
        return NavbarController;
    })();
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    /** @ngInject */
    function acmeMalarkey(malarkey) {
        return {
            restrict: 'E',
            scope: {
                extraValues: '='
            },
            template: '&nbsp;',
            link: linkFunc,
            controller: MalarkeyController,
            controllerAs: 'vm'
        };
    }
    myIoTapp.acmeMalarkey = acmeMalarkey;
    function linkFunc(scope, el, attr, vm) {
        var watcher;
        var typist = malarkey(el[0], {
            typeSpeed: 40,
            deleteSpeed: 40,
            pauseDelay: 800,
            loop: true,
            postfix: ' '
        });
        el.addClass('acme-malarkey');
        angular.forEach(scope.extraValues, function (value) {
            typist.type(value).pause().delete();
        });
        watcher = scope.$watch('vm.contributors', function (current, original) {
            angular.forEach(vm.contributors, function (contributor) {
                typist.type(contributor.login).pause().delete();
            });
        });
        scope.$on('$destroy', function () {
            watcher();
        });
    }
    /** @ngInject */
    var MalarkeyController = (function () {
        function MalarkeyController($log, githubContributor) {
            this.contributors = [];
            this.$log = $log;
            this.githubContributor = githubContributor;
            this.activate();
        }
        MalarkeyController.prototype.activate = function () {
            var _this = this;
            return this.getContributors().then(function () {
                _this.$log.info('Activated Contributors View');
            });
        };
        MalarkeyController.prototype.getContributors = function () {
            var _this = this;
            return this.githubContributor.getContributors(10).then(function (data) {
                _this.contributors = data;
                return _this.contributors;
            });
        };
        return MalarkeyController;
    })();
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var WebDevTecService = (function () {
        /** @ngInject */
        function WebDevTecService() {
            var rawData = [
                {
                    'title': 'AngularJS',
                    'url': 'https://angularjs.org/',
                    'description': 'HTML enhanced for web apps!',
                    'logo': 'angular.png'
                },
                {
                    'title': 'BrowserSync',
                    'url': 'http://browsersync.io/',
                    'description': 'Time-saving synchronised browser testing.',
                    'logo': 'browsersync.png'
                },
                {
                    'title': 'GulpJS',
                    'url': 'http://gulpjs.com/',
                    'description': 'The streaming build system.',
                    'logo': 'gulp.png'
                },
                {
                    'title': 'Jasmine',
                    'url': 'http://jasmine.github.io/',
                    'description': 'Behavior-Driven JavaScript.',
                    'logo': 'jasmine.png'
                },
                {
                    'title': 'Karma',
                    'url': 'http://karma-runner.github.io/',
                    'description': 'Spectacular Test Runner for JavaScript.',
                    'logo': 'karma.png'
                },
                {
                    'title': 'Protractor',
                    'url': 'https://github.com/angular/protractor',
                    'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                    'logo': 'protractor.png'
                },
                {
                    'title': 'Bootstrap',
                    'url': 'http://getbootstrap.com/',
                    'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
                    'logo': 'bootstrap.png'
                },
                {
                    'title': 'Angular UI Bootstrap',
                    'url': 'http://angular-ui.github.io/bootstrap/',
                    'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
                    'logo': 'ui-bootstrap.png'
                },
                {
                    'title': 'Sass (Node)',
                    'url': 'https://github.com/sass/node-sass',
                    'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
                    'logo': 'node-sass.png'
                },
                {
                    'title': 'TypeScript',
                    'url': 'http://www.typescriptlang.org/',
                    'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
                    'logo': 'typescript.png'
                }
            ];
            this.data = rawData.map(function (awesomeThing) {
                awesomeThing.rank = Math.random();
                return awesomeThing;
            });
        }
        Object.defineProperty(WebDevTecService.prototype, "tec", {
            get: function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        return WebDevTecService;
    })();
    myIoTapp.WebDevTecService = WebDevTecService;
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var IoTService = (function () {
        /** @ngInject */
        function IoTService() {
            var rawComponent;
            var rawRoom;
            rawRoom = [
                {
                    'name': 'Wohnzimmer'
                },
                {
                    'name': 'Küche'
                },
                {
                    'name': 'Schlafzimmer'
                },
                {
                    'name': 'Bad'
                },
            ];
            rawComponent = [
                {
                    'name': 'Thermostatregler',
                    'description': {
                        'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
                        'short': 'Zur Regelung der Raumtemperatur'
                    },
                    'serial': 'TR-1A41-7CB2-FB51-GH1E-70OA',
                    'location': {
                        'room': rawRoom[0],
                        'location': 'Fenster Rechts'
                    },
                    'active': false,
                },
                {
                    'name': 'Thermostatregler',
                    'description': {
                        'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
                        'short': 'Zur Regelung der Raumtemperatur'
                    },
                    'serial': 'TR-2A41-7CB2-FB51-GH1E-781B',
                    'location': {
                        'room': rawRoom[0],
                        'location': 'Fenster Links'
                    },
                    'active': true,
                },
                {
                    'name': 'Thermostatregler',
                    'description': {
                        'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
                        'short': 'Zur Regelung der Raumtemperatur'
                    },
                    'serial': 'TR-3A41-7CB2-FB51-GH1E-781C',
                    'location': {
                        'room': rawRoom[1],
                        'location': 'Fenster'
                    },
                    'active': true,
                },
                {
                    'name': 'Thermostatregler',
                    'description': {
                        'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
                        'short': 'Zur Regelung der Raumtemperatur'
                    },
                    'serial': 'TR-4A41-7CB2-FB51-GH1E-781D',
                    'location': {
                        'room': rawRoom[2],
                        'location': 'Fenster'
                    },
                    'active': true,
                },
                {
                    'name': 'Thermostatregler',
                    'description': {
                        'long': 'Der Thermostatregler dieser ist für die Regelung der Raumtemperatur zuständig.',
                        'short': 'Zur Regelung der Raumtemperatur'
                    },
                    'serial': 'TR-5A41-7CB2-FB51-GH1E-781E',
                    'location': {
                        'room': rawRoom[3],
                        'location': 'Türe'
                    },
                    'active': true,
                },
                {
                    'name': 'Thermometer',
                    'description': {
                        'long': 'Misst die Temperatur. Somit lassen sich durch statistische Werte Prognosen bzw. historische Date darstellen.',
                        'short': 'Messung der Temperatur'
                    },
                    'serial': 'TH-6A41-7CB2-FB51-GH1E-781F',
                    'location': {
                        'room': rawRoom[0],
                        'location': 'Tisch'
                    },
                    'active': true,
                },
                {
                    'name': 'Lichsensor',
                    'description': {
                        'long': 'Misst die Leuchtkraft. Somit lassen sich durch statistische Werte Prognosen bzw. historische Date darstellen.',
                        'short': 'Messung der Licheinstrahlung'
                    },
                    'serial': 'LS-7A41-7CB2-FB51-GH1E-781G',
                    'location': {
                        'room': rawRoom[0],
                        'location': 'Eingangsbereich'
                    },
                    'active': true,
                },
                {
                    'name': 'Web-Cam',
                    'description': {
                        'long': 'Die Webcam lässt sich in 2 Dimentionen schwenken. Periodische Bilder lassen sich nachfollziehen .. Somit lässt sich im',
                        'short': 'Steuerung der WebCam'
                    },
                    'serial': 'WC-8A41-7CB2-FB51-GH1E-781H',
                    'location': {
                        'room': rawRoom[0],
                        'location': 'Eingangsbereich'
                    },
                    'active': true,
                },
                {
                    'name': 'Ultraschall-Sensor',
                    'description': {
                        'long': 'Es lassen sich Messen mit welche distanz sich Objekte vor dem Sensor bewegen.',
                        'short': 'Misst Distanz zu Hindernissen'
                    },
                    'serial': 'US-9A41-7CB2-FB51-GH1E-781I',
                    'location': {
                        'room': rawRoom[0],
                        'location': 'Mitte'
                    },
                    'active': true,
                },
            ];
            this.components = rawComponent;
            this.rooms = rawRoom;
        }
        IoTService.prototype.getRooms = function () {
            return this.rooms;
        };
        IoTService.prototype.getComponents = function () {
            return this.components;
        };
        return IoTService;
    })();
    myIoTapp.IoTService = IoTService;
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var GithubContributor = (function () {
        /** @ngInject */
        function GithubContributor($log, $http) {
            this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
            this.$log = $log;
            this.$http = $http;
        }
        GithubContributor.prototype.getContributors = function (limit) {
            var _this = this;
            if (limit === void 0) { limit = 30; }
            return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
                return response.data;
            }).catch(function (error) {
                _this.$log.error('XHR Failed for getContributors.\n', error.data);
            });
        };
        return GithubContributor;
    })();
    myIoTapp.GithubContributor = GithubContributor;
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../../../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    /** @ngInject */
    function baseComponent() {
        return {
            restrict: 'E',
            scope: {
                component: '='
            },
            link: function (scope, elem, attr) {
                //console.log( 'link:' + attr.component );
            },
            templateUrl: 'app/components/iot/basic/basecomp.html',
            controller: BaseComponentController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    myIoTapp.baseComponent = baseComponent;
    /** @ngInject */
    var BaseComponentController = (function () {
        function BaseComponentController() {
            //console.log( 'constr:' + this.component );
        }
        return BaseComponentController;
    })();
})(myIoTapp || (myIoTapp = {}));

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
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    angular.module('myIoTapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'xeditable']).constant('malarkey', malarkey).constant('toastr', toastr).constant('moment', moment).config(myIoTapp.Config).config(myIoTapp.RouterConfig).run(myIoTapp.RunBlock).service('githubContributor', myIoTapp.GithubContributor).service('webDevTec', myIoTapp.WebDevTecService).service('IoTService', myIoTapp.IoTService).controller('MainController', myIoTapp.MainController).controller('StartController', myIoTapp.StartController).directive('acmeNavbar', myIoTapp.acmeNavbar).directive('acmeMalarkey', myIoTapp.acmeMalarkey).directive('baseComponent', myIoTapp.baseComponent);
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    var RoomController = (function () {
        /* @ngInject */
        function RoomController(ioTService) {
            this.components = new Array();
            this.ioTService = ioTService;
        }
        RoomController.prototype.getWebDevTec = function () {
            this.components = this.ioTService.getComponents();
        };
        return RoomController;
    })();
    myIoTapp.RoomController = RoomController;
})(myIoTapp || (myIoTapp = {}));

/// <reference path="../../../index.module.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    /** @ngInject */
    function roomDirective() {
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
    myIoTapp.roomDirective = roomDirective;
    /** @ngInject */
    var RoomDirectiveController = (function () {
        function RoomDirectiveController() {
            this.name = 'test123';
        }
        return RoomDirectiveController;
    })();
})(myIoTapp || (myIoTapp = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbmZpZy50cyIsImluZGV4LnJvdXRlLnRzIiwiaW5kZXgucnVuLnRzIiwibWFpbi9tYWluLmNvbnRyb2xsZXIudHMiLCJzdGFydC9zdGFydC5jb250cm9sbGVyLnRzIiwiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50cyIsImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzIiwiY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UudHMiLCJjb21wb25lbnRzL3dlYlNlcnZpY2Uvd2ViU2VydmljZUlvVC5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLnRzIiwiY29tcG9uZW50cy9pb3QvYmFzaWMvYmFzZUNvbXBvbmVudC5kaXJlY3RpdmUudHMiLCJpbmRleC5tb2R1bGUudHMiLCJyb29tL3N0YXJ0LmNvbnRyb2xsZXIudHMiLCJjb21wb25lbnRzL2lvdC9yb29tL3Jvb20uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIm15SW9UYXBwIiwibXlJb1RhcHAuQ29uZmlnIiwibXlJb1RhcHAuQ29uZmlnLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuUm91dGVyQ29uZmlnIiwibXlJb1RhcHAuUm91dGVyQ29uZmlnLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuUnVuQmxvY2siLCJteUlvVGFwcC5SdW5CbG9jay5jb25zdHJ1Y3RvciIsIm15SW9UYXBwLk1haW5Db250cm9sbGVyIiwibXlJb1RhcHAuTWFpbkNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJteUlvVGFwcC5NYWluQ29udHJvbGxlci5hY3RpdmF0ZSIsIm15SW9UYXBwLk1haW5Db250cm9sbGVyLnNob3dUb2FzdHIiLCJteUlvVGFwcC5NYWluQ29udHJvbGxlci5nZXRXZWJEZXZUZWMiLCJteUlvVGFwcC5TdGFydENvbnRyb2xsZXIiLCJteUlvVGFwcC5TdGFydENvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJteUlvVGFwcC5TdGFydENvbnRyb2xsZXIubG9hZCIsIm15SW9UYXBwLmFjbWVOYXZiYXIiLCJteUlvVGFwcC5OYXZiYXJDb250cm9sbGVyIiwibXlJb1RhcHAuTmF2YmFyQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIm15SW9UYXBwLmFjbWVNYWxhcmtleSIsIm15SW9UYXBwLmxpbmtGdW5jIiwibXlJb1RhcHAuTWFsYXJrZXlDb250cm9sbGVyIiwibXlJb1RhcHAuTWFsYXJrZXlDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuTWFsYXJrZXlDb250cm9sbGVyLmFjdGl2YXRlIiwibXlJb1RhcHAuTWFsYXJrZXlDb250cm9sbGVyLmdldENvbnRyaWJ1dG9ycyIsIm15SW9UYXBwLldlYkRldlRlY1NlcnZpY2UiLCJteUlvVGFwcC5XZWJEZXZUZWNTZXJ2aWNlLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuV2ViRGV2VGVjU2VydmljZS50ZWMiLCJteUlvVGFwcC5Jb1RTZXJ2aWNlIiwibXlJb1RhcHAuSW9UU2VydmljZS5jb25zdHJ1Y3RvciIsIm15SW9UYXBwLklvVFNlcnZpY2UuZ2V0Um9vbXMiLCJteUlvVGFwcC5Jb1RTZXJ2aWNlLmdldENvbXBvbmVudHMiLCJteUlvVGFwcC5HaXRodWJDb250cmlidXRvciIsIm15SW9UYXBwLkdpdGh1YkNvbnRyaWJ1dG9yLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuR2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzIiwibXlJb1RhcHAuYmFzZUNvbXBvbmVudCIsIm15SW9UYXBwLkJhc2VDb21wb25lbnRDb250cm9sbGVyIiwibXlJb1RhcHAuQmFzZUNvbXBvbmVudENvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJteUlvVGFwcC5Sb29tQ29udHJvbGxlciIsIm15SW9UYXBwLlJvb21Db250cm9sbGVyLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuUm9vbUNvbnRyb2xsZXIuZ2V0V2ViRGV2VGVjIiwibXlJb1RhcHAucm9vbURpcmVjdGl2ZSIsIm15SW9UYXBwLlJvb21EaXJlY3RpdmVDb250cm9sbGVyIiwibXlJb1RhcHAuUm9vbURpcmVjdGl2ZUNvbnRyb2xsZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sUUFBUSxDQWdCZDtBQWhCRCxXQUFPLFFBQVEsRUFBQyxDQUFDO0lBQ2ZBLFlBQVlBLENBQUNBO0lBRWJBLElBQWFBLE1BQU1BO1FBQ2pCQyxnQkFBZ0JBO1FBQ2hCQSxTQUZXQSxNQUFNQSxDQUVMQSxZQUE2QkEsRUFBRUEsTUFBY0E7WUFDdkRDLEFBQ0FBLGFBRGFBO1lBQ2JBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2hDQSxBQUNBQSw4QkFEOEJBO1lBQzlCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUM5QkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsR0FBR0EsaUJBQWlCQSxDQUFDQTtZQUNqREEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUN4Q0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDcENBLENBQUNBO1FBRUhELGFBQUNBO0lBQURBLENBWkFELEFBWUNDLElBQUFEO0lBWllBLGVBQU1BLEdBQU5BLE1BWVpBLENBQUFBO0FBQ0hBLENBQUNBLEVBaEJNLFFBQVEsS0FBUixRQUFRLFFBZ0JkOztBQ2hCRCxJQUFPLFFBQVEsQ0EyQmQ7QUEzQkQsV0FBTyxRQUFRLEVBQUMsQ0FBQztJQUNmQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFhQSxZQUFZQTtRQUN2QkcsZ0JBQWdCQTtRQUNoQkEsU0FGV0EsWUFBWUEsQ0FFWEEsY0FBb0NBLEVBQUVBLGtCQUE0Q0E7WUFDNUZDLGNBQWNBLENBQ1hBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBO2dCQUNiQSxHQUFHQSxFQUFFQSxHQUFHQTtn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VUFBVUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7UUFDcERBLENBQUNBO1FBQ0hGLHFCQUFDQTtJQUFEQSxDQWJBckMsQUFhQ3FDLElBQUFyQztJQWJZQSx1QkFBY0EsR0FBZEEsY0FhWkEsQ0FBQUE7QUFDSEEsQ0FBQ0EsRUFqQk0sUUFBUSxLQUFSLFFBQVEsUUFpQmQ7O0FDbkJELGlEQUFpRDtBQUVqRCxJQUFPLFFBQVEsQ0EyQmQ7QUEzQkQsV0FBTyxRQUFRLEVBQUMsQ0FBQztJQUNmQSxZQUFZQSxDQUFDQTtJQUViQSxBQUNBQSxnQkFEZ0JBO2FBQ0FBLGFBQWFBO1FBRTNCd0MsTUFBTUEsQ0FBQ0E7WUFDTEEsUUFBUUEsRUFBRUEsR0FBR0E7WUFDYkEsS0FBS0EsRUFBRUE7Z0JBQ0xBLElBQUlBLEVBQUVBLEdBQUdBO2FBQ1ZBO1lBQ0RBLFdBQVdBLEVBQUVBLG1DQUFtQ0E7WUFDaERBLFVBQVVBLEVBQUVBLHVCQUF1QkE7WUFDbkNBLFlBQVlBLEVBQUVBLElBQUlBO1lBQ2xCQSxnQkFBZ0JBLEVBQUVBLElBQUlBO1NBQ3ZCQSxDQUFDQTtJQUVKQSxDQUFDQTtJQWJleEMsc0JBQWFBLEdBQWJBLGFBYWZBLENBQUFBO0lBRURBLEFBQ0FBLGdCQURnQkE7UUFDVkEsdUJBQXVCQTtRQUczQnlDLFNBSElBLHVCQUF1QkE7WUFJekJDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBO1FBQ3hCQSxDQUFDQTtRQUNIRCw4QkFBQ0E7SUFBREEsQ0FOQXpDLEFBTUN5QyxJQUFBekM7QUFDSEEsQ0FBQ0EsRUEzQk0sUUFBUSxLQUFSLFFBQVEsUUEyQmQiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBjbGFzcyBDb25maWcge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvcigkbG9nUHJvdmlkZXI6IG5nLklMb2dQcm92aWRlciwgdG9hc3RyOiBUb2FzdHIpIHtcbiAgICAgIC8vIGVuYWJsZSBsb2dcbiAgICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG4gICAgICAvLyBzZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgICAgIHRvYXN0ci5vcHRpb25zLnRpbWVPdXQgPSAzMDAwO1xuICAgICAgdG9hc3RyLm9wdGlvbnMucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICAgICAgdG9hc3RyLm9wdGlvbnMucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICAgICAgdG9hc3RyLm9wdGlvbnMucHJvZ3Jlc3NCYXIgPSB0cnVlO1xuICAgIH1cblxuICB9XG59XG4iLCJtb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZXhwb3J0IGNsYXNzIFJvdXRlckNvbmZpZyB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRzdGF0ZVByb3ZpZGVyOiBuZy51aS5JU3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyOiBuZy51aS5JVXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdGFydC9zdGFydC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnU3RhcnRDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuICAgICAgICB9KVxuXG4gICAgICAgIC5zdGF0ZSgncm9vbScsIHtcbiAgICAgICAgICB1cmw6ICcvcm9vbScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcm9vbS9yb29tLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdSb29tQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAncm9vbSdcbiAgICAgICAgfSk7XG5cbiAgICAgIDtcblxuICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH1cblxuICB9XG59XG4iLCJtb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZXhwb3J0IGNsYXNzIFJ1bkJsb2NrIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IoJGxvZzogbmcuSUxvZ1NlcnZpY2UpIHtcbiAgICAgICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xuICAgIH1cblxuICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW5kZXgubW9kdWxlLnRzXCIgLz5cblxubW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBjbGFzcyBNYWluQ29udHJvbGxlciB7XG4gICAgcHVibGljIGF3ZXNvbWVUaGluZ3M6IElUZWNUaGluZ1tdO1xuICAgIHB1YmxpYyB3ZWJEZXZUZWM6IFdlYkRldlRlY1NlcnZpY2U7XG4gICAgcHVibGljIGNsYXNzQW5pbWF0aW9uOiBzdHJpbmc7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQ6IG5nLklUaW1lb3V0U2VydmljZSwgd2ViRGV2VGVjOiBXZWJEZXZUZWNTZXJ2aWNlLCB0b2FzdHI6IFRvYXN0cikge1xuICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gbmV3IEFycmF5KCk7XG4gICAgICB0aGlzLndlYkRldlRlYyA9IHdlYkRldlRlYztcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcblxuICAgICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoJHRpbWVvdXQ6IG5nLklUaW1lb3V0U2VydmljZSkge1xuICAgICAgdGhpcy5nZXRXZWJEZXZUZWMoKTtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcbiAgICAgIH0sIDQwMDApO1xuICAgIH1cblxuICAgIHNob3dUb2FzdHIoKSB7XG4gICAgICB0b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB9XG5cbiAgICBnZXRXZWJEZXZUZWMoKSB7XG4gICAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSB0aGlzLndlYkRldlRlYy50ZWM7XG4gICAgfVxuICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW5kZXgubW9kdWxlLnRzXCIgLz5cblxubW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBjbGFzcyBTdGFydENvbnRyb2xsZXIge1xuICAgIHB1YmxpYyBjb21wb25lbnRzOiBJQ29tcG9uZW50W107XG4gICAgcHVibGljIGlvVFNlcnZpY2U6IElvVFNlcnZpY2U7XG5cbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvciAoSW9UU2VydmljZTogSW9UU2VydmljZSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG4gICAgICB0aGlzLmlvVFNlcnZpY2UgPSBJb1RTZXJ2aWNlO1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cyA9IHRoaXMuaW9UU2VydmljZS5nZXRDb21wb25lbnRzKCk7XG4gICAgfVxuICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5kZXgubW9kdWxlLnRzXCIgLz5cblxubW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGFjbWVOYXZiYXIoKTogbmcuSURpcmVjdGl2ZSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgICB9O1xuXG4gIH1cblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICAgIHB1YmxpYyByZWxhdGl2ZURhdGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG1vbWVudDogbW9tZW50Lk1vbWVudFN0YXRpYykge1xuICAgICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQoMTQzNzIxNzY5ODE1MSkuZnJvbU5vdygpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luZGV4Lm1vZHVsZS50c1wiIC8+XG5cbm1vZHVsZSBteUlvVGFwcCB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpbnRlcmZhY2UgSVByb2plY3RzU2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xuICAgIGV4dHJhVmFsdWVzOiBhbnlbXTtcbiAgfVxuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGFjbWVNYWxhcmtleShtYWxhcmtleTogYW55KTogbmcuSURpcmVjdGl2ZSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlOiBJUHJvamVjdHNTY29wZSwgZWw6IEpRdWVyeSwgYXR0cjogYW55LCB2bTogTWFsYXJrZXlDb250cm9sbGVyKSB7XG4gICAgdmFyIHdhdGNoZXI7XG4gICAgdmFyIHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgZnVuY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCBmdW5jdGlvbihjdXJyZW50OiBJQ29udHJpYnV0b3IsIG9yaWdpbmFsOiBJQ29udHJpYnV0b3IpIHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIGZ1bmN0aW9uKGNvbnRyaWJ1dG9yOiBJQ29udHJpYnV0b3IpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBpbnRlcmZhY2UgSUNvbnRyaWJ1dG9yIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGxvZ2luOiBzdHJpbmc7XG4gIH1cblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gICAgcHVibGljIGNvbnRyaWJ1dG9yczogYW55W107XG5cbiAgICBwcml2YXRlICRsb2c6IG5nLklMb2dTZXJ2aWNlO1xuICAgIHByaXZhdGUgZ2l0aHViQ29udHJpYnV0b3I6IEdpdGh1YkNvbnRyaWJ1dG9yO1xuXG4gICAgY29uc3RydWN0b3IoJGxvZzogbmcuSUxvZ1NlcnZpY2UsIGdpdGh1YkNvbnRyaWJ1dG9yOiBHaXRodWJDb250cmlidXRvcikge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgIHRoaXMuZ2l0aHViQ29udHJpYnV0b3IgPSBnaXRodWJDb250cmlidXRvcjtcblxuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29udHJpYnV0b3JzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKVxuICAgICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmRleC5tb2R1bGUudHNcIiAvPlxuXG5tb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJVGVjVGhpbmcge1xuICAgIHJhbms6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgbG9nbzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xuICAgIHB1YmxpYyBkYXRhOiBJVGVjVGhpbmdbXTtcblxuICAgIHB1YmxpYyBnZXQgdGVjKCk6IElUZWNUaGluZ1tdIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHZhciByYXdEYXRhID0gW1xuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFyIFVJIEJvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcbiAgICAgICAgJ2xvZ28nOiAndWktYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R5cGVTY3JpcHQsIGEgdHlwZWQgc3VwZXJzZXQgb2YgSmF2YVNjcmlwdCB0aGF0IGNvbXBpbGVzIHRvIHBsYWluIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAndHlwZXNjcmlwdC5wbmcnXG4gICAgICB9XG4gICAgXTtcblxuICAgICAgdGhpcy5kYXRhID0gcmF3RGF0YS5tYXAoKGF3ZXNvbWVUaGluZzogSVRlY1RoaW5nKSA9PiB7XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuIGF3ZXNvbWVUaGluZztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5kZXgubW9kdWxlLnRzXCIgLz5cblxubW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUxvY2F0aW9uRGF0YSB7XG4gICAgbG9jYXRpb246IHN0cmluZ1xuICAgIHJvb206IElSb29tXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIElEZXNjcmlwdGlvbiB7XG4gICAgbG9uZzogc3RyaW5nXG4gICAgc2hvcnQ6IHN0cmluZ1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogSURlc2NyaXB0aW9uXG4gICAgc2VyaWFsOiBzdHJpbmdcbiAgICBsb2NhdGlvbjogSUxvY2F0aW9uRGF0YVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJUm9vbSB7XG4gICAgbmFtZTogc3RyaW5nXG4gIH1cblxuICBleHBvcnQgY2xhc3MgSW9UU2VydmljZSB7XG4gICAgcHVibGljIHJvb21zOiBJUm9vbVtdO1xuICAgIHB1YmxpYyBjb21wb25lbnRzOiBJQ29tcG9uZW50W107XG5cbiAgICBwdWJsaWMgZ2V0Um9vbXMoKTogSVJvb21bXSB7XG4gICAgICByZXR1cm4gdGhpcy5yb29tcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50cygpOiBJQ29tcG9uZW50W10ge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cztcbiAgICB9XG5cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgdmFyIHJhd0NvbXBvbmVudDtcbiAgICAgIHZhciByYXdSb29tO1xuXG4gICAgICByYXdSb29tID0gW1xuICAgICAgICB7XG4gICAgICAgICAgJ25hbWUnOiAnV29obnppbW1lcidcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ25hbWUnOiAnS8O8Y2hlJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdTY2hsYWZ6aW1tZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdCYWQnXG4gICAgICAgIH0sXG4gICAgICBdO1xuXG4gICAgICByYXdDb21wb25lbnQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdUaGVybW9zdGF0cmVnbGVyJyxcbiAgICAgICAgICAnZGVzY3JpcHRpb24nIDoge1xuICAgICAgICAgICAgICAnbG9uZyc6ICdEZXIgVGhlcm1vc3RhdHJlZ2xlciBkaWVzZXIgaXN0IGbDvHIgZGllIFJlZ2VsdW5nIGRlciBSYXVtdGVtcGVyYXR1ciB6dXN0w6RuZGlnLicsXG4gICAgICAgICAgICAgICdzaG9ydCc6ICdadXIgUmVnZWx1bmcgZGVyIFJhdW10ZW1wZXJhdHVyJ1xuXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnc2VyaWFsJzogJ1RSLTFBNDEtN0NCMi1GQjUxLUdIMUUtNzBPQScsXG4gICAgICAgICAgJ2xvY2F0aW9uJzoge1xuICAgICAgICAgICAgJ3Jvb20nOiByYXdSb29tWzBdLFxuICAgICAgICAgICAgJ2xvY2F0aW9uJzogJ0ZlbnN0ZXIgUmVjaHRzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ25hbWUnOiAnVGhlcm1vc3RhdHJlZ2xlcicsXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyA6IHtcbiAgICAgICAgICAgICdsb25nJzogJ0RlciBUaGVybW9zdGF0cmVnbGVyIGRpZXNlciBpc3QgZsO8ciBkaWUgUmVnZWx1bmcgZGVyIFJhdW10ZW1wZXJhdHVyIHp1c3TDpG5kaWcuJyxcbiAgICAgICAgICAgICdzaG9ydCc6ICdadXIgUmVnZWx1bmcgZGVyIFJhdW10ZW1wZXJhdHVyJ1xuXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnc2VyaWFsJzogJ1RSLTJBNDEtN0NCMi1GQjUxLUdIMUUtNzgxQicsXG4gICAgICAgICAgJ2xvY2F0aW9uJzoge1xuICAgICAgICAgICAgJ3Jvb20nOiByYXdSb29tWzBdLFxuICAgICAgICAgICAgJ2xvY2F0aW9uJzogJ0ZlbnN0ZXIgTGlua3MnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnYWN0aXZlJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICduYW1lJzogJ1RoZXJtb3N0YXRyZWdsZXInLFxuICAgICAgICAgICdkZXNjcmlwdGlvbicgOiB7XG4gICAgICAgICAgICAnbG9uZyc6ICdEZXIgVGhlcm1vc3RhdHJlZ2xlciBkaWVzZXIgaXN0IGbDvHIgZGllIFJlZ2VsdW5nIGRlciBSYXVtdGVtcGVyYXR1ciB6dXN0w6RuZGlnLicsXG4gICAgICAgICAgICAnc2hvcnQnOiAnWnVyIFJlZ2VsdW5nIGRlciBSYXVtdGVtcGVyYXR1cidcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3NlcmlhbCc6ICdUUi0zQTQxLTdDQjItRkI1MS1HSDFFLTc4MUMnLFxuICAgICAgICAgICdsb2NhdGlvbic6IHtcbiAgICAgICAgICAgICdyb29tJzogcmF3Um9vbVsxXSxcbiAgICAgICAgICAgICdsb2NhdGlvbic6ICdGZW5zdGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2FjdGl2ZSc6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdUaGVybW9zdGF0cmVnbGVyJyxcbiAgICAgICAgICAnZGVzY3JpcHRpb24nIDoge1xuICAgICAgICAgICAgJ2xvbmcnOiAnRGVyIFRoZXJtb3N0YXRyZWdsZXIgZGllc2VyIGlzdCBmw7xyIGRpZSBSZWdlbHVuZyBkZXIgUmF1bXRlbXBlcmF0dXIgenVzdMOkbmRpZy4nLFxuICAgICAgICAgICAgJ3Nob3J0JzogJ1p1ciBSZWdlbHVuZyBkZXIgUmF1bXRlbXBlcmF0dXInXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgICdzZXJpYWwnOiAnVFItNEE0MS03Q0IyLUZCNTEtR0gxRS03ODFEJyxcbiAgICAgICAgICAnbG9jYXRpb24nOiB7XG4gICAgICAgICAgICAncm9vbSc6IHJhd1Jvb21bMl0sXG4gICAgICAgICAgICAnbG9jYXRpb24nOiAnRmVuc3RlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgICdhY3RpdmUnOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ25hbWUnOiAnVGhlcm1vc3RhdHJlZ2xlcicsXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyA6IHtcbiAgICAgICAgICAgICdsb25nJzogJ0RlciBUaGVybW9zdGF0cmVnbGVyIGRpZXNlciBpc3QgZsO8ciBkaWUgUmVnZWx1bmcgZGVyIFJhdW10ZW1wZXJhdHVyIHp1c3TDpG5kaWcuJyxcbiAgICAgICAgICAgICdzaG9ydCc6ICdadXIgUmVnZWx1bmcgZGVyIFJhdW10ZW1wZXJhdHVyJ1xuXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnc2VyaWFsJzogJ1RSLTVBNDEtN0NCMi1GQjUxLUdIMUUtNzgxRScsXG4gICAgICAgICAgJ2xvY2F0aW9uJzoge1xuICAgICAgICAgICAgJ3Jvb20nOiByYXdSb29tWzNdLFxuICAgICAgICAgICAgJ2xvY2F0aW9uJzogJ1TDvHJlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2FjdGl2ZSc6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdUaGVybW9tZXRlcicsXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyA6IHtcbiAgICAgICAgICAgICdsb25nJzogJ01pc3N0IGRpZSBUZW1wZXJhdHVyLiBTb21pdCBsYXNzZW4gc2ljaCBkdXJjaCBzdGF0aXN0aXNjaGUgV2VydGUgUHJvZ25vc2VuIGJ6dy4gaGlzdG9yaXNjaGUgRGF0ZSBkYXJzdGVsbGVuLicsXG4gICAgICAgICAgICAnc2hvcnQnOiAnTWVzc3VuZyBkZXIgVGVtcGVyYXR1cidcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3NlcmlhbCc6ICdUSC02QTQxLTdDQjItRkI1MS1HSDFFLTc4MUYnLFxuICAgICAgICAgICdsb2NhdGlvbic6IHtcbiAgICAgICAgICAgICdyb29tJzogcmF3Um9vbVswXSxcbiAgICAgICAgICAgICdsb2NhdGlvbic6ICdUaXNjaCdcbiAgICAgICAgICB9LFxuICAgICAgICAgICdhY3RpdmUnOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ25hbWUnOiAnTGljaHNlbnNvcicsXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyA6IHtcbiAgICAgICAgICAgICdsb25nJzogJ01pc3N0IGRpZSBMZXVjaHRrcmFmdC4gU29taXQgbGFzc2VuIHNpY2ggZHVyY2ggc3RhdGlzdGlzY2hlIFdlcnRlIFByb2dub3NlbiBiencuIGhpc3RvcmlzY2hlIERhdGUgZGFyc3RlbGxlbi4nLFxuICAgICAgICAgICAgJ3Nob3J0JzogJ01lc3N1bmcgZGVyIExpY2hlaW5zdHJhaGx1bmcnXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgICdzZXJpYWwnOiAnTFMtN0E0MS03Q0IyLUZCNTEtR0gxRS03ODFHJyxcbiAgICAgICAgICAnbG9jYXRpb24nOiB7XG4gICAgICAgICAgICAncm9vbSc6IHJhd1Jvb21bMF0sXG4gICAgICAgICAgICAnbG9jYXRpb24nOiAnRWluZ2FuZ3NiZXJlaWNoJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2FjdGl2ZSc6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdXZWItQ2FtJyxcbiAgICAgICAgICAnZGVzY3JpcHRpb24nIDoge1xuICAgICAgICAgICAgJ2xvbmcnOiAnRGllIFdlYmNhbSBsw6Rzc3Qgc2ljaCBpbiAyIERpbWVudGlvbmVuIHNjaHdlbmtlbi4gUGVyaW9kaXNjaGUgQmlsZGVyIGxhc3NlbiBzaWNoIG5hY2hmb2xsemllaGVuIC4uIFNvbWl0IGzDpHNzdCBzaWNoIGltJyxcbiAgICAgICAgICAgICdzaG9ydCc6ICdTdGV1ZXJ1bmcgZGVyIFdlYkNhbSdcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3NlcmlhbCc6ICdXQy04QTQxLTdDQjItRkI1MS1HSDFFLTc4MUgnLFxuICAgICAgICAgICdsb2NhdGlvbic6IHtcbiAgICAgICAgICAgICdyb29tJzogcmF3Um9vbVswXSxcbiAgICAgICAgICAgICdsb2NhdGlvbic6ICdFaW5nYW5nc2JlcmVpY2gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnYWN0aXZlJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICduYW1lJzogJ1VsdHJhc2NoYWxsLVNlbnNvcicsXG4gICAgICAgICAgJ2Rlc2NyaXB0aW9uJyA6IHtcbiAgICAgICAgICAgICdsb25nJzogJ0VzIGxhc3NlbiBzaWNoIE1lc3NlbiBtaXQgd2VsY2hlIGRpc3Rhbnogc2ljaCBPYmpla3RlIHZvciBkZW0gU2Vuc29yIGJld2VnZW4uJyxcbiAgICAgICAgICAgICdzaG9ydCc6ICdNaXNzdCBEaXN0YW56IHp1IEhpbmRlcm5pc3NlbidcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3NlcmlhbCc6ICdVUy05QTQxLTdDQjItRkI1MS1HSDFFLTc4MUknLFxuICAgICAgICAgICdsb2NhdGlvbic6IHtcbiAgICAgICAgICAgICdyb29tJzogcmF3Um9vbVswXSxcbiAgICAgICAgICAgICdsb2NhdGlvbic6ICdNaXR0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgICdhY3RpdmUnOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICBdO1xuXG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSByYXdDb21wb25lbnQ7XG4gICAgICB0aGlzLnJvb21zID0gcmF3Um9vbTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luZGV4Lm1vZHVsZS50c1wiIC8+XG5cbm1vZHVsZSBteUlvVGFwcCB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3Ige1xuICAgIHB1YmxpYyBhcGlIb3N0OiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcblxuICAgIHByaXZhdGUgJGxvZzogbmcuSUxvZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSAkaHR0cDogbmcuSUh0dHBTZXJ2aWNlO1xuXG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRsb2c6IG5nLklMb2dTZXJ2aWNlLCAkaHR0cDogbmcuSUh0dHBTZXJ2aWNlKSB7XG4gICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIH1cblxuICAgIGdldENvbnRyaWJ1dG9ycyhsaW1pdDogbnVtYmVyID0gMzApIHtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9pbmRleC5tb2R1bGUudHNcIiAvPlxuXG5tb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBleHBvcnQgZnVuY3Rpb24gYmFzZUNvbXBvbmVudCgpOiBuZy5JRGlyZWN0aXZlIHtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgY29tcG9uZW50OiAnPSdcbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IGFueSwgZWxlbTogYW55LCBhdHRyOiBhbnkpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKCAnbGluazonICsgYXR0ci5jb21wb25lbnQgKTtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2lvdC9iYXNpYy9iYXNlY29tcC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6IEJhc2VDb21wb25lbnRDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG5cbiAgfVxuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY2xhc3MgQmFzZUNvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHB1YmxpYyBjb21wb25lbnQ6IElDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vY29uc29sZS5sb2coICdjb25zdHI6JyArIHRoaXMuY29tcG9uZW50ICk7XG4gICAgfVxuXG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8udG1wL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJpbmRleC5yb3V0ZS50c1wiIC8+XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJpbmRleC5jb25maWcudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImluZGV4LnJ1bi50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwibWFpbi9tYWluLmNvbnRyb2xsZXIudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInN0YXJ0L3N0YXJ0LmNvbnRyb2xsZXIudHNcIiAvPlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9hcHAvY29tcG9uZW50cy93ZWJTZXJ2aWNlL3dlYlNlcnZpY2VJb1Quc2VydmljZS50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50c1wiIC8+XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9hcHAvY29tcG9uZW50cy9pb3QvYmFzaWMvYmFzZUNvbXBvbmVudC5kaXJlY3RpdmUudHNcIiAvPlxuXG5cbmRlY2xhcmUgdmFyIG1hbGFya2V5OiBhbnk7XG5kZWNsYXJlIHZhciB0b2FzdHI6IFRvYXN0cjtcbmRlY2xhcmUgdmFyIG1vbWVudDogbW9tZW50Lk1vbWVudFN0YXRpYztcblxubW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdteUlvVGFwcCcsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAncmVzdGFuZ3VsYXInLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd4ZWRpdGFibGUnXSlcblxuICAgIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgICAuY29uc3RhbnQoJ3RvYXN0cicsIHRvYXN0cilcbiAgICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcblxuICAgIC5jb25maWcoQ29uZmlnKVxuICAgIC5jb25maWcoUm91dGVyQ29uZmlnKVxuXG4gICAgLnJ1bihSdW5CbG9jaylcblxuICAgIC5zZXJ2aWNlICAgKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yKVxuICAgIC5zZXJ2aWNlICAgKCd3ZWJEZXZUZWMnLCAgICAgICAgIFdlYkRldlRlY1NlcnZpY2UpXG4gICAgLnNlcnZpY2UgICAoJ0lvVFNlcnZpY2UnLCAgICAgICAgSW9UU2VydmljZSlcblxuICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsICAgIE1haW5Db250cm9sbGVyKVxuICAgIC5jb250cm9sbGVyKCdTdGFydENvbnRyb2xsZXInLCAgIFN0YXJ0Q29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUgKCdhY21lTmF2YmFyJywgICAgICAgIGFjbWVOYXZiYXIpXG4gICAgLmRpcmVjdGl2ZSAoJ2FjbWVNYWxhcmtleScsICAgICAgYWNtZU1hbGFya2V5KVxuICAgIC5kaXJlY3RpdmUgKCdiYXNlQ29tcG9uZW50JywgICAgIGJhc2VDb21wb25lbnQpXG4gIDtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9pbmRleC5tb2R1bGUudHNcIiAvPlxuXG5tb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZXhwb3J0IGNsYXNzIFJvb21Db250cm9sbGVyIHtcbiAgICBwdWJsaWMgY29tcG9uZW50czogSUNvbXBvbmVudFtdO1xuICAgIHB1YmxpYyBpb1RTZXJ2aWNlOiBJb1RTZXJ2aWNlO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IgKGlvVFNlcnZpY2U6IElvVFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xuICAgICAgdGhpcy5pb1RTZXJ2aWNlID0gaW9UU2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0V2ViRGV2VGVjKCkge1xuICAgICAgdGhpcy5jb21wb25lbnRzID0gdGhpcy5pb1RTZXJ2aWNlLmdldENvbXBvbmVudHMoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9pbmRleC5tb2R1bGUudHNcIiAvPlxuXG5tb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBleHBvcnQgZnVuY3Rpb24gcm9vbURpcmVjdGl2ZSgpOiBuZy5JRGlyZWN0aXZlIHtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgbmFtZTogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9pb3Qvcm9vbS9yb29tLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogUm9vbURpcmVjdGl2ZUNvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6ICdyZCcsXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gICAgfTtcblxuICB9XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjbGFzcyBSb29tRGlyZWN0aXZlQ29udHJvbGxlciB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5uYW1lID0gJ3Rlc3QxMjMnO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9