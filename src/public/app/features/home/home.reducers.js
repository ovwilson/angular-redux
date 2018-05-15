import * as fromActions from './home.actions';

const initialState = {
  models: [
    { title: 'Test', category: 'test' },
    { title: 'Testq', category: 'test' }
  ]
};

export const homes = (state = initialState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case fromActions.HOMES_GET:
      return {
        models: state.models
      };
    case fromActions.HOMES_UPDATE:
      return {
        models: [...state.models,action.payload]
      };
    default:
      return state;
  }
};
