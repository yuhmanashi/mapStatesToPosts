import { getAllStates, getState } from "../util/usaState_api_util";

export const RECEIVE_STATES = 'RECEIVE_STATES'
export const RECEIVE_STATE = 'RECEIVE_STATE'

export const receiveStates = USAStates => ({
    type: RECEIVE_STATES,
    USAStates
});

export const receiveState = USAState => ({
    type: RECEIVE_STATE,
    USAState
})

export const fetchStates = () => dispatch => {
    return (
        getAllStates()
            .then(USAStates => dispatch(receiveStates(USAStates)))
            .catch(err => console.log(err))
    )
}
export const fetchState = USAState => dispatch => {
    return (
        getState(USAState)
            .then(USAState => dispatch(receiveState(USAState)))
        .catch(err => console.log(err))
    )
}