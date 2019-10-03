/*
import { createStore } from 'redux';
import reducers from '../reducers/reducers';

//const initialState = {}

export default createStore(reducers);
*/

import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';

export default createStore(reducers, applyMiddleware(thunk) );