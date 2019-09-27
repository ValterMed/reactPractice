import articles from './articles';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  articles: articles
});

export default reducers;