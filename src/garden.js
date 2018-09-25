import React, { Component } from "react";
import Card from "./card";
import "./routes.css";

export default class Garden extends Component {
  render() {
    let showgardentools = [];
    showgardentools = this.props.cards.filter(elt => elt.category === "garden");

    return (
      <div className="garden-cards">
        {showgardentools.map((elt, i) => (
          <Card card={elt} key={i} />
        ))}
      </div>
    );
  }
}
