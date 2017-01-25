"use strict";

import "../../sass/map.sass";
import React, { Component } from "react";
import $ from "jquery";
import * as d3 from "d3";
import Datamap from "datamaps";
import categories from "../../data/categories.json";
import Dispatcher from "../../setup.js";

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.fetched) {
      this.drawMap();
    }
  }

  componentDidUpdate() {
    if (this.props.fetched) {
      this.drawMap();
    }
  }

  render() {
    return <div id="map"></div>;
  }

  drawMap() {
    let $map = $("#map");
    let darkenedColor = d3.rgb(this.props.colors.range(70)).darker();
    $map.empty();

    let data = {};
    this.props.data.forEach((d) => {
      if ((d[this.props.activeInsurance]) === "N/A") {
        data[d.state] = {
          fillColor: this.props.colors.defaultFill,
          percent: "n/a"
        };
      } else {
        data[d.state] = {
          fillColor: this.props.colors.range(d[this.props.activeInsurance]),
          percent: d[this.props.activeInsurance]
        };
      }
    });

    this.map = new Datamap({
      element: $map[0],
      done: (map) => {
        map.svg.selectAll(".datamaps-subunit").on("click", function (geography) {
          Dispatcher.dispatch({
            actionType: "ACTIVE_STATE_CHANGED",
            data: geography.id
          });
        });
      },
      scope: "usa",
      fills: { defaultFill: this.props.colors.defaultFill },
      data: data,
      geographyConfig: {
        borderColor: darkenedColor,
        highlightFillColor: darkenedColor,
        highlightBorderColor: darkenedColor,
        hightlightBorderWidth: 1,
        popupTemplate: (geo, d) => {
          return "<div class=\"hoverinfo\"><b>" + geo.properties.name + "</b><br>" +
          d.percent + "% of women " + categories.insurance[this.props.activeInsurance].have + "</div>";
        }
      }
    });
  }
}

Map.propTypes = {
  fetched: React.PropTypes.bool.isRequired,
  data: React.PropTypes.array,
  activeState: React.PropTypes.string.isRequired,
  activeInsurance: React.PropTypes.string.isRequired,
  colors: React.PropTypes.object.isRequired
};
