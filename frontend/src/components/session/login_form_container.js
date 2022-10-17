import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    modal: state.ui.modal,
    signedIn: state.session.isSignedIn
  };
};

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: form => dispatch(openModal(form)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);