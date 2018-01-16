import angular from 'angular';

import routing from './home.routes';
import { HomeComponent } from './home.component';

export default angular.module('home', [])
    .config(routing)
    .component('homeComponent', HomeComponent);