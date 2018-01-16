
 //.component('appComponent', {
//    template: require('./app.html'),
//    controller: function AppCController() {
//        this.user = 'Hello World!';
//    }

class AppController {
    constructor(){
        this.user = 'Hello World!';
    }
}


export const AppComponent =  {
    template: require('./app.html'),
    controller: AppController
    //,
    //controllerAs: 'AppCtrl'
}
