import React from "react";
import Card from "./card";
import Nav from "./title";
export default class Cards extends React.Component{
    constructor(props){
        super(props)
    }
    render (){
        return (
            <div>
            <Nav />
            <div className="cards-flex container">
            
                   { this.props.cards.map(e=><Card  card={e}/>)}
               
          </div>
            </div>
        );
    }
}