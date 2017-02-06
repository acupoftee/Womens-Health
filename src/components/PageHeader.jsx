"use strict";

import React, { Component } from "react";

export default class PageHeader extends Component {
  render() {
    return (
      <div>
        <h1>Women's Healthcare Availability in the U.S. in 2015</h1>
        <p className="subtitle">Many women in the United States rely on their insurance providers for access to affordable healthcare. What does this access look like?<br></br>
        Data retrieved from the <a href="http://kff.org/womens-health-policy/fact-sheet/womens-health-insurance-coverage-fact-sheet/">Kaiser Family Foundation</a>.
        </p>
      </div>
    );
  }
}
