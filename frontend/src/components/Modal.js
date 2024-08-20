import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "file") {
      value = e.target.files[0]; // Handle file input
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>AudioFile Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="audiofile-title">Title</Label>
              <Input
                type="text"
                id="audiofile-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter AudioFile Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="audiofile-description">Description</Label>
              <Input
                type="text"
                id="audiofile-description"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter AudioFile description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="audiofile-file">Audio File</Label>
              <Input
                type="file"
                id="audiofile-file"
                name="file"
                onChange={this.handleChange} // File input handling
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
