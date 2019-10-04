import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_SUCCESS
} from '../constants/actionTypes';

function articlesReducer(state = [], action) {
  console.log("llegamos a la funcion switch de /reducers/articles");
  switch(action.type){
    case ADD_ARTICLE:
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

    case LOAD_ARTICLE_SUCCESS:
      return [action.article];
    
    default:
      console.log("Se devuelve el valor por default en /reducers/articles");
      console.log(state)
      return state
  }
}
export default articlesReducer;
