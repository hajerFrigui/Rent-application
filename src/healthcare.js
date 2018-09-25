import React, { Component } from "react";
import "./routes.css";
import Card from "./card";

export default class Healthcare extends Component {
  render() {
    let showhealthcards = [];
    showhealthcards = this.props.cards.filter(
      elt => elt.category === "healthcare"
    );
    return (
      <div className="health-cards">
        {showhealthcards.map((elt, i) => (
          <Card card={elt} Key={i} />
        ))}
      </div>
    );
  }
}
