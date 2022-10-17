import { connect } from "react-redux";
import Modal from './modal'
import { closeModal } from "../../actions/modal_actions";
import { removeErrors } from "../../actions/session_actions";

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors()),
});

export default connect(mSTP, mDTP)(Modal)