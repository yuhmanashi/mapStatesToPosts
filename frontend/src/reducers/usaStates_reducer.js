import { RECEIVE_STATES, RECEIVE_STATE} from "../actions/usaStates_actions";
import {merge} from 'lodash'

const StatesReducer = ( state = {all:[]}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state)
    const nextState = merge({}, state)
    switch (action.type) {
        case RECEIVE_STATES:
            nextState.all = action.USAStates.data;
            return nextState;
        case RECEIVE_STATE:
            let result =[] 
            for (let i = 0; i < nextState.all.length; i++) {
                if (nextState.all[i]._id === action.USAState.data._id) {

                    result.push(nextState.all[i])
                }
            }

            return result;
            
        default: 
            return state;
    }
}


export default StatesReducer;