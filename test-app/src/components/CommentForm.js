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

    handleSubmit(values) {
        alert("Current State is: " + JSON.stringify(values));
    }


    render() {
        
        return (
        <div>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil"> Submit Comment</span>
            </Button>   
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>                                
                        <Label htmlFor="rating">Rating</Label>                                    
                        <Control.select  model=".rating" name="rating"
                            className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>                                         
                        </Control.select>                              
                        <Label htmlFor="name" className="mt-2">Your name</Label>
                        <Control.text model=".author" id="author" name="author"
                            placeholder="author"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }} 
                        />
                        <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                        <Label htmlFor="username" className="mt-2">Comment</Label>
                        <Control.textarea model=".comment" id="comment" name="comment"
                            rows="6"
                            className="form-control" />     
                        <Button type="submit" className="mt-2" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>         
        </div>
        )
    }
}


export default CommentForm;
