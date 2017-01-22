"use strict";

import React, { Component } from "react";
import { RouteHandler } from "react-router";
import PageHandler from "./PageHandler.jsx";
import Map from "./map/Map.jsx";
import Info from "./information/Info.jsx";
import colors from "../data/colors.js";
import InsuranceStore from "../stores/InsuranceStore.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      data: null,
      activeState: "AL",
      activeInsurance: "medicaid",
      colors: colors[colors.mapping.medicaid],
      fetched: false,
      fetching: false
    };
    if (!(this.state.fetched || this.state.fetching)) {
      fetch();
    }
  }

  componentDidMount() {
    InsuranceStore.addChangeListener(this._onChange);
  }

  componentWillMount() {
    InsuranceStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(InsuranceStore.getAll());
  }

  render() {
    return(
      <div id="app">
        <header className="page-header">
          <PageHeader />
        </header>
        <main className="page-body">
          <section className="map-container">
            <Map
              data={this.state.data}
              activeState={this.state.activeState}
              activeInsurance={this.state.activeInsurance}
              colors={this.state.colors}
              fetched={this.state.fetched}
              />
          </section>
          <section className="info">
            <Info>
              <RouteHandler
                data={this.state.data}
                activeState={this.state.activeState}
                activeInsurance={this.state.activeInsurance}
                colors={this.state.colors}
                fetched={this.state.fetched}
                />
            </Info>
          </section>
        </main>
      </div>
    );
  }
}
