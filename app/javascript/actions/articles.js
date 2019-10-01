import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES
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