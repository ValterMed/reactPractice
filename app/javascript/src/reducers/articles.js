import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_SUCCESS,
  PUSH_ARTICLE_SUCCESS
} from '../constants/actionTypes';

const articlesState = {
  articles: [],
  currentArticle: {}
};

function articlesReducer(state = articlesState, action) {
  console.log("llegamos a la funcion switch de /reducers/articles");
  switch(action.type){
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles,
          {title: action.title, content: action.content}
        ]
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

    case LOAD_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles
      };

    case LOAD_ARTICLE_SUCCESS:
      console.log("devuelvo un articulo")
      return {
        ...state,
        currentArticle: action.article
      };

    case PUSH_ARTICLE_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    
    default:
      console.log("Se devuelve el valor por default en /reducers/articles");
      console.log(state)
      return state
  }
}
export default articlesReducer;
