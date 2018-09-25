import React from "react";
import Navbar from "./navbar";

import { Button }from 'reactstrap';

import './navbar.css';
export default class Logout extends  React.Component{
    render (){
        return(

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark testnav">
               <Navbar />
               <div className="logout-app">
                   <Button color="danger" >Create Add</Button>
                    <Button color="danger" >LogOut</Button>

                </div>
            </nav>
        );
    }}