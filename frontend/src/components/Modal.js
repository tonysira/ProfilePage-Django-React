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
    Label
} from "reactstrap";
import styles from "../custom.module.css";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.profile
        };
    }
    handleChange = e => {
        let { name, value } = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    render() {
        const { toggle, onSave } = this.props;
        console.log(this.state.activeItem);
        
        return (
            <Modal isOpen={true} toggle={toggle} className={styles.modal}>
                <ModalHeader toggle={toggle}> Profile Item </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                            type="text"
                            name="firstName"
                            value={this.state.activeItem.firstName}
                            onChange={this.handleChange}
                            placeholder="Enter Profile firstName"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                            type="text"
                            name="lastName"
                            value={this.state.activeItem.lastName}
                            onChange={this.handleChange}
                            placeholder="Enter Profile lastName"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Age</Label>
                            <Input
                            type="number"
                            name="age"
                            value={this.state.activeItem.age}
                            onChange={this.handleChange}
                            placeholder="Enter Profile age"
                            min="1"
                            max="120"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input type="select" name="gender" onChange={this.handleChange} value={this.state.activeItem.gender}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="genderless">genderless</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                            type="textarea"
                            name="description"
                            value={this.state.activeItem.description}
                            onChange={this.handleChange}
                            placeholder="Enter Profile description"
                            maxlength="220"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="picture">Picture Link</Label>
                            <Input
                            type="text"
                            name="picture"
                            value={this.state.activeItem.picture}
                            onChange={this.handleChange}
                            placeholder="Enter Profile picture link"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success"  className={styles.modalButton} onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}