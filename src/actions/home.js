import {
  ADD_USER,
  LOGIN,
  GET_PROFILE,
  EDIT_PROFILE,
  LOGOUT,
  GET_BUDGETS,
  GET_CATEGORIES,
  GET_EXPENSES
} from '../constants/action-type'

export const addUser = (user, dispatch) => {
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
      localStorage.setItem('jwt', data.jwt)
      const { budgets, categories, expenses } = data.user
      dispatch({ type: ADD_USER, payload: user })
      dispatch({ type: GET_BUDGETS, payload: budgets})
      dispatch({ type: GET_CATEGORIES, payload: categories})
      dispatch({ type: GET_EXPENSES, payload: expenses})
    })
}

export const login = (user, dispatch) => {
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
      localStorage.setItem('jwt', data.jwt)
      const { budgets, categories, expenses } = data.user
      let user = {
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        email: data.user.email
      }
      dispatch({ type: LOGIN, payload: user })
      dispatch({ type: GET_BUDGETS, payload: budgets})
      dispatch({ type: GET_CATEGORIES, payload: categories})
      dispatch({ type: GET_EXPENSES, payload: expenses})
    })
}

export const userProfile = (dispatch) => {
  fetch(`http://localhost:3000/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  })
  .then(response => response.json())
  .then(data => {
    const { budgets, categories, expenses } = data.user
    let user = {id: data.user.id, first_name: data.user.first_name, last_name: data.user.last_name, email: data.user.email}
    dispatch({ type: GET_PROFILE, payload: user })
    dispatch({ type: GET_BUDGETS, payload: budgets})
    dispatch({ type: GET_CATEGORIES, payload: categories})
    dispatch({ type: GET_EXPENSES, payload: expenses})
  })
}

export const editUser = (user, dispatch) => {
  fetch(`http://localhost:3000/users/${user.id}/edit`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    let user = {
      first_name: data.user.first_name,
      last_name: data.user.last_name,
      email: data.user.email,
      password: data.user.password
    }
    dispatch({ type: EDIT_PROFILE, payload: user })
  })
}

export const logout = (user, dispatch) => {
  fetch('http://localhost:3000/logout', {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    dispatch({ type: LOGOUT, payload: user })
    localStorage.removeItem('jwt')
  })
}
