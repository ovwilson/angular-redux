import template from './app.html';

class AppController {
  constructor() {
    'ngInject';
    this.title = 'Pop Criteria';
  }
  $onInit(){
    console.log("INIT....");
  }
  $onDestroy(){

  }
}

export const appComponent = {
  template: template,
  controller: AppController
};

