import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader, Row, Label } from 'reactstrap'
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false            
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState ({
          isModalOpen: !this.state.isModalOpen
        });
      }


    render() {
        
        return (
        <div>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg">Submit Comment</span>
            </Button>   
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating">Rating</Label>                                    
                                    <Control.select  model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>    
                                    </Control.select>                                  
                                </Row>
                                <Row>
                                    <Label htmlFor="name">Your name</Label>
                                    <Control.text model=".name" id="name" name="name"
                                      placeholder="name"
                                      className="form-control"
                                      validators={{
                                          required, minLength: minLength(3), maxLength: maxLength(15)
                                      }} 
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="username">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />                                   
                                </Row>
                                <Button type="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
            </Modal>         
        </div>
        )
    }
}


export default CommentForm;
