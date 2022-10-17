import { connect } from 'react-redux';
import EditCommentForm from './edit_comment_form';
import { fetchComment, editComment } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => {
    return {
    comment: state.entities.comments.new,
    commentId: state.ui.commentId,
    formType: 'Edit Comment'
}};

const mDTP = dispatch => ({
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    fetchUsers: () => dispatch(fetchUsers()),
    action: comment => dispatch(editComment(comment)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(EditCommentForm);