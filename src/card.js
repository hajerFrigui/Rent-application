import React from "react";
export default class Card extends React.Component{
    render (){
        return(
           
<div class="card">
  <img class="card-img-top" src={this.props.card.img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{this.props.card.name}</h5>
    <p class="card-text">{this.props.card.price}DT/hour</p>
    <a href="#" class="btn btn-secondary">Rent</a>
  </div>
</div>
        );
    }
}