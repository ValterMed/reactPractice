import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {addArticle} from '../../actions/articles';

class ArticleList extends Component {
  constructor () {
    super();
  }

  componentDidMount() {
    /*fetch('api/articles')
      .then(response => response.json())
      .then(data => {
        this.setState({articles: data});
      })
      .catch(error => console.log('error', error));
    */
  }
  render() {
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
        <button onClick={() => this.props.createArticle('Hola', 'Holi')} className="btn btn-outline-primary">
          Create
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createArticle: (title, content) => dispatch(addArticle(title, content))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);