import {combineReducers} from 'redux'
import user from './user'
import videos from './videos'

const rootReducer = combineReducers( {
    user,
    videos,
})

export default rootReducer