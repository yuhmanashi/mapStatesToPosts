import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchState,fetchStates} from '../../actions/usaStates_actions'

import StateShow from './state_show';

const mapStateToProps = (state, ownProps) => {

  return ({
    users: Object.values(state.entities.users),
    comments: Object.values(state.entities.comments.all),
    posts: Object.values(state.entities.posts.all),
    stateId: ownProps.match.params.id,
    USAStates: state.entities.USAStates.all,
    // localState: state.entities.USAStates.all.filter
    // USAState: state.entities.USAStates
  })
}


const mapDispatchToProps = (dispatch) => {  
  return ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchStates: () => dispatch(fetchStates()),
    // fetchState: id => dispatch(fetchState(id))

  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateShow));