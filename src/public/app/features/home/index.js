import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import { HomeComponent } from './home.component';

export default angular.module('home', [uirouter])
    .config(routing)
    .component('homeComponent', HomeComponent);