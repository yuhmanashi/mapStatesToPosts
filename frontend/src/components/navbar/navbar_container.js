import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  userId: state.session.user.id,
  users: Object.values(state.entities.users),
  currentUser: state.session.user
});

const mDTP = dispatch => ({
  openModal: form => dispatch(openModal(form)),
  logout: () => dispatch(logout())  
});

export default connect(
  mapStateToProps,
  mDTP
)(NavBar);