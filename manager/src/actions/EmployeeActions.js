import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types.js'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()

  // When we create an employee, we're only concerned with sending the data to the firebase
  //  database. We're don't have to dispatch an action to the reducers since we're not displaying
  //  the employee yet. We only do that at the list of employees screen.
  // So, we have to return a fat-arrow function to satisfy redux-thunk
  return (dispatch) => {
    // /users/userId/employees is just a path to our json data store
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({
          type: EMPLOYEE_CREATE 
        })
        Actions.pop()
      })  // pop() is for moving the scene back to the previous scene  
  }
}