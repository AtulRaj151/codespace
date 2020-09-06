import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import { PostList, Navbar, Home, Page404 } from './';
import PropTypes from 'prop-types';
import { Login } from './index';
class App extends React.Component {
  componentDidMount() {
    //async posts
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </div>
    );
  }
}
function mapStatetoProp(state) {
  return {
    posts: state.posts,
  };
}
App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStatetoProp)(App);
