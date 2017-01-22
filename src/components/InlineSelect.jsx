"use strict";

import React, { Component } from "react";
import $ from "jquery";
import classNames from "classnames";
import categories from "../data/categories.js";

export default class InlineSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false;
    };
  }

  componentDidMount() {
    $("body").on("click", this.dropdownInactive.bind(this));
  }

  componentDidUpdate() {
    $("body").off("click");
  }

  render() {
    let dropdownMenuClasses = classNames("dropdown-menu", "collapse", {in: this.state.active});
    return (
      <div className="form-inline inline-select">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span className="selection-button-text">{this.getSelectionText(this.props.value)}</span>
            <span className="caret"></span>
          </button>
          <ul className={dropdownMenuClasses} aria-labelledby="dropdownMenu1">
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }

  dropdownInactive() {
    this.setState({active: false});
  }

  getSelectionText(selection) {
    return strings.insurance[selection].with;
  }
}

InlineSelect.propTypes = {
  value: React.PropTypes.string.isRequred,
  children: React.PropTypes.string.isRequired
};
