class articleApi {
  static getAllArticles() {
    return fetch('api/articles')
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default articleApi;