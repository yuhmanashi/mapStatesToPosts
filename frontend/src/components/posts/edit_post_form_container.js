import { connect } from 'react-redux';
import EditPostForm from './edit_post_form';
import { fetchPost, editPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => {
    return {
    post: state.entities.posts.new,
    postId: state.ui.postId,
}};

const mDTP = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchUsers: () => dispatch(fetchUsers()),
    action: post => dispatch(editPost(post)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(EditPostForm);