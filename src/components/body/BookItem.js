import React from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardImg from 'reactstrap/lib/CardImg';

const BookItem = (props) => {
    console.log(props);
    return (
        <div>
            <Card style={{margin:"10px"}}>
                <CardBody>
                    <CardImg style={{cursor:"pointer"}} onClick={props.bookDetail} width="100%" alt={props.item.name} src={props.item.image}></CardImg> 
                </CardBody>
                
            </Card>
        </div>
    );
};

export default BookItem;