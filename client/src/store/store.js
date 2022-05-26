import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers/reducer'
import reduxThunk from 'redux-thunk'

const initState= {}
const enhancer = window._REDUX_DEVTOOL_EXTENSION_COMPOSE || compose
const store = createStore(reducer, initState, enhancer(applyMiddleware(reduxThunk)) )

export default store