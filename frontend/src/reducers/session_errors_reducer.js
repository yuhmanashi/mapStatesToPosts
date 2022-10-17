import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    REMOVE_SESSION_ERRORS,
    RECEIVE_USER_SIGN_IN
  } from '../actions/session_actions';
  
  const _nullErrors = [];
  
  const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case REMOVE_SESSION_ERRORS:
        return _nullErrors;
      case RECEIVE_CURRENT_USER:
        return _nullErrors;
      case RECEIVE_USER_SIGN_IN:
        return _nullErrors;
      default:
        return state;
    }
  };
  
  export default SessionErrorsReducer;