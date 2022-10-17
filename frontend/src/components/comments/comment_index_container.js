import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment, updateComment, fetchComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import { giveCommentId } from '../../actions/modal_info_actions';

const mSTP = (state, ownProps) => ({
  users: Object.values(state.entities.users),
  comments: Object.values(state.entities.comments.all),
  postId: ownProps.postId,
  userId: state.session.user.id
});

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  editComment: comment => dispatch(updateComment(comment)),
  openModal: form => dispatch(openModal(form)),
  giveCommentId: commentId => dispatch(giveCommentId(commentId)),
  fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mSTP, mDTP)(CommentIndex);