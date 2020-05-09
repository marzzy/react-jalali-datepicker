import React from "react";
import { RangePicker } from "../Datepicker";

class Routes extends React.Component {
  render() {
    return (
      <article className="routes container box">
        <header>
          <h1>Date Picker Preview</h1>
        </header>

        <section>
          <RangePicker isJalaali={false} numberOfMonths={2} />
        </section>
      </article>
    );
  }
}

export default Routes;
