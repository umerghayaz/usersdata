import * as ActionTypes  from "../Constants/UserConstants";

const initialState = {
    data: [],
    editdata:[],
    isLoading: false,
    errMess:null,
    messageapi: null
}

export const Userreducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case ActionTypes.USERS_GET:
            return {...state, isLoading: true, data: action.payload, errMess: null,messageapi:null}
        case ActionTypes.CUSTOMERS_GET_EDIT:
                return {...state, isLoading: true, editdata: action.payload,errMess: null,messageapi:null}
        case ActionTypes.USERS_LOADING:
            return {...state, isLoading: true}
        case ActionTypes.USERS_SUCCESS:
            return {...state, isLoading: false, messageapi: action.payload, errMess: null}
        case ActionTypes.USERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, messageapi: null}
    }
}