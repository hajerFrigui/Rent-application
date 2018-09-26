import React, { Component } from "react";
import Card from "./card";
import "./routes.css";
export default class Studio extends Component {
  render() {
    let showstudiocards = [];
    showstudiocards = this.props.cards.filter(elt => elt.category === "studio");
    return (
      <div className="studio-cards">
        {showstudiocards.map((elt, i) => (
          <Card card={elt} key={i} />
        ))}
      </div>
    );
  }
}
