import BOOKS from "../data/books";
import COMMENTS from "../data/comments";

const initialState={
    books:BOOKS,
    comments:COMMENTS
}
export const Reducer=(state=initialState,action)=>{
    console.log(action);
    if (action.type==="ADD_COMMENT"){
        let comment=action.payload
        comment.id=state.comments.length;
        console.log(comment);
        return{
            ...state,
            comments:state.comments.concat(comment)
        }
    }
    return state;
}