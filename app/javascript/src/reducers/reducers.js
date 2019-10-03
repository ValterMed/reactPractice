import {combineReducers} from 'redux';
import articlesReducer from './articles';

const reducers = combineReducers({
  articles: articlesReducer
});

export default reducers;