class articleApi {
  static getAllArticles() {
    return fetch('api/articles')
      .then(response => {
        return response.json();
      });
  }
  static getArticle(id) {
    return fetch(`api/articles/${id}`)
      .then(response => {
        return response.json();
      });
  }
  static deleteArticle(props) {
    return fetch(`api/articles/${props.match.params.id}`, {
      method: 'DELETE'
      })
      .then(
        console.log("Intento irme a la vista articles"),
        props.history.push("/articles")
        );
  }

}

export default articleApi;