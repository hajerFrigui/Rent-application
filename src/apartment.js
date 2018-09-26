import React, { Component } from "react";
import Card from "./card";
import "./routes.css";
export default class Apartment extends Component {
  render() {
    let showapartmentcards = [];
    showapartmentcards = this.props.cards.filter(
      elt => elt.category === "apartment"
    );
    return (
      <div className="apartment-cards">
        {showapartmentcards.map((elt, i) => (
          <Card card={elt} key={i} />
        ))}
      </div>
    );
  }
}
