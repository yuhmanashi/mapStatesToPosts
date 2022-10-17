import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../../actions/post_actions';
import PostCreateForm from './post_create_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    // newPost: state.posts.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: data => dispatch(createPost(data)),
    fetchPosts: () => dispatch(fetchPosts()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCreateForm);
