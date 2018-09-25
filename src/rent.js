import React from "react";
import { Table } from 'reactstrap';
import axios from "axios";
import "./rent.css"
export default class Rent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            rentcard:{}
        }
        this.change = this.change.bind(this)

        
    }
    change(value){
        this.setState({
            rentcard :value
        })
    }
    componentDidMount(){
        let path="/getAnnonce/"+this.props.plow
        axios.get(path)
        .then (res=>this.change(res.data))      
        .catch(err=>console.log(err)) 
    }
    render(){
        return (
            <Table className="rentable"responsive>
            <thead>
              <tr>
                
                <th>image</th>
                <th>price</th>
                <th>type</th>
                <th>category</th>
                <th>Rented Name</th>
                <th>Numero</th>
                <th>Adress </th>
                <th>disponibility</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
               
                <td><img  className="cardrenimg"src={this.state.rentcard.img} alt="renCard"/></td>
                <td>{this.state.rentcard.price}</td>
                <td>{this.state.rentcard.type}</td>
                <td>{this.state.rentcard.category}</td>
                <td>{this.state.rentcard.rented}</td>
                <td>{this.state.rentcard.numero}</td>
                <td>{this.state.rentcard.adress}</td>
                
                <td>{this.state.rentcard.disponibility}</td>
                
              </tr>
             
            
              
              </tbody>
              </Table>
        );
    }
}