import angular from 'angular';
import uirouter from 'angular-ui-router';
//import routing from './app.config';

import { AppComponent } from './app.component';

const MODULE_NAME = 'appModule';


export default angular.module(MODULE_NAME, [])
    .component('appComponent', AppComponent);
    //.controller('AppCtrl', AppCtrl);
//.config(routing);
