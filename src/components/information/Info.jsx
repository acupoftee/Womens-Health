"use strict";

import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return {
      <div className="full-height">
        {this.props.children}
      </div>
    };
  }
}

Info.proptypes = {
  children: React.PropTypes.element.isRequired
};
