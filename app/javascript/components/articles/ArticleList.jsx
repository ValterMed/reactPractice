import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {addArticle, allArticles} from '../../actions/articles';
import {allArticle} from '../../actions/articles';

class ArticleList extends Component {
  constructor () {
    console.log("Estamos en el constructor");
    super();
    this.state = {articles: []};
  }

  componentDidMount() {
    fetch('api/articles')
      .then(response => response.json())
      .then(data => {
        this.setState({articles: data});
      })
      .catch(error => console.log('error', error));
  }
  render() {
    console.log("estamos en el renderizado de la pagina");
    console.log(this.state);
    return (
      <div>
        {this.state.articles.map((article) => {
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr/>
            </div>
          )
        })}
        <Link to={`/articles/new`}>Create Article</Link>
      </div>
    );
  }
}

/*
<button onClick={() => this.props.createArticle('Hola', 'Holi')} className="btn btn-outline-primary">      
  Create Article
</button>
*/
function mapStateToProps(state) {
  console.log("funcion mapStateToProps")
  console.log(state)
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  console.log("funcion mapDispatchToProps")
  return {
    createArticle: (data) => dispatch(allArticles(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

//export default ArticleList;