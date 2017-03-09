import * as angular from 'angular';

import { RandomNameService } from './randomName.service';

var serviceModule = angular.module('app.services', [])
    .service('randomName-service', RandomNameService);

export let ServicesModuleName = serviceModule.name;