"use strict";

import React, { Component } from "react";
import * as d3 from "d3";

let createChart = () => {
  let $container = $(".state-information");

  $container.empty();
  let height = $container.height();
  let width = $container.width();

  d3.scaleLinear()
    .range([height, 0]);

  d3.select(".state-information")
    .attr("width", width)
    .attr("height", height);
};

export default class StateChart extends Component {
  componentDidMount() {
    if (this.state.storeData.fetched) {
      createChart(this.state.storeData, this.state.storeData.activeState);
    }
  }

  componentDidUpdate() {
    if (this.state.storeData.fetched) {
      createChart(this.state.storeData, this.state.storeData.activeState);
    }
  }

  render() {
    return (
      <div className="state-information"></div>
    );
  }
}
