import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import createReducer from './reducers';

const reducers = createReducer();
const store = createStore(reducers,  {}, applyMiddleware(reduxThunk));

export default store;