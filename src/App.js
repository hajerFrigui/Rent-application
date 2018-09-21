import React from "react"
import Navbar from "./navbar";
import Cards from "./cards";
import Footer from "./footer";
import data from "./data";
import Inscrip from "./inscrip"
import { Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cards:data
    }
  }
  render() {
    return (
      <div className="App">
         <div className="menu">
         <Navbar />
         </div>

     
     <Route exact path="/Inscription" component={Inscrip} />

         
   
 <Route path="/home" render={() => <Cards cards={this.state.cards} />} />

    
     

<Footer />
      </div>

  
     
    );
  }
}

export default App;
