import * as CommentUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST_COMMENTS = "RECEIVE_USER_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receivePostComments = comments => ({
  type: RECEIVE_POST_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveNewComment = comment => ({
    type: RECEIVE_NEW_COMMENT,
    comment
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchComment = id => dispatch => (
    CommentUtil.getComment(id)
        .then(comment => dispatch(receiveComment(comment)))
        .catch(err => console.log(err))
)

export const fetchComments = () => dispatch => (
  CommentUtil.getComments()
    .then(comments => dispatch(receiveComments(comments)))
    .catch(err => console.log(err))
);

export const fetchPostComments = postId => dispatch => (
  CommentUtil.getPostComments(postId)
    .then(comments => dispatch(receivePostComments(comments)))
    .catch(err => console.log(err))
);

export const createComment = data => dispatch => (
  CommentUtil.writeComment(data)
    .then(comment => dispatch(receiveNewComment(comment)))
    .catch(err => console.log(err))
);

export const deleteComment = commentId => dispatch => (
    CommentUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
        .catch(err => console.log(err))
);

export const editComment = comment => dispatch => (
  CommentUtil.updateComment(comment)
    .then(comment => dispatch(updateComment(comment)))
    .catch(err => console.log(err))
);