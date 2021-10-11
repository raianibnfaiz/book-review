import React from 'react';

const CommentLoad = (props) => {
    return (
        props.comments.map(comment=>{
            return(
                <div>
                    <h4>{comment.author}</h4>
                    <p>{comment.comment}</p>
                </div>
            )
        })
        
    );
};

export default CommentLoad;