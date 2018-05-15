import angular from 'angular';
import uirouter from 'angular-ui-router';
import config from './app.config';

import featuresModule from './features/features';
import { appComponent } from './app.component';

import ngRedux from 'ng-redux';

import { homes } from './features/home/home.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({homes});

const reduxConfig = $ngReduxProvider => {
  $ngReduxProvider.createStoreWith(rootReducer, []);
};

reduxConfig.$inject = ['$ngReduxProvider'];

angular
  .module('app', [uirouter, ngRedux, featuresModule.name])
  .component('app', appComponent)
  .config(config)
  .config(reduxConfig);
