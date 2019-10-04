import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {loadArticle, deleteOneArticle} from '../../src/actions/articles'

class ArticleInfo extends Component {
  constructor(props) {
    console.log("estamos en el constructor de ArticleInfo");
    super(props);
    //this.state = { article: {} };
    this.props.showArticle(this.props.match.params.id);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    console.log("Estamos en componentDidMount de ArticleInfo");
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
    this.props.deleteArticle(this.props);
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
        <h2>{this.props.article[0].id}: {this.props.article[0].title}</h2>
        <p>{this.props.article[0].content}</p>
        <p>
          <Link to={`/articles/${this.props.article[0].id}/edit`} className="btn btn-outline-dark">Edit</Link>
          <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button> 
          <Link to="/articles" className="btn btn-outline-dark">Close</Link>
        </p>
        <hr/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("estamos en mapStateToProps de ArticleInfo");
  return {
    article: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  console.log("estamos en mapDispatchToProps de ArticleInfo");
  return {
    showArticle: (id) => dispatch(loadArticle(id)),
    deleteArticle: (props) => dispatch(deleteOneArticle(props))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);