import Store from "./Store.js";
import Actions from "../actions/Actions.js";
import colors from "../data/colors.js";
import Dispatcher from "../setup.js";
import { fetch } from "../actions/InsuranceActions.js";

let _data = {
  data: null,
  activeState: "AL",
  activeInsurance: "medicaid",
  colros: colors[colors.mapping.medicaid],
  fetched: false,
  fetching: false
};

class InsuranceStore extends Store {
  constructor() {
    super();
    this.dispatchToken = Dispatcher.register(action => {
      switch(action.actionType) {
        case Actions.INSURANCE_FETCH_SUCCEEDED:
          _data.data = action.data;
          _data.fetched = true;
          _data.fetching = false;
          this.emitChange();
          break;
        case Actions.INSURANCE_TYPE_CHANGED:
          _data.activeInsurance = action.data;
          _data.colors = colors[colors.mapping[action.data]];
          this.emitChange();
          break;
        case Actions.ACTIVE_STATE_CHANGED:
          _data.activeState = action.data;
          this.emitChange();
          break;
      }
    });
  }

  getAll() {
    if (!(_data.fetched || data.fetching)) {
      fetch();
    }
    return _data;
  }
}

export default new InsuranceStore();
