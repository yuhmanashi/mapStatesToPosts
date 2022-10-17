import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchComments } from '../../actions/comment_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { givePostId } from '../../actions/modal_info_actions';

const mSTP = (state, ownProps) => ({
    // posts: Object.values(state.entities.posts.all),
    posts: ownProps.posts,
    comments: Object.values(state.entities.comments.all),
    users: Object.values(state.entities.users),
    userId: state.session.user.id,
    maxPosts: ownProps.maxPosts
});

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: form => dispatch(openModal(form)),
    givePostId: postId => dispatch(givePostId(postId))
});

export default connect(mSTP, mDTP)(PostsIndex);