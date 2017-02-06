import "./styles/main.sass";
import React from "react";
import Router, { Route, DefaultRoute } from "react-router";
import App from "./components/App.jsx";
import Insurance from "./components/information/Insurance.jsx";
import Procedures from "./components/information/Procedures.jsx";

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="procedures" path="procedures" handler={Procedures} />
    <DefaultRoute handler={Insurance} />
  </Route>
);

Router.run(routes, function (Handler, state) {
  let params = state.params;
  React.render(<Handler params={params}/>, document.body);
});
