import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


export class DishdetailComponent extends Component {

    constructor(props) {
        super(props);        
        
    }

   

    renderDish(dish) {
        if (dish != null) {
            console.log(dish);
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    
  

    render() {
        return (
        <div>
            {this.renderDish(this.props.selectedDish)}            
        </div>
        )
    }
}



export default DishdetailComponent;
