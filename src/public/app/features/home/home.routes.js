import uirouter from 'angular-ui-router';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./home.html'),
            controller: 'HomeController'
        })
}

