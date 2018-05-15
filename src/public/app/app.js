import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

import featuresModule from './features/features';
import { appComponent } from './app.component';

angular
  .module('app', [uirouter, featuresModule.name])
  .component('app', appComponent)
  .config(routing);
