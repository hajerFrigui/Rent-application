import React, { Component } from "react";
import "./routes.css";
import Card from "./card";

export default class ServMaint extends Component {
  render() {
    let showservMaintCards = [];
    showservMaintCards = this.props.cards.filter(
      elt => elt.category === "maintenance"
    );

    return (
      <div className="serMaintCards">
        {showservMaintCards.map((elt, i) => (
          <Card card={elt} Key={i} />
        ))}
      </div>
    );
  }
}
