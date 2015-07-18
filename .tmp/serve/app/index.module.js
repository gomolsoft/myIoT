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
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });
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

/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="index.route.ts" />
/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/malarkey/malarkey.directive.ts" />
/// <reference path="../app/components/webDevTec/webDevTec.service.ts" />
/// <reference path="../app/components/githubContributor/githubContributor.service.ts" />
var myIoTapp;
(function (myIoTapp) {
    'use strict';
    angular.module('myIoTapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap']).constant('malarkey', malarkey).constant('toastr', toastr).constant('moment', moment).config(myIoTapp.Config).config(myIoTapp.RouterConfig).run(myIoTapp.RunBlock).service('githubContributor', myIoTapp.GithubContributor).service('webDevTec', myIoTapp.WebDevTecService).controller('MainController', myIoTapp.MainController).directive('acmeNavbar', myIoTapp.acmeNavbar).directive('acmeMalarkey', myIoTapp.acmeMalarkey);
})(myIoTapp || (myIoTapp = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbmZpZy50cyIsImluZGV4LnJvdXRlLnRzIiwiaW5kZXgucnVuLnRzIiwibWFpbi9tYWluLmNvbnRyb2xsZXIudHMiLCJjb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLnRzIiwiY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUudHMiLCJjb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS50cyIsImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50cyIsImluZGV4Lm1vZHVsZS50cyJdLCJuYW1lcyI6WyJteUlvVGFwcCIsIm15SW9UYXBwLkNvbmZpZyIsIm15SW9UYXBwLkNvbmZpZy5jb25zdHJ1Y3RvciIsIm15SW9UYXBwLlJvdXRlckNvbmZpZyIsIm15SW9UYXBwLlJvdXRlckNvbmZpZy5jb25zdHJ1Y3RvciIsIm15SW9UYXBwLlJ1bkJsb2NrIiwibXlJb1RhcHAuUnVuQmxvY2suY29uc3RydWN0b3IiLCJteUlvVGFwcC5NYWluQ29udHJvbGxlciIsIm15SW9UYXBwLk1haW5Db250cm9sbGVyLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuTWFpbkNvbnRyb2xsZXIuYWN0aXZhdGUiLCJteUlvVGFwcC5NYWluQ29udHJvbGxlci5zaG93VG9hc3RyIiwibXlJb1RhcHAuTWFpbkNvbnRyb2xsZXIuZ2V0V2ViRGV2VGVjIiwibXlJb1RhcHAuYWNtZU5hdmJhciIsIm15SW9UYXBwLk5hdmJhckNvbnRyb2xsZXIiLCJteUlvVGFwcC5OYXZiYXJDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwibXlJb1RhcHAuYWNtZU1hbGFya2V5IiwibXlJb1RhcHAubGlua0Z1bmMiLCJteUlvVGFwcC5NYWxhcmtleUNvbnRyb2xsZXIiLCJteUlvVGFwcC5NYWxhcmtleUNvbnRyb2xsZXIuY29uc3RydWN0b3IiLCJteUlvVGFwcC5NYWxhcmtleUNvbnRyb2xsZXIuYWN0aXZhdGUiLCJteUlvVGFwcC5NYWxhcmtleUNvbnRyb2xsZXIuZ2V0Q29udHJpYnV0b3JzIiwibXlJb1RhcHAuV2ViRGV2VGVjU2VydmljZSIsIm15SW9UYXBwLldlYkRldlRlY1NlcnZpY2UuY29uc3RydWN0b3IiLCJteUlvVGFwcC5XZWJEZXZUZWNTZXJ2aWNlLnRlYyIsIm15SW9UYXBwLkdpdGh1YkNvbnRyaWJ1dG9yIiwibXlJb1RhcHAuR2l0aHViQ29udHJpYnV0b3IuY29uc3RydWN0b3IiLCJteUlvVGFwcC5HaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sUUFBUSxDQWdCZDtBQWhCRCxXQUFPLFFBQVEsRUFBQyxDQUFDO0lBQ2ZBLFlBQVlBLENBQUNBO0lBRWJBLElBQWFBLE1BQU1BO1FBQ2pCQyxnQkFBZ0JBO1FBQ2hCQSxTQUZXQSxNQUFNQSxDQUVMQSxZQUE2QkEsRUFBRUEsTUFBY0E7WUFDdkRDLEFBQ0FBLGFBRGFBO1lBQ2JBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2hDQSxBQUNBQSw4QkFEOEJBO1lBQzlCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUM5QkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsR0FBR0EsaUJBQWlCQSxDQUFDQTtZQUNqREEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUN4Q0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDcENBLENBQUNBO1FBRUhELGFBQUNBO0lBQURBLENBWkFELEFBWUNDLElBQUFEO0lBWllBLGVBQU1BLEdBQU5BLE1BWVpBLENBQUFBO0FBQ0hBLENBQUNBLEVBaEJNLFFBQVEsS0FBUixRQUFRLFFBZ0JkOztBQ2hCRCxJQUFPLFFBQVEsQ0FrQmQ7QUFsQkQsV0FBTyxRQUFRLEVBQUMsQ0FB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Q0FDeEhBLFFBQVFBLENBQUNBLFVBQVVBLEVBQUVBLFFBQVFBLENBQUNBLENBQzlCQSxRQUFRQSxDQUFDQSxRQUFRQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUMxQkEsUUFBUUEsQ0FBQ0EsUUFBUUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FDMUJBLE1BQU1BLENBQUNBLGVBQU1BLENBQUNBLENBRWRBLE1BQU1BLENBQUNBLHFCQUFZQSxDQUFDQSxDQUVwQkEsR0FBR0EsQ0FBQ0EsaUJBQVFBLENBQUNBLENBQ2JBLE9BQU9BLENBQUNBLG1CQUFtQkEsRUFBRUEsMEJBQWlCQSxDQUFDQSxDQUMvQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsRUFBRUEseUJBQWdCQSxDQUFDQSxDQUN0Q0EsVUFBVUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSx1QkFBY0EsQ0FBQ0EsQ0FDNUNBLFNBQVNBLENBQUNBLFlBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQSxDQUNuQ0EsU0FBU0EsQ0FBQ0EsY0FBY0EsRUFBRUEscUJBQVlBLENBQUNBLENBQUNBO0FBQzdDQSxDQUFDQSxFQWpCTSxRQUFRLEtBQVIsUUFBUSxRQWlCZCIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yKCRsb2dQcm92aWRlcjogbmcuSUxvZ1Byb3ZpZGVyLCB0b2FzdHI6IFRvYXN0cikge1xuICAgICAgLy8gZW5hYmxlIGxvZ1xuICAgICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcbiAgICAgIC8vIHNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgICAgdG9hc3RyLm9wdGlvbnMudGltZU91dCA9IDMwMDA7XG4gICAgICB0b2FzdHIub3B0aW9ucy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gICAgICB0b2FzdHIub3B0aW9ucy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gICAgICB0b2FzdHIub3B0aW9ucy5wcm9ncmVzc0JhciA9IHRydWU7XG4gICAgfVxuXG4gIH1cbn1cbiIsIm1vZHVsZSBteUlvVGFwcCB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBleHBvcnQgY2xhc3MgUm91dGVyQ29uZmlnIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXI6IG5nLnVpLklVcmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgICAgIH0pO1xuXG4gICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfVxuXG4gIH1cbn1cbiIsIm1vZHVsZSBteUlvVGFwcCB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBleHBvcnQgY2xhc3MgUnVuQmxvY2sge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvcigkbG9nOiBuZy5JTG9nU2VydmljZSkge1xuICAgICAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG4gICAgfVxuXG4gIH1cbn1cbiIsIm1vZHVsZSBteUlvVGFwcCB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBleHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xuICAgIHB1YmxpYyBhd2Vzb21lVGhpbmdzOiBJVGVjVGhpbmdbXTtcbiAgICBwdWJsaWMgd2ViRGV2VGVjOiBXZWJEZXZUZWNTZXJ2aWNlO1xuICAgIHB1YmxpYyBjbGFzc0FuaW1hdGlvbjogc3RyaW5nO1xuXG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0OiBuZy5JVGltZW91dFNlcnZpY2UsIHdlYkRldlRlYzogV2ViRGV2VGVjU2VydmljZSwgdG9hc3RyOiBUb2FzdHIpIHtcbiAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IG5ldyBBcnJheSgpO1xuICAgICAgdGhpcy53ZWJEZXZUZWMgPSB3ZWJEZXZUZWM7XG4gICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG5cbiAgICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCR0aW1lb3V0OiBuZy5JVGltZW91dFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKCk7XG5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XG4gICAgICB9LCA0MDAwKTtcbiAgICB9XG5cbiAgICBzaG93VG9hc3RyKCkge1xuICAgICAgdG9hc3RyLmluZm8oJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+Jyk7XG4gICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgfVxuXG4gICAgZ2V0V2ViRGV2VGVjKCkge1xuICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gdGhpcy53ZWJEZXZUZWMudGVjO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGFjbWVOYXZiYXIoKTogbmcuSURpcmVjdGl2ZSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgICB9O1xuXG4gIH1cblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICAgIHB1YmxpYyByZWxhdGl2ZURhdGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG1vbWVudDogbW9tZW50Lk1vbWVudFN0YXRpYykge1xuICAgICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQoMTQzNzIxNzY5ODE1MSkuZnJvbU5vdygpO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGludGVyZmFjZSBJUHJvamVjdHNTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XG4gICAgZXh0cmFWYWx1ZXM6IGFueVtdO1xuICB9XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBleHBvcnQgZnVuY3Rpb24gYWNtZU1hbGFya2V5KG1hbGFya2V5OiBhbnkpOiBuZy5JRGlyZWN0aXZlIHtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICAgIGxpbms6IGxpbmtGdW5jLFxuICAgICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGU6IElQcm9qZWN0c1Njb3BlLCBlbDogSlF1ZXJ5LCBhdHRyOiBhbnksIHZtOiBNYWxhcmtleUNvbnRyb2xsZXIpIHtcbiAgICB2YXIgd2F0Y2hlcjtcbiAgICB2YXIgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsIGZ1bmN0aW9uKGN1cnJlbnQ6IElDb250cmlidXRvciwgb3JpZ2luYWw6IElDb250cmlidXRvcikge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgZnVuY3Rpb24oY29udHJpYnV0b3I6IElDb250cmlidXRvcikge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGludGVyZmFjZSBJQ29udHJpYnV0b3Ige1xuICAgIGlkOiBudW1iZXI7XG4gICAgbG9naW46IHN0cmluZztcbiAgfVxuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgY29udHJpYnV0b3JzOiBhbnlbXTtcblxuICAgIHByaXZhdGUgJGxvZzogbmcuSUxvZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBnaXRodWJDb250cmlidXRvcjogR2l0aHViQ29udHJpYnV0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcigkbG9nOiBuZy5JTG9nU2VydmljZSwgZ2l0aHViQ29udHJpYnV0b3I6IEdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgdGhpcy5naXRodWJDb250cmlidXRvciA9IGdpdGh1YkNvbnRyaWJ1dG9yO1xuXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250cmlidXRvcnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5naXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApXG4gICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIiwibW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRlY1RoaW5nIHtcbiAgICByYW5rOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGxvZ286IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgICBwdWJsaWMgZGF0YTogSVRlY1RoaW5nW107XG5cbiAgICBwdWJsaWMgZ2V0IHRlYygpOiBJVGVjVGhpbmdbXSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cblxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICB2YXIgcmF3RGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBjb21wb25lbnRzIHdyaXR0ZW4gaW4gcHVyZSBBbmd1bGFySlMgYnkgdGhlIEFuZ3VsYXJVSSBUZWFtLicsXG4gICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1R5cGVTY3JpcHQnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUeXBlU2NyaXB0LCBhIHR5cGVkIHN1cGVyc2V0IG9mIEphdmFTY3JpcHQgdGhhdCBjb21waWxlcyB0byBwbGFpbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ3R5cGVzY3JpcHQucG5nJ1xuICAgICAgfVxuICAgIF07XG5cbiAgICAgIHRoaXMuZGF0YSA9IHJhd0RhdGEubWFwKChhd2Vzb21lVGhpbmc6IElUZWNUaGluZykgPT4ge1xuICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiBhd2Vzb21lVGhpbmc7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIiwibW9kdWxlIG15SW9UYXBwIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvciB7XG4gICAgcHVibGljIGFwaUhvc3Q6IHN0cmluZyA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuXG4gICAgcHJpdmF0ZSAkbG9nOiBuZy5JTG9nU2VydmljZTtcbiAgICBwcml2YXRlICRodHRwOiBuZy5JSHR0cFNlcnZpY2U7XG5cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IoJGxvZzogbmcuSUxvZ1NlcnZpY2UsICRodHRwOiBuZy5JSHR0cFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgfVxuXG4gICAgZ2V0Q29udHJpYnV0b3JzKGxpbWl0OiBudW1iZXIgPSAzMCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy90c2QuZC50c1wiIC8+XG5cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImluZGV4LnJvdXRlLnRzXCIgLz5cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImluZGV4LmNvbmZpZy50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiaW5kZXgucnVuLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJtYWluL21haW4uY29udHJvbGxlci50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLnRzXCIgLz5cblxuZGVjbGFyZSB2YXIgbWFsYXJrZXk6IGFueTtcbmRlY2xhcmUgdmFyIHRvYXN0cjogVG9hc3RyO1xuZGVjbGFyZSB2YXIgbW9tZW50OiBtb21lbnQuTW9tZW50U3RhdGljO1xuXG5tb2R1bGUgbXlJb1RhcHAge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ215SW9UYXBwJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICdyZXN0YW5ndWxhcicsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJ10pXG4gICAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAgIC5jb25zdGFudCgndG9hc3RyJywgdG9hc3RyKVxuICAgIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxuICAgIC5jb25maWcoQ29uZmlnKVxuXG4gICAgLmNvbmZpZyhSb3V0ZXJDb25maWcpXG5cbiAgICAucnVuKFJ1bkJsb2NrKVxuICAgIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yKVxuICAgIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxuICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxuICAgIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBhY21lTmF2YmFyKVxuICAgIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIGFjbWVNYWxhcmtleSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=