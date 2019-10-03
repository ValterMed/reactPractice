import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {loadArticles} from '../../actions/loadArticles'

class ArticleList extends Component {
  constructor () {
    console.log("Estamos en el constructor");
    super();
    //this.state = {articles: []};
  }

  componentDidMount() {
    console.log(this.props)
    debugger
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
    console.log(this.state);
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

/*
<button onClick={() => this.props.createArticle('Hola', 'Holi')} className="btn btn-outline-primary">      
  Create Article
</button>
*/
function mapStateToProps(state) {
  console.log("walterMedina")
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createArticle: () => dispatch(loadArticles())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);