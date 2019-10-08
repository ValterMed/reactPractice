import React, { Component } from 'react';
import Form from '../Form';
import {connect} from 'react-redux'
import {loadArticle, dataRecovery} from '../../src/actions/articles'

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    //se utiliza para llenar el state con el articulo:
    //this.props.getArticle(this.props.match.params.id);
    fetch(`api/articles/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({title: data.title, content: data.content});
      })
      .catch(error => console.log('error', error));
  }

  handleSubmit(event) {
    event.preventDefault();
    //this.props.articleEdit(this.props.match.params.id, this.props.history);
    fetch(`api/articles/${this.props.match.params.id}`, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        this.props.history.push(`/articles/${data.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    this.props.history.push("/articles");
  }

  render() {
    const settings = {
      title: this.state.title,
      content: this.state.content,
      headTitle: 'Edit Article Post', 
      buttonName: 'Edit'
    };
    const actions = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      handleCancel: this.handleCancel
    };
    return (
      <div>
        <Form settings={settings} actions={actions}/>
      </div>
    );
  }
}

/*
function mapStateToProps(state) {
  console.log("estamos en mapStateToProps de ArticleInfo");
  return {
    article: state.articlesReducer.currentArticle,
    data: state.articlesReducer.data
  };
}

function mapDispatchToProps(dispatch) {
  console.log("estamos en mapDispatchToProps de ArticleInfo");
  return {
    getArticle: (id, history) => dispatch(loadArticle(id, history)),
    articleEdit: (id) => dispatch(dataRecovery(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);
*/

export default ArticleEdit;