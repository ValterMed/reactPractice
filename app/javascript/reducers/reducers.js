import {combineReducers} from 'redux';
import articlesReducer from './articles';

const reducers = combineReducers({
  articlesReducer: articlesReducer
});

export default reducers;