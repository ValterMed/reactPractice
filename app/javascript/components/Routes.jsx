import React, { Component } from 'react';
import Home from './Home';
import ArticleList from './ArticleList';
import ArticleAdd from './ArticleAdd';
import ArticleInfo from './ArticleInfo';
import ArticleEdit from './ArticleEdit';
import {HashRouter as Route, Switch} from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={ArticleList} />
          <Route exact path="/articles/new" component={ArticleAdd} />
          <Route exact path="/articles/:id" component={ArticleInfo} />
          <Route exact path="/articles/:id/edit" component={ArticleEdit} />
        </Switch>
      </div>
    );
  }
}

export default Routes;