import template from './about.html';

class AboutController {
    constructor() {
        this.title = 'About Us';
    }
    $onInit(){
        console.log('About Controller');
    }
}

export const aboutComponent = {
    template: template,
    controller: AboutController
};