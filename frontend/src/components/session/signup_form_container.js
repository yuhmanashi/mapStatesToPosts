import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => ({
    signup: (user, userlogin) => dispatch(signup(user, userlogin)),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: form => dispatch(openModal(form)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);