import { GIVE_COMMENT_ID } from '../actions/modal_info_actions';

const ModalCommentInfoReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case GIVE_COMMENT_ID:
            return action.commentId;
        default:
            return state;
    }
}

export default ModalCommentInfoReducer;