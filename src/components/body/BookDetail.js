import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardImg from 'reactstrap/lib/CardImg';
import CardText from 'reactstrap/lib/CardText';
import CardTitle from 'reactstrap/lib/CardTitle';
import CommentForm from './CommentForm';
import CommentLoad from './CommentLoad';

const BookDetail = (props) => {
    return (
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg src={props.book.image} />
                <CardBody>
                    <CardTitle>{props.book.title}</CardTitle>
                    <CardText>{props.book.description}</CardText>
                    <CardText>Price: {props.book.price} /=</CardText>
                    <hr/>
                    Comments:
                    <hr/>
                    <CommentLoad comments={props.comments}></CommentLoad>
                    <hr/>
                    <CommentForm bookId={props.book.id}></CommentForm>
                </CardBody>
            </Card>
        </div>
    );
};

export default BookDetail;