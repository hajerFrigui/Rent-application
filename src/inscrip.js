import React from 'react';
import { Button,Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div className="formContainer">
        <Form>
        <h2 className="signn"> Sign up</h2>
        <FormGroup>
          <Label for="exampleText">Name</Label>
          <Input type="text" name="text" id="exampleText" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePText">User Name</Label>
          <Input type="text" name="text" id="exampleText" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
        <Label for="exampleNumber">Phone Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
        </FormGroup>
       
        <FormGroup>
          <Label for="exampleText">Town</Label>
          <Input type="text" name="text" id="exampleText" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Adress</Label>
          <Input type="adress" name="adress" id="exampleAdress" placeholder="with a placeholder" />
        </FormGroup>
    
     
     
        <FormGroup>
          <Label for="exampleFile">Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
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