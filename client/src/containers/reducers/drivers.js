import * as myActions from '../ActionDescriptions.js'

export default function drivers(state = {}, action) {
    switch (action.type) {
            case myActions.ADD_DRIVER:
                return {
                    state
                }

            default:
                return {driver: 'none'}
    }
}    
