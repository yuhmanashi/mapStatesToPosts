import { RECEIVE_COMMENTS, RECEIVE_POST_COMMENTS, RECEIVE_COMMENT, RECEIVE_NEW_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
  
  const CommentsReducer = (state = { all: {}, post: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_COMMENTS:
            newState.all = action.comments.data;
            return newState;
        case RECEIVE_POST_COMMENTS:
            newState.post = action.comments.data;
            return newState;
        case RECEIVE_COMMENT:
            newState.new = action.comment.data
            return newState;
        case RECEIVE_NEW_COMMENT:
            newState.new = action.comment.data
            newState.all.push(newState.new);
            return newState;
        case UPDATE_COMMENT:
            newState.new = action.comment.data // action.comment.data is not updating?
            newState.all.forEach(comment => {
                if (comment._id === newState.new._id)
                    comment.body = newState.new.body
                })
            return newState;
        case REMOVE_COMMENT:
            newState.all = newState.all.filter(comment => comment._id !== action.commentId);
            return newState
        default:
            return state;
    }
  };
  
  export default CommentsReducer;