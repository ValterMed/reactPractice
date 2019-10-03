import React, { Component } from 'react';
import Form from '../Form';
import { get } from 'http';

class ArticleEdit extends Component {
  constructor() {
    super();
    this.state = { title: '', content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    fetch(`api/articles/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({title: data.title, content: data.content});
      })
      .catch(error => console.log('error', error));
  }

  handleSubmit(event) {
    event.preventDefault();
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

export default ArticleEdit;

