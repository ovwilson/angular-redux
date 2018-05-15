import template from './home.html';

class HomeController {
    constructor() {
    
        this.title = 'Home Sweet Home';
        this.criteria = [
            { title: 'Test', category: 'test' },
            { title: 'Testq', category: 'test' }
        ];
    }
    $onInit(){
        console.log('Home Controller');
    }
}

export const homeComponent = {
    template: template,
    controller: HomeController,
    constrollerAs:'homeCtrl'
};