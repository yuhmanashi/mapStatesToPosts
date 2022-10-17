import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_USERS:
            return action.users.data;
        case RECEIVE_USER:
            newState = action.user.data;
            return newState
        default:
            return state;
    }
}

export default UsersReducer;