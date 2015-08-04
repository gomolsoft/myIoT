/**
 * Created by sandrobarone on 28.07.15.
 */
module myIoTapp {
    'use strict';

    export class ICredentials {
        user: string
        password: string
    }

    export class LoginController {
        private $log:ng.ILogService;
        private $http:ng.IHttpService;
        private $rootScope:ng.IRootScopeService
        private $scope: ng.IScope
        private username: string
        private password: string
        private restangular:restangular.IService
        private $location: ng.ILocationService

        private authenticated: boolean

        private credentials: ICredentials;

        //static $inject = ['Restangular'];

        /** @ngInject */
        constructor($rootScope: ng.IRootScopeService, $scope: ng.IScope, $http: ng.IHttpService, Restangular:restangular.IService, $location: ng.ILocationService) {
            this.$scope = $scope;
            this.$http = $http;
            this.restangular = Restangular;
            this.$location = $location;

            console.log($scope);
            console.log($http);
            console.log($location)
        }

        public dummyTest() {
            this.restangular.one('device/devices').get().then( (data) => {
                this.authenticated = true;
                console.log("suff: OK");

                return true;
            },  () => {
                this.authenticated = false;
                console.error("Stuff: FALSE");

                return false;
            });

        }

        public login() {
            this.restangular.setDefaultHeaders({
                'X-Auth-Username': this.username,
                'X-Auth-Password': this.password,
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            });

            this.credentials = new ICredentials();
            this.credentials.user = 'u'
            this.credentials.password ='p'

            this.restangular.one('').post('authenticate').then( (data) => {
                this.authenticated = true;
                console.log("1autho: TRUE");
                this.restangular.setDefaultHeaders({
                    'X-Auth-Token': data.token,
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                });

                return true;
            },  () => {
                this.authenticated = false;
                console.error("Authorization Fails. Username ond/or Password are wrong.");

                return false;
            });
        }
    }

}