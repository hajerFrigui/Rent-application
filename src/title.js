import React from "react";


export default class Nav extends React.Component{
    render(){
        return(
                <div class="jumbotron-primary jumbotron-fluid">
                  <div class="container">
                     <h1 class="display-4 text-focus-in">Rent anything, Rent anywhere</h1>
        
                  </div>

                   <form class="form-inline text-focus-in">
 
                      <div class="form-group mx-sm-3 mb-2">
                      <label for="inputPassword2" class="sr-only">Search...</label>
                      <input type="text" class="form-control" id="inputPassword2" placeholder="Search..."/>
                     </div>
                      <button type="submit" class="btn btn-secondary mb-2">Search</button>
                 </form>
                 </div>
        );
           
            
        
    }
}