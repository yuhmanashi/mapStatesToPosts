import { RECEIVE_POSTS, RECEIVE_USER_POSTS, RECEIVE_POST, REMOVE_POST, UPDATE_POST, RECEIVE_NEW_POST } from '../actions/post_actions'
import { merge } from 'lodash'

  const PostsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch(action.type) {
      case RECEIVE_POSTS:
        newState.all = action.posts.data;
        return newState;
      case RECEIVE_USER_POSTS:
        newState.user = action.posts.data;
        return newState;
      case RECEIVE_POST:
        newState.new = action.post.data;
        return newState
      case RECEIVE_NEW_POST:
        newState.new = action.post.data //updated post is in next state...
        newState.all.unshift(newState.new); //push goes to the bottom
        return newState;
      case UPDATE_POST:
        newState.new = action.post.data
        newState.all.forEach(post => {
          if (post._id === newState.new._id) {
              post.caption = newState.new.caption;
              post.stateName = newState.new.stateName;
          }})
        return newState;
      case REMOVE_POST:
        newState.all = newState.all.filter(post => post._id !== action.postId);
        return newState
      default:
        return state;
    }
  };
  
  export default PostsReducer;