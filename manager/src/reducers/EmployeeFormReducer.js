import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types.js'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // the [] isnt an array! Its KEY-INTERPOLATION. What is in [], is what you get
      return { ...state, [action.payload.prop]: action.payload.value }
    
    case EMPLOYEE_CREATE:
      return INITIAL_STATE
    
    default:
      return state
  }
}