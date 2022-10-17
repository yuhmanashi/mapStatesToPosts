import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';				
import { fetchUser } from '../../actions/user_actions';	
			

import UserShow from './user_show';				


const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,  
  users: Object.values(state.entities.users),
  comments: Object.values(state.entities.comments.all),
  posts: Object.values(state.entities.posts.all)
    
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchComments: () => dispatch(fetchComments()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserShow);