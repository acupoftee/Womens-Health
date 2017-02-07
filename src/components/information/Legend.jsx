"use strict";

import React, { Component } from "react";
import d3 from "d3";
import $ from "jquery";

let drawLegend = (minimumColor, maximumColor) => {
  $(".legend").empty();
  let h = 50;
  let key = d3.select(".legend")
              .append("svg")
              .attr("id", "key")
              .attr("width", "100%")
              .attr("height", h);

  let w = parseInt(d3.select(".legend").
          style("width"), 10);

  let legend = key.append("defs")
                  .append("svg:linearGradient")
                  .attr("id", "gradient")
                  .attr("x1", "0%")
                  .attr("y1", "100%")
                  .attr("x2", "100%")
                  .attr("y2", "100%")
                  .attr("spreadMethod", "pad");

  legend.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", minimumColor)
        .attr("stop-opacity", 1);

  legend.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", maximumColor)
        .attr("stop-opacity", 1);

  key.append("svg:rect")
      .attr("width", w - 20)
      .attr("height", 20)
      .style("fill", "url(#gradient)")
      .attr("transform", "translate(10,0)");

  let x = d3.scale.linear()
                  .range([0, w - 20])
                  .domain([0, 70]);

  let xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom")
                    .ticks(7);

  key.append("g")
      .attr("class", "xAxis")
      .attr("transform", "translate(10,20)")
      .call(xAxis);

};

export default class Legend extends Component {
  componentDidMount() {
    drawLegend(this.props.minimumColor, this.props.maximumColor);
  }

  componentDidUpdate() {
    drawLegend(this.props.minimumColor, this.props.maximumColor);
  }

  render() {
    return (
      <div className="legend underline"></div>
    );
  }
}

Legend.propTypes = {
  minimumColor: React.PropTypes.string.isRequired,
  maximumColor: React.PropTypes.string.isRequired
};
