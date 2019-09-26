import React, { Component } from 'react';
import Form from '../Form';

class ArticleAdd extends Component {
  constructor() {
    super();
    this.state = { title: '', content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('api/articles', {
        method: 'POST',
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
      headTitle: 'Create Article Post', 
      buttonName: 'Create'
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

export default ArticleAdd;