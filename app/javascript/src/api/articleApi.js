class articleApi {
  static getAllArticles = async () => {
    console.log("se hace el fetch");
    const response = await fetch(`api/articles`);
    const json = await response.json();
    console.log("se van a devolver los valores");
    return json;
  }

  static getArticle = async (id) => {
    console.log("se hace el fetch");
    const response = await fetch(`api/articles/${id}`);
    const json = await response.json();
    console.log("se van a devolver los valores");
    return json;
  }
  
  static deleteArticle(id) {
    return fetch(`api/articles/${id}`, {
      method: 'DELETE'
    })
  }

  static pushArticle(id, history) {
    return fetch(`api/articles/${id}`, {
      method: 'PUT'
    }).then(response => response.json())
    .then(data => {
      history.push(`/articles/${data.id}`)
    });
  }

}

export default articleApi;

//ORIGINALES:
/*
static getAllArticles() {
  return fetch('api/articles')
    .then(response => {
      return response.json();
    });
}
static getArticle(id) {
  console.log("hacemos fetch para obtener un articulo")
  return fetch(`api/articles/${id}`)
    .then(response => {
      return response.json();
    });
}
*/