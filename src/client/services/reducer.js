//MODULES
import { combineReducers } from 'redux'

//ACTIONS
import { 
    UPDATE_SELECTED,
    OFFLINE,
    ONLINE,
    SHOW_SNACKBAR,
    HIDE_SNACKBAR,
    SHOW_POPUP,
    HIDE_POPUP,
} from './actions'

//REDUCER
const selectedReducer = (state = {}, action) => {
    if (action.type === UPDATE_SELECTED) {
        return { ...state, [action.id]: action.selected }
    } else { 
        return state
    }
}

const onlineReducer = (state = true, action) => {
    if (action.type === OFFLINE) return false
    else if (action.type === ONLINE) return true
    return state
}

let INITIAL_SNACKBAR = {
    active: false,
    action: 'Dismiss',
    label: 'Snackbar action cancel',
    type: 'cancel',
}

const snackbarReducer = (state = INITIAL_SNACKBAR, { type, payload }) => {
    if (type == SHOW_SNACKBAR) {
        return {
            active: true,
            action: payload.action || state.action,
            label: payload.label || state.label,
            type: payload.type || state.type,
        }
    } 
    if (type == HIDE_SNACKBAR) {
        return {
            ...state,
            active: false,
        }
    }
    return state
}

const isPopupReducer = (state = false, {type}) => {
    if (type === SHOW_POPUP) return true
    if (type === HIDE_POPUP) return false
    return state
}

//COMBINED
export default combineReducers({
    selected: selectedReducer,
    isOnline: onlineReducer,
    snackbar: snackbarReducer,
    isPopup: isPopupReducer,
})

//INI ADALAH STATE