import template from './navbar.html';

class Controller {
    constructor() {}
    $onInit(){
        console.log('Navbar Controller');
    }
}

export const navbarComponent = {
    template: template,
    controller: Controller
};