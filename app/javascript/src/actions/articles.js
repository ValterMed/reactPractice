import articleApi from '../api/articleApi';
import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_SUCCESS,
  DELETE_ARTICLE_SUCCESS

} from '../constants/actionTypes';

export function addArticle(title, content) {
  console.log("estoy en funcion addArticle")
  return {
    type: ADD_ARTICLE,
    title: title,
    content: content
  };
}

export function removeArticle(id) {
  return {
    type: REMOVE_ARTICLE,
    id: id
  };
}

export function allArticles(data) {
  return {
    type: ALL_ARTICLES,
    data: data
  };
}

export function editArticle(id) {
  return {
    type: EDIT_ARTICLE,
    id: id
  };
}

export function infoArticle(id) {
  return {
    type: INFO_ARTICLE,
    id: id
  };
}

export function loadArticles() {
  console.log("estamos en loadArticles invocado por ArticleList")
  return function(dispatch) {
    return articleApi.getAllArticles().then(articles => {
      dispatch(loadArticlesSuccess(articles));
    }).catch(error => {
      throw(error);
    });
  };
}

function loadArticlesSuccess(articles) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    articles
  };
}

export function loadArticle(id) {
  console.log("LLEGAMOS A loadArticle invocado desde ArticleInfo")
  return function(dispatch) {
    return articleApi.getArticle(id).then(article => {
      dispatch(loadArticleSuccess(article));
    }).catch(error => {
      throw(error);
    });
  };
}

function loadArticleSuccess(article) {
  return {
    type: LOAD_ARTICLE_SUCCESS,
    article
  };
}


export function deleteOneArticle(props) {
  console.log("LLEGAMOS A deleteOneArticle invocado desde ArticleInfo")
  return function(dispatch) {
    return articleApi.deleteArticle(props).then(() => {
      dispatch(deleteSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

function deleteSuccess() {
  return {
    type: DELETE_ARTICLE_SUCCESS
  };
}