import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Createadd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Create Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="login-title" toggle={this.toggle}>Create Add</ModalHeader>
          <ModalBody>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input type="text" name="text" id="exampleText" placeholder="Name of the annonce" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Price</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="The price" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Fupload image</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
          </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Availability</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>True</option>
            <option>False</option>
            </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Type</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>garden-tools</option>
            <option>repairs-and-mantenance-tools</option>
            <option>health-care-services</option>
            <option>car-rental-services</option>
            <option>Studio</option>
            <option>Apartment</option>
            <option>boarding-houses</option>
          </Input>
        </FormGroup>
        </Form>
          </ModalBody>
         

            <Button className="submit"color="danger" onClick={this.toggle}>Add</Button>

      </Modal>
    </div>
    );
  }
}

export default ModalLogin;