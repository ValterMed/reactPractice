import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {loadArticle, deleteOneArticle} from '../../src/actions/articles'

class ArticleInfo extends Component {
  constructor() {
    console.log("estamos en el constructor de ArticleInfo");
    super();
  }
  componentDidMount() {
    console.log("Estamos en componentDidMount de ArticleInfo");
    this.props.showArticle(this.props.match.params.id);
    this.handleDelete = this.handleDelete.bind(this);
    //this.props.showArticle(this.props.match.params.id);
    /*
    fetch(`api/articles/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({article: data});
      })
      .catch(error => console.log('error', error));
    */
  }
  handleDelete() {
    this.props.deleteArticle(this.props.match.params.id);
    this.props.history.push("/articles")
    /*
    fetch(`api/articles/${this.props.match.params.id}`, {
      method: 'DELETE'
    })
    .then(this.props.history.push("/articles"))
    .catch(error => console.log('error', error));
    */
  }

  render() {
    console.log("estamos en el renderizado de la pagina");
    console.log(this.props);
    return (
      <div>
        <div key={this.props.article.id}>
          <h2>{this.props.article.id}: {this.props.article.title}</h2>
          <p>{this.props.article.content}</p>
          <p>
            <Link to={`/articles/${this.props.article.id}/edit`} className="btn btn-outline-dark">Edit</Link>
            <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button> 
            <Link to="/articles" className="btn btn-outline-dark">Close</Link>
          </p>
          <hr/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("estamos en mapStateToProps de ArticleInfo");
  return {
    article: state.articlesReducer.currentArticle
  };
}

function mapDispatchToProps(dispatch) {
  console.log("estamos en mapDispatchToProps de ArticleInfo");
  return {
    showArticle: (id) => dispatch(loadArticle(id)),
    deleteArticle: (id) => dispatch(deleteOneArticle(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);