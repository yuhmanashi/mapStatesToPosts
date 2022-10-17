import { combineReducers } from 'redux';
import ModalPostInfoReducer from './modal_post_info_reducer';
import ModalCommentInfoReducer from './modal_comment_info_reducer';
import ModalReducer from './modal_reducer';

 const UIReducer = combineReducers({
    modal: ModalReducer,
    postId: ModalPostInfoReducer,
    commentId: ModalCommentInfoReducer
});

export default UIReducer;