import * as myActions from '../ActionDescriptions.js'

export default function user(state = {isLoggedIn: false}, action) {
    switch (action.type) {
            case myActions.USER_LOGIN:
                return {
                    ...state,isLoggedIn: true
                }
            
            case myActions.USER_LOGOUT:
                return {
                  state
                 }

            default:
                return {isLoggedIn: false}
    }
}    
