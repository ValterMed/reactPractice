import articleApi from '../api/articleApi';

function loadArticlesSuccess(articles) {
  return {
    type: 'LOAD_ARTICLES_SUCCESS',
    articles
  };
}

export function loadArticles() {
  return function(dispatch) {
    return articleApi.getAllArticles().then(articles => {
      dispatch(loadArticlesSuccess(articles));
    }).catch(error => {
      throw(error);
    });
  };
}
