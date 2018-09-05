import * as a from '../ActionDescriptions.js'

export function userLogin(user) {
    return { 
        type: a.USER_LOGIN,
        user: user
    }
}