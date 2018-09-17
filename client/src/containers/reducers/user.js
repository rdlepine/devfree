import * as myActions from '../ActionDescriptions.js'

export default function user(state = {}, action) {
    switch (action.type) {
            case myActions.USER_LOGIN:
                return action.user
            
            case myActions.USER_LOGOUT:
                return {}

            default:
                return state
    }
}    
