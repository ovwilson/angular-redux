class HomeController {
    constructor() {
        this.title = 'POP criteria';
        this.criteria = [
            { title: 'Test', category: 'test' },
            { title: 'Testq', category: 'test' }
        ]
    }
}


export const HomeComponent = {
    templete: require('./home.html'),
    controller: HomeComponent
}


