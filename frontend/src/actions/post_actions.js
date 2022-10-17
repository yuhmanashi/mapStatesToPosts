import * as PostUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveNewPost = post => ({
  type: RECEIVE_NEW_POST,
  post
});

export const updatePost = post => ({
  type: UPDATE_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const fetchPost = post => dispatch => (
  PostUtil.getPost(post)
    .then(post => dispatch(receivePost(post)))
    .catch(err => console.log(err))
)

export const fetchPosts = () => dispatch => (
  PostUtil.getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);

export const fetchUserPosts = id => dispatch => (
  PostUtil.getUserPosts(id)
    .then(posts => dispatch(receiveUserPosts(posts)))
    .catch(err => console.log(err))
);

export const createPost = post => dispatch => {
  
  return (
  PostUtil.writePost(post)
    .then(post => {
      return dispatch(receiveNewPost(post)
      )})
    .catch(err => console.log(err))
  )
};

export const editPost = post => dispatch => (
  PostUtil.updatePost(post)
    .then(post => dispatch(updatePost(post)))
    .catch(err => console.log(err))
);

export const deletePost = postId => dispatch => (
  PostUtil.deletePost(postId)
      .then(() => dispatch(removePost(postId)))
      .catch(err => console.log(err))
);