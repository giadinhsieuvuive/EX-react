import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({dish}) {
        if (dish != null)
            return (
                
                <div class="col-12 col-md-9 mt-3 ">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay >
                            <CardTitle >{dish.name}</CardTitle>
                            <CardBody>{dish.description}</CardBody>
                        </CardImgOverlay>
                        </Card>
                    </div>
            )
        else {
            return (
                <div></div>
            )
        }
    }

    function RenderComments({comments})  {
        if (comments != null) {
            const comment = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                            </p>
                        </li>
                    </div>
                );
            });
            return (
                <div class="col-12 col-md-9 m-2">
                    <h4> Comments </h4>
                    <ul class="list-unstyled">
                        {comment}
                    </ul>

                </div>
            )
        }

        else {
            return (
                <div></div>
            )
        }
    }

    const  DishDetail = (props) =>  {
        const dish = props.dish;
        console.log(dish);

        if (dish == null) {
            return (<div></div>);
        }


        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        );

    }



export default DishDetail;
