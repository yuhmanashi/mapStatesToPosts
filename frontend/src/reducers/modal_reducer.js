import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            return action.form;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default ModalReducer;