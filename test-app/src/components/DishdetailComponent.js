import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


export class DishdetailComponent extends Component {

    constructor(props) {
        super(props);        
        
    }

   

    renderDish(dish) {
        if (dish != null) {            
            const dishComments = dish.comments.map((aComment) => {
                return (
                    <div key={aComment.id}>
                        <CardText>{aComment.comment}</CardText>
                        <CardText>-- {aComment.author}, {aComment.date.split("T", 1)}</CardText>
                        <br/>
                    </div>
                )
            });
            return(
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>                    
                    </div>                    
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardBody>
                                <CardTitle>Comments</CardTitle>
                                {dishComments}                        
                            </CardBody>                    
                        </Card>
                    </div>
                </div>             
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    
  

    render() {
        return (
        <div className="col-12 col-md-12">
            {this.renderDish(this.props.selectedDish)}            
        </div>
        )
    }
}



export default DishdetailComponent;
