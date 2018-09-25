import React from "react"
import Cards from "./cards";
import Footer from "./footer";
import Inscrip from "./inscrip";
import About from "./About"
import { Route} from 'react-router-dom';
import './App.css';
import Login from "./login";
import Rent from "./rent";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cards:[]
    };
    this.getallcards = this.getallcards.bind(this)
  }

 getallcards (value){
   this.setState({
     cards: value
   })
 }
  
  render() {
    return (
      <div className="App">
         <div className="menu">
         <Login />
         </div>

     <Route exact path="/" component ={About}/>
     <Route exact path="/about us" component ={About}/>
     <Route exact path="/Inscription" component={Inscrip} />

         
   
 <Route path="/home" render={() => <Cards getCards={value=>this.getallcards(value)} cards={this.state.cards}/>} />

   <Route path="/annonces/:id" render={(props) =>< Rent plow={props.match.params.id}/>} />


     

<Footer />
      </div>

  
     
    );
  }
}

export default App;
