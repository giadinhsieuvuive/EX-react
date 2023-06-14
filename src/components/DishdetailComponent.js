import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, CardBody } from "reactstrap";
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDishdetail: this.props.dish
        }
    }
    renderDish(dish) {
        if (dish != null)
            return (
                
                <div class="col-12 col-md-3 mt-3 ">
                    
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                    </Card>
                    <Card>
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

    renderComments(comments) {
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
                <div class="col-12 col-md-6 m-2">
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

    render() {
        const dish = this.props.dish;
        console.log(dish);

        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const commentItem = this.renderComments(dish.comments);

        return (
            <div className="container">
                <div class="row">
                
                    {dishItem}
                    {commentItem}
                
                </div>
            </div>
        )
    }

}

export default DishDetail
