import React from "react";
import { Button } from "reactstrap";
import axios from "axios";
import "./rent.css";
export default class Rent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentcard: {}
    };
    this.change = this.change.bind(this);
  }
  change(value) {
    this.setState({
      rentcard: value
    });
  }
  componentDidMount() {
    let path = "/getAnnonce/" + this.props.plow;
    axios
      .get(path)
      .then(res => this.change(res.data))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="card-show">
        <div className="card-show-img-title">
          <h3 className="card-show-title">{this.state.rentcard.title}</h3>
          <div className="image-container">
            <img
              className="show-card-img"
              src={this.state.rentcard.img}
              alt="Card"
            />
          </div>
        </div>
        <div className="card-show-infos">
          <div className="infos">
            <h6 className="card-show-price ">
              Price : {this.state.rentcard.price}
            </h6>
            <h6 className="card-show-rentedname ">
              Rented Name : {this.state.rentcard.rented}
            </h6>
            <h6 className="card-show-adress ">
              Adress : {this.state.rentcard.adress}
            </h6>
            <h6 className="card-show-numero ">
              Numero : {this.state.rentcard.numero}
            </h6>
            <h6 className="card-show-disponibility ">
              Disponibility: {this.state.rentcard.disponibility}
            </h6>
          </div>
          {this.state.rentcard.disponibility === "disponible" ? (
            <div className="button-container">
              <Button className="button-verif-rent" color="danger">
                Rent
              </Button>
            </div>
          ) : (
            <div className="button-container">
              <Button disabled className="button-verif-rent" color="danger">
                Rent
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
