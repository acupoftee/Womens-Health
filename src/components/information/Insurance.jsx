"use strict";

import React, { Component } from "react";
import Highcharts from "react-highcharts";
import _ from "underscore";
import InlineSelect from "../InlineSelect.jsx";
import Legend from "../Legend.jsx";
import stateNames from "../../data/state-names.json";
import categories from "../../data/categories.json";
import Dispatcher from "../../setup.js";
import colors from "../../data/colors.js";

let getBarChartColor = (insurance, activeInsurance) => {
  if (insurance === activeInsurance) {
    return colors[colors.mapping[activeInsurance]].range(70);
  }
  return colors.turquoise.defaultFill;
};

let getBarChartData = (data, state, insurance) => {
  let stateData = _.findWhere(data, {State: state});
  return [{
    name: categories.insurance.employer.name;
    color: getBarChartColor("employer", insurance);
    y: +stateData.employer;
  },
  {
    name: categories.insurance["non-group"].name;
    color: getBarChartColor("non-group", insurance);
    y: +stateData["non-group"];
  },
  {
    name: categories.insurance.medicaid.name;
    color: getBarChartColor("medicaid", insurance);
    y: +stateData.medicaid;
  },
  {
    name: categories.insurance.uninsured.name;
    color: getBarChartColor("uninsured", insurance);
    y: +stateData.uninsured;
  }];
};
