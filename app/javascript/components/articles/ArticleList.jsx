import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {loadArticles} from '../../src/actions/articles'

class ArticleList extends Component {
  constructor () {
    console.log("Estamos en el constructor de ArticleList");
    super();
    //this.props.listArticles();
    //console.log(props);

    //this.state = {articles: []};
  }

  componentDidMount() {
    console.log("estamos en componentDidMount");
    this.props.listArticles();
    /*
    fetch('api/articles')
      .then(response => response.json())
      .then(data => {
        this.setState({articles: data});
      })
      .catch(error => console.log('error', error));
    */
  }
  render() {
    console.log("estamos en el renderizado de la pagina");
    console.log(this.props);
    return (
      <div>
        {this.props.articles.map((article) => {
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

function mapStateToProps(state) {
  console.log("estamos en mapStateToProps");
  console.log(state.articles);
  return {
    articles: state.articlesReducer.articles
  };
}

function mapDispatchToProps(dispatch) {
  console.log("estamos en mapDispatchToProps");
  return {
    listArticles: () => dispatch(loadArticles())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);