import React from "react";
import Navbar from "./navbar";
import ModalLogin from "./modallogin";
import { Button }from 'reactstrap';
import { Link} from 'react-router-dom';
import './navbar.css';
export default class Login extends  React.Component{
    render (){
        return(
            <nav id="hajer" className="navbar navbar-expand-lg navbar-dark bg-dark testnav">
             <Navbar />
            <div className="login-app">
     
              <ModalLogin />
              <Button color="danger" ><Link to="/Inscription" className="hi">Inscription</Link></Button>
             </div>
             </nav>
        )
    }
}