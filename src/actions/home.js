import {
  ADD_USER,
  LOGIN,
  GET_PROFILE,
  EDIT_PROFILE,
  LOGOUT
} from '../constants/action-type'

export const addUser = (user, dispatch) => {
  // console.log(user);
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: ADD_USER, payload: data })
    })
}

export const login = (user, dispatch) => {
  // console.log(user);
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: LOGIN, payload: data })
    })
}

export const userProfile = (user, dispatch) => {
  // console.log(user);
  fetch(`http://localhost:3000/users/1`)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    dispatch({ type: GET_PROFILE, payload: data })
  })
}

export const editUser = (user, dispatch) => {
  // console.log(user);
  fetch(`http://localhost:3000/users/${user.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    dispatch({ type: EDIT_PROFILE, payload: data })
  })
}

export const logout = (user, dispatch) => {
  // console.log(user);
  fetch('http://localhost:3000/logout', {
    method: 'DELETE'
  })
}
