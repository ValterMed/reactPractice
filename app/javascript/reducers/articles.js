import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES
} from '../constants/actionTypes';

function articlesReducer(state = [], action) {
  switch(action.type){
    case ADD_ARTICLE:
      return {
        
    };
    case EDIT_ARTICLE:
      return {
        
    };
    case INFO_ARTICLE:
      return {
            
    };
    case REMOVE_ARTICLE:
      return {
              
    };
    case ALL_ARTICLES:
      return {
                
    };
    
    default:
      return {}
  }
}
export default articlesReducer;
