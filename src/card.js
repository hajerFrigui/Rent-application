import React from "react";
import {Link} from 'react-router-dom';
export default class Card extends React.Component{
  
    render (){
        return(
           
<div className="card">
  <img className="card-img-top" src={this.props.card.img} alt="card"/>
  <div className="card-body">
    <h5 className="card-title">{this.props.card.name}</h5>
    <p className="card-text">{this.props.card.price}DT/hour</p>
    <Link to ={"/annonces/"+this.props.card._id} className="btn btn-secondary" >Rent</Link>
  </div>
</div>
        );
    }
}