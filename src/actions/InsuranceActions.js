import insurance from "../data/insurance-breakdowns.csv";
import Dispatcher from "../setup.js";
import Actions from "./Actions.js";
import * as d3 from "d3";

export function fetch() {
  d3.csv(insurance, (data) => {
    Dispatcher.dispatch({
      actionType: Actions.INSURANCE_FETCH_SUCCEEDED,
      data: data
    });
  });
}
