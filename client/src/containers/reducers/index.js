import * as myActions from '../ActionDescriptions.js'
import {combineReducers} from 'redux'
import user from './user'
import drivers from './drivers'

const rootReducer = combineReducers( {
    user,
    drivers,
})

export default rootReducer