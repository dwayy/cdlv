import * as angular from 'angular';

import { HomeController } from './home.controller';

var homeModule = angular.module('app.home', [])
    .controller('home-controller', HomeController);

export let HomeModuleName = homeModule.name;
