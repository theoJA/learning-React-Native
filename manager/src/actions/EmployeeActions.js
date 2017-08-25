import {
  EMPLOYEE_UPDATE
} from './types.js'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}