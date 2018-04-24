import {createStore, combineReducers} from 'redux'

import authReducer from './reducers/auth'
import messageReducer from './reducers/messages'

const rootReducer = combineReducers({authReducer, messageReducer})

const store = createStore(rootReducer)

export default store