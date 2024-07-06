import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  // Add your reducers here
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
