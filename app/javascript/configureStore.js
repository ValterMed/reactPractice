import { createStore } from 'redux';
import articles from './reducers/reducers';

//const initialState = {}

export default createStore(articles);
