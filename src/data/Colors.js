import * as d3 from "d3";

let colors = {
  turquoise: {
    range: d3.scaleLinear().domain([0, 70]).range(["#FFFFFF", "#4EB1BA"]),
    defaultFill: "rgb(204, 204, 204)"
  },
  blue: {
    range: d3.scaleLinear().domain([0, 70]).range(["#FFFFFF", "#3F5DAE"]),
    defaultFill: "rgb(204, 204, 204)"
  },
  green: {
    range: d3.scaleLinear().domain([0, 70]).range(["#FFFFFF", "#17B72B"]),
    defaultFill: "rgb(204, 204, 204)"
  },
  purple: {
    range: d3.scaleLinear().domain([0, 70]).range(["#FFFFFF", "#611E9F"]),
    defaultFill: "rgb(204, 204, 204)"
  },
  mapping: {
    employer: "green",
    "non-group": "blue",
    medicaid: "turquoise",
    uninsured: "purple"
  }
};

export default colors;
