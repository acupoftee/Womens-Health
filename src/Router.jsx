import "./sass/main.sass";
import React from "react";
import ReactDOM from "react-dom";
import Router, { Route, IndexRoute } from "react-router";
import App from "./components/App.jsx";
import Insurance from "./components/information/Insurance.jsx";
import Procedures from "./components/information/Procedures.jsx";

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="procedures" path="procedures" handler={Procedures} />
    <IndexRoute handler={Insurance} />
  </Route>
);

Router.run(routes, function (Handler, state) {
  let params = state.params;
  ReactDOM.render(<Handler params={params}/>, document.body);
});
