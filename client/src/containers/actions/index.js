import * as a from '../ActionDescriptions.js'
import  * as api from '../../data/api.js'

export function userLogin(user) {
    return { 
        type: a.USER_LOGIN,
        user: user
    }
}

export function userLogout() {
    return { 
        type: a.USER_LOGOUT,
    }
}

export function postVideo(video) {
  
    return (dispatch) => {
            
            api.postVideo(video).then( (newVideo) => {
                dispatch(putVideo(newVideo));
            }).catch( (err) => {
                console.log(err)
            })       
    };
 }

 export function putVideo(video) {
    return {
        type: a.ADD_VIDEO,
        video,
    }
}