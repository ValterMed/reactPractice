import {
  ADD_ARTICLE,
  REMOVE_ARTICLE
} from '../constants/actionTypes';

function articles(state = [], action) {
  switch(action.type){
    case ADD_ARTICLE:
      return {
        
      };
    case REMOVE_ARTICLE:
      return {
        
      };
    default:
      return {

      };
  }
}

export default articles;