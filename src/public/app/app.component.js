class AppController {
    constructor(){
        this.title = 'Pop Criteria';
    }
}


export const AppComponent =  {
    template: require('./app.html'),
    controller: AppController
}
