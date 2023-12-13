import { legacy_createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './combinereducer';


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;