import { connect } from 'react-redux';
import Main from './main';
import { openModal } from '../../actions/modal_actions'

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
})

const mDTP = dispatch => {
    return {
    openModal: form => dispatch(openModal(form)),
}}

export default connect(mSTP, mDTP)(Main);