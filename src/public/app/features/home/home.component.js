import template from './home.html';
import { HomeActions } from './home.actions';

class HomeController {
  constructor($ngRedux, HomeActions) {
    this.title = 'Home Sweet Home';
    this.HomeActions = HomeActions;
    this.store = $ngRedux;
  }
  $onInit() {
    console.log('Home Actions', this.HomeActions);
    this.store.subscribe(() => {
        this.criteria = this.store.getState().homes;
    });
    this.store.dispatch(this.HomeActions.getHomes());
  }

  updateCriteria() {
    this.store.dispatch(this.HomeActions.updateHome({title:'Tooo'}));
  }
}

export const homeComponent = {
  template: template,
  controller: HomeController
};
