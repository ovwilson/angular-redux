import uirouter from 'angular-ui-router';
import { homeComponent } from './features/home/home.component';
import { aboutComponent } from './features/about/about.component';

routing.$inject = ['$stateProvider', '$locationProvider'];

export default function routing($stateProvider) {

  const rootState = {
    url: '/home',
    component: 'home'
  };

  const aboutState = {
    url: '/about',
   component:'about'
  };
  
  $stateProvider.state('home',rootState);
  $stateProvider.state('about',aboutState);
}
