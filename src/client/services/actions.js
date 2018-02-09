//MODULES
import axios from 'axios'
//import { endpointURL } from 'config'

//TYPES
export const UPDATE_SELECTED = 'updateSelected'
export const ONLINE = 'onilne'
export const OFFLINE = 'offline'
export const SHOW_SNACKBAR = 'showSnackbar'
export const HIDE_SNACKBAR = 'hideSnackbar'
export const SHOW_POPUP = 'showPopup'
export const HIDE_POPUP = 'hidePopup'

//ACTIONS
export const updateSelected = (id, selected) => ({ type: UPDATE_SELECTED, id, selected })
export const online = () => ({type: ONLINE})
export const offline = () => ({type: OFFLINE})
export const showSnackbar = (label, type, action) => ({
  type: SHOW_SNACKBAR,
  payload: {
      label, type, action
  }
})
export const showPopup = () => ({type: SHOW_POPUP})
export const hidePopup = () => ({type: HIDE_POPUP})
export const hideSnackbar = () => ({ type: HIDE_SNACKBAR })