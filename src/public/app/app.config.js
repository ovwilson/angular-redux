import uirouter from 'angular-ui-router';

routing.$inject = ['$stateProvider','$locationProvider'];

export default function routing($stateProvider){
    const rootState = {
        name:'home',
        url: '/home',
        template: '<h3>ROOT!</h3>'
      };

      const aboutState = {
        name:'about',
        url: '/about',
        template: '<h3>About!</h3>'
      };
     // $stateProvider.state(rootState);
      $stateProvider.state(aboutState);

}
