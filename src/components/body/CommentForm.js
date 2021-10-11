import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import Input from 'reactstrap/lib/Input';

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            author:'',
            comment:'',
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=>{
        
        this.props.dispatch({
            type:'ADD_COMMENT',
            payload:{
                bookId:this.props.bookId,
                author:this.state.author,
                comment:this.state.comment,
            }
        }
        )
        this.setState({
            author:'',
            comment:'',
        })
        event.preventDefault();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" onChange={this.handleInputChange} name="author" placeholder="Author" value={this.state.author} required />
                    <br/>
                    <Input type="textarea" onChange={this.handleInputChange} name="comment" placeholder="Give your opinion" value={this.state.comment} required />
                    <br/>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default connect() (CommentForm);