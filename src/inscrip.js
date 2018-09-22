import React from 'react';
import { Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div className="formContainer">
        <Form>
        <h2 className="signn"> Sign up</h2>
        <FormGroup>
          <Label for="exampleText">Name</Label>
          <Input type="text" name="text" id="exampleText" placeholder="your name" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePText">User Name</Label>
          <Input type="text" name="text" id="exampleText" placeholder="UserName" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="your email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell" />
        </FormGroup>
        <FormGroup>
        <Label for="exampleNumber">Phone Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="your phoneNumber" />
        </FormGroup>
       
        <FormGroup>
          <Label for="exampleText">Town</Label>
          <Input type="text" name="text" id="exampleText" placeholder="your town" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Adress</Label>
          <Input type="adress" name="adress" id="exampleAdress" placeholder="your adress" />
        </FormGroup>
    
     
     
        <FormGroup>
          <Label for="exampleFile">Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
         
        </FormGroup>
           
         <FormGroup>
            By clicking on Sign up, you agree to Spotify's <Link to="">Terms and Conditions of Use.</Link>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I'm not a robot
          </Label>
        </FormGroup>
        <div className="buttons">
        <Button className="reset-btn btn-danger" >Reset</Button>
        <Button className="submit-btn btn-danger" disabled >Submit</Button>
        </div>
      </Form>
      </div>
    );
  }
}