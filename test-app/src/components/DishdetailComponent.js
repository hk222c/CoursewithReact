import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CommentForm } from './CommentForm';


    function RenderDish({dish}, {comments}) {        
        if (dish != null) {           
            return(                
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                         </CardBody>
                    </Card>                    
                 </div>                             
            );
        } else {
            return(
                <div></div>
            );
        }
        

    } 

    function RenderComments({comments}) {
        if (comments != null) {            
            const dishComments = comments.map((aComment) => {
                return (
                    <div key={aComment.id}>
                        <CardText>{aComment.comment}</CardText>
                        <CardText>-- {aComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit' }).format(new Date(Date.parse(aComment.date)))}</CardText>
                        <br/>
                    </div>
                )
            });
            return(
                <div className="col-12 col-md-5">
                        <Card>
                            <CardBody>
                                <CardTitle>Comments</CardTitle>
                                {dishComments}                        
                            </CardBody>                    
                        </Card>
                        <CommentForm />
                </div>
            );
        }else {
            return(
                <div></div>
            );            
        }

    }

    const DishdetailComponent = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>                        
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>                        
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
                          
            </div>
        );
    }


export default DishdetailComponent;
