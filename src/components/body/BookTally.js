import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'reactstrap/lib/Button';
import CardColumns from 'reactstrap/lib/CardColumns';
import Modal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import BookDetail from './BookDetail';
import BookItem from './BookItem';


const mapStateToProps= state =>{
    return{
        books:state.books,
        comments:state.comments
    }
}

class BookTally extends Component {
    state={
        selectBook:null,
        modalOpen:false
    }
    onBookSelect=(book)=>{
        console.log(book);
        this.setState({selectBook:book,
            modalOpen:!this.state.modalOpen
        })
    }
    toggleModal=()=>{
        this.setState({modalOpen:!this.state.modalOpen})
    }
    render() {
        const listItem=this.props.books.map((item)=>{
            return(
                <BookItem item={item} bookDetail={()=>this.onBookSelect(item)}></BookItem>
            )
        }) 

        let detail=null;
        if (this.state.selectBook !=null){
            const comments=this.props.comments.filter((comment)=>{
                return(comment.bookId===this.state.selectBook.id)
            })
            detail=<BookDetail book={this.state.selectBook} comments={comments}></BookDetail>
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns >{ listItem }</CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {detail}
                        </ModalBody>
                        
                        <ModalFooter>
                            <Button onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                        
                    </Modal>
                </div>
                
            </div>
        );
    }
}


export default connect (mapStateToProps) (BookTally);