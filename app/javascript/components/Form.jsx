import React, { Component } from 'react';
import Styled from 'styled-components';

class Form extends Component {
  render() {
    console.log("Estamos entrando al Form")
    const Button = Styled.button`
      cursor: pointer;
      background: transparent;
      font-size: 16px;
      border-radius: 3px;
      color: palevioletred;
      border: 2px solid palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;
      transition: 0.5s all ease-out;
      &:hover {
        background-color: palevioletred;
        color: white;
      }
    `;
    return (
      <div>
        <h1>{this.props.settings.headTitle}</h1>
        <form onSubmit={this.props.actions.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={this.props.settings.title} onChange={this.props.actions.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea name="content" rows="5" value={this.props.settings.content} onChange={this.props.actions.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <Button type="submit" className="btn btn-dark">{this.props.settings.buttonName}</Button>
            <Button type="button" onClick={this.props.actions.handleCancel} className="btn btn-secondary">Cancel</Button>
            <Button>I am a Button</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;