import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

//COMPONENTS

import Posts from "./components/posts";
import Profile from "./components/profile";
import PostsItem from "./components/posts_item";
import NotFound from "./components/404";
import Lifecycle from "./components/lifecycle";
class App extends Component {
  render() {
    return <div>Home</div>;
  }
}

// For routes we use BrowserRouter tag instead of
//App tag.This BrowserRouter tag loads the components
//based on the route present in the url.
ReactDOM.render(
  <BrowserRouter>
    <div>
      <header>
        <NavLink to="/" activeStyle={{ color: "red" }}>
          HOME
        </NavLink>
        <br />
        <NavLink to="/posts" activeStyle={{ color: "red" }}>POSTS</NavLink>
        <br />
        <NavLink to="/profile" activeStyle={{ color: "red" }}>PROFILE</NavLink>
        <br />
        <NavLink to="/lifecycle" activeStyle={{ color: "red" }}> Lifecycle</NavLink>
        <hr />
      </header>
      <Switch>
        {/* /posts ==> '/' is home/index.js  */}
        <Route path="/posts/:id" component={PostsItem} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
        <Route path="/lifecycle" component={Lifecycle} />
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
