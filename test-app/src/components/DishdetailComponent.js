import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


export class DishdetailComponent extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);        
        
    }

   

    renderDish(dish) {
        console.log(dish);
        if (dish != null) {            
            const dishComments = dish.comments.map((aComment) => {
                return (
                    <div key={aComment.id}>
                        <CardText>{aComment.comment}</CardText>
                        <CardText>-- {aComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit' }).format(new Date(Date.parse(aComment.date)))}</CardText>
                        <br/>
                    </div>
                )
            });
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
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
        <div className="container">
            {this.renderDish(this.props.dish)}            
        </div>
        )
    }
}



export default DishdetailComponent;
