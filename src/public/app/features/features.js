import angular from 'angular';
import homeModule from './home/home';
import aboutModule from './about/about';
import navbarModule from './navbar/navbar';

const featuresModule = angular.module('components',[
    homeModule.name, aboutModule.name, navbarModule.name]);

export default featuresModule;

