import {applyMiddleware, createStore, combineReducers, compose} from "redux"
import { logger } from 'redux-logger'
import {thunk} from "redux-thunk"
import { Userreducer } from "../Reducers/UserReducers"



export const ConfigureStore = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(combineReducers({
        Userreducer
       

    }), composeEnhancers(applyMiddleware(thunk, logger)))
}