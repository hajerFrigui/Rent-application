import React, { Component } from "react";
import Card from "./card";
export default class CarRental extends Component {
  render() {
    let showCarRentalCard = [];
    showCarRentalCard = this.props.cards.filter(
      elt => elt.category === "carrental"
    );

    return (
      <div className="car-rental-cards">
        {showCarRentalCard.map((elt, i) => (
          <Card card={elt} Key={i} />
        ))}
      </div>
    );
  }
}
