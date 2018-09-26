import React, { Component } from "react";
import Card from "./card";
import "./routes.css";

export default class BoardingHouse extends Component {
  render() {
    let showboardingHousecards = [];
    showboardingHousecards = this.props.cards.filter(
      elt => elt.category === "boardinghouse"
    );
    return (
      <div className="boarding-house">
        {showboardingHousecards.map((elt, i) => (
          <Card card={elt} key={i} />
        ))}
      </div>
    );
  }
}
