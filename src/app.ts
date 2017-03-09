import * as angular from 'angular'
import * as angularUi from 'angular-ui-router';

import { HomeModuleName } from './home/module';
import { ServicesModuleName } from './services/module';

var homeTemplate = require('./home/home.html');

angular.module('app', [HomeModuleName, ServicesModuleName, <any>angularUi])
  .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
   }])
   .config(['$stateProvider', function($stateProvider: ng.ui.IStateProvider) {
       $stateProvider
            .state('home', {
                url: '/home',
                template: homeTemplate,
                controller: 'home-controller',
                controllerAs: 'home'
            });
    }]);
