import React, { Component } from "react";
import Card from "./card";
import "./routes.css";

export default class RepairsMaintenances extends Component {
  render() {
    let showrepairscards = [];
    showrepairscards = this.props.cards.filter(
      elt => elt.category === "repair"
    );

    return (
      <div className="repair-cards">
        {showrepairscards.map((elt, i) => (
          <Card card={elt} key={i} />
        ))}
      </div>
    );
  }
}
