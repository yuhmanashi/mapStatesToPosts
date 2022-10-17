import { GIVE_POST_ID } from '../actions/modal_info_actions';

const ModalPostInfoReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case GIVE_POST_ID:
            return action.postId;
        default:
            return state;
    }
}

export default ModalPostInfoReducer;