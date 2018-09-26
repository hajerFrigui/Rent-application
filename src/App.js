import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./navbar";
import Cards from "./cards";
import About from "./About";
import Rent from "./rent";
import Garden from "./garden";
import RepairsMaintenances from "./repairsmaint";
import Healthcare from "./healthcare";
import CarRental from "./carrental";
import Studio from "./studio";
import Apartment from "./apartment";
import BoardingHouse from "./boardingHouse";

import ServMaint from "./servMaint";
import Inscrip from "./inscrip";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.getallcards = this.getallcards.bind(this);
  }

  getallcards(value) {
    this.setState({
      cards: value
    });
  }
  componentDidMount() {
    axios
      .get("/getAllAnnonces")
      .then(res => this.getallcards(res.data))
      .catch(err => console.log("err"));
  }
  render() {
    return (
      <div className="App">
        <div className="menu">
          <Navbar />
        </div>

        <Route exact path="/" component={About} />
        <Route exact path="/about us" component={About} />
        <Route exact path="/Inscription" component={Inscrip} />

        <Route
          path="/tools/garden"
          render={() => <Garden cards={this.state.cards} />}
        />
        <Route
          path="/tools/repairs and maintenance"
          render={() => <RepairsMaintenances cards={this.state.cards} />}
        />
        <Route
          path="/services/health-care"
          render={() => <Healthcare cards={this.state.cards} />}
        />
        <Route
          path="/services/maintenance"
          render={() => <ServMaint cards={this.state.cards} />}
        />
        <Route
          path="/services/car-rental"
          render={() => <CarRental cards={this.state.cards} />}
        />
        <Route
          path="/houses/studios"
          render={() => <Studio cards={this.state.cards} />}
        />
        <Route
          path="/houses/apartments"
          render={() => <Apartment cards={this.state.cards} />}
        />
        <Route
          path="/houses/boarding-houses"
          render={() => <BoardingHouse cards={this.state.cards} />}
        />

        <Route path="/home" render={() => <Cards cards={this.state.cards} />} />

        <Route
          path="/annonces/:id"
          render={props => <Rent plow={props.match.params.id} />}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
