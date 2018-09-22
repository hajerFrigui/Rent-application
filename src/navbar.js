import React from "react";
import Modale from "./modallogin";
import { Button }from 'reactstrap'
import { Link} from 'react-router-dom'
import './navbar.css'
 export default class Navbar extends React.Component{
 
  
     render(){
         return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/about us" class="nav-link" href="#">About us<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link to="/home"class="nav-link" href="#">Home</Link>
                </li>
                <li class="nav-item dropdown">
                <Link to="/tools" class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Tools
                   </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/tools/garden"class="dropdown-item" href="#">Garden</Link>
                      <Link to="/tools/"class="dropdown-item" href="#"></Link>
                      <Link to="/tools/repairs and maintenance"class="dropdown-item" href="#">repairs and maintenance</Link>

                    
                  </div>
                </li>
                <li class="nav-item dropdown">
                <Link to="/tools" class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                   </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/tools/garden"class="dropdown-item" href="#">Health-care</Link>
                      <Link to="/tools/"class="dropdown-item" href="#">Maintenance</Link>
                      <Link to="/tools/repairs and maintenance"class="dropdown-item" href="#">Car rental agencies</Link>

                    
                  </div>
                </li>
                <li class="nav-item dropdown">
                   <Link to="/Houses" class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Houses
                   </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                         <Link to="/Loisirs/studio" class="dropdown-item" href="#">Studio</Link>
                         <Link to="/Loisirs/apartments" class="dropdown-item" href="#">Apartments</Link>
                         <Link to="/Loisirs/boardingHouses" class="dropdown-item" href="#">Boarding Houses</Link>

                    
                  </div>
                </li>
                
             
              </ul>
              <div className="login-app">
     
              <Modale />
              <Button color="danger" ><Link to="/Inscription" className="hi">Inscription</Link></Button>
             </div>
            </div>
          </nav>

         );
         }
 }