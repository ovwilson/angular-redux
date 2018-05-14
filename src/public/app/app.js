import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import { home } from './features/home/index';

import { AppComponent } from './app.component';

const MODULE_NAME = 'app';

export default angular.module(MODULE_NAME, [uirouter])
    //.component('appComponent', AppComponent)
    .config(routing);
