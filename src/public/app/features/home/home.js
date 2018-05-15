import angular from 'angular';
import { homeComponent } from './home.component';
import { HomeActions } from './home.actions';

homeComponent.$inject = ['$ngRedux','HomeActions'];

const homeModule = angular
  .module('home', [])
  .factory('HomeActions', HomeActions)
  .component('home', homeComponent);

export default homeModule;
