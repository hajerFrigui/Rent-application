import React from "react";
import Card from "./card";
import Nav from "./title";
import axios from "axios";
import './App.css'
export default class Cards extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchValue :"",
        }
        this.changeSearch = this.changeSearch.bind(this);
 
    }
    changeSearch(value){
        this.setState({
            searchValue:value
        })
    }

   
    componentDidMount(){
        axios.get("/getAllAnnonces")
        .then (res=>this.props.getCards(res.data))      
         .catch(err=>console.log("err"))
      }
     
        
  

      
    
    render (){
        let showSearch=[];
        showSearch = this.props.cards
        .filter(elt => 
             elt.title.toLowerCase()
             .indexOf(this.state.searchValue.toLowerCase())!== -1
            );
           
           
        let houseAnnouncements = this.props.cards.filter(el => el.type ==="house").slice(0,4)
        let serviceAnnouncements = this.props.cards.filter(el => el.type ==="service").slice(0,4)      
        let toolsAnnouncements = this.props.cards.filter(el => el.type ==="tool").slice(0,4)      

        return (
            <div>
            <Nav search={this.state.searchValue} changesearch={this.changeSearch} click={this.handleClick}/>
        
            { this.state.searchValue === "" ?
            <div>
          <h3 className="title-announcement last-announcement">Last Tools announcements</h3>
            <div className="cards-flex container">
           { toolsAnnouncements.map((e,i)=><Card key={i} card={e}/>)}
          </div>
          <h3 className="last-announcement">Last House announcements</h3>
            <div className="cards-flex container">
           { houseAnnouncements.map((e,i)=><Card key={i} card={e}/>)}
          </div>
          <h3 className="last-announcement">Last Service announcements</h3>
            <div className="cards-flex container">
            { serviceAnnouncements.map((e,i)=><Card key={i} card={e}/>)}
            </div>
            </div>
            : 
            <div className="search-result-container">
            {showSearch.length > 0 ? showSearch.map((e,i)=><Card key={i} card={e}/>) : <h3>No Result</h3>}
           </div> 
            }
        </div>
        );
    }
}