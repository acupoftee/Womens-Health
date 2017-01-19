import insurance from "..data/insurance-breakdown.csv";
import Dispatcher from "../setup.js";
import Actions from "./Actions.js";

export function fetch() {
  d3.csv(insurance, (data) => {
    Dispatcher.dispatch({
      actionType: Actions.INSURANCE_FETCH_SUCCEEDED,
      data: data
    });
  });
}
