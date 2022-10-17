import axios from "axios";


export const getAllStates = () => {
    return axios.get(`api/USAStates/`)
}

export const getState = id => {
    return axios.get(`api/USAStates/${id}`)

}