import React, { Component } from 'react'
import { Button } from 'reactstrap'

class CommentForm extends Component {

    constructor(props) {
        super(props)

        this.state ({
            isModalOpen: false            
        })
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
        </div>
        )
    }
}


export default CommentForm;
