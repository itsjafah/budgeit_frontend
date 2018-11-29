import {
  GET_EXPENSES,
  GET_EXPENSE,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
} from '../constants/action-type'

export const getExpenses = (dispatch) => {
  fetch('http://localhost:3000/expenses')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: GET_EXPENSES, payload: data })
    })
}

export const getExpense = (expense, dispatch) => {
  fetch()

  // dispatch({ type: GET_EXPENSE, payload: data })
}

export const addExpense = (expense, dispatch) => {
  return fetch('http://localhost:3000/expenses', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: ADD_EXPENSE, payload: data })
      return data
  })
}

export const editExpense = (expense, dispatch) => {
  // console.log(expense.id);
  return fetch(`http://localhost:3000/expenses/${expense.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: EDIT_EXPENSE, payload: data })
      return data
    })
}

export const deleteExpense = (expense, dispatch) => {
  // console.log(expense);
  return fetch(`http://localhost:3000/expenses/${expense.id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: DELETE_EXPENSE, payload: data })
      return data
    })
}
