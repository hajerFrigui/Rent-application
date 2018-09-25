import React from "react";


export default class Nav extends React.Component{
    render(){
        return(
                <div className="jumbotron-primary jumbotron-fluid">
                  <div className="container">
                     <h1 className="display-4 text-focus-in">Rent anything, Rent anywhere</h1>
        
                  </div>

                   <form className="form-inline text-focus-in">
 
                      <div className="form-group mx-sm-3 mb-2">
                      <label htmlFor="inputPassword2" className="sr-only">Search...</label>
                      <input type="text" className="form-control" id="inputText"  onChange={(e)=>this.props.changesearch(e.target.value)}  placeholder="Search..."/>
                     </div>
                     
                 </form>
                 </div>
        );
           
            
        
    }
}