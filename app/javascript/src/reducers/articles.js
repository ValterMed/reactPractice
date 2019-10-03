import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  LOAD_ARTICLES_SUCCESS
} from '../constants/actionTypes';

function articlesReducer(state = [], action) {
  switch(action.type){
    case ADD_ARTICLE:
      console.log("llegamos a la funcion switch")
      return [
        ...state,
        {id: 'asdf', title: action.title, content: action.content}
      ];
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

    case LOAD_ARTICLES_SUCCESS:
      return action.articles
    
    default:
      return state
  }
}
export default articlesReducer;
