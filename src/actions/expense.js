import {
  GET_EXPENSES,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
} from '../constants/action-type'

// export const getExpenses = (dispatch) => {
//   fetch('http://localhost:3000/expenses', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('jwt')}`
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data)
//       dispatch({ type: GET_EXPENSES, payload: data })
//     })
// }

export const addExpense = (expense, dispatch) => {
  console.log(expense);
  return fetch('http://localhost:3000/expenses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: ADD_EXPENSE, payload: data })
    })
}

export const editExpense = (expense, dispatch) => {
  console.log(expense);
  return fetch(`http://localhost:3000/expenses/${expense.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch({ type: EDIT_EXPENSE, payload: data })
    })
}

export const deleteExpense = (expense, dispatch) => {
  // console.log(expense);
  return fetch(`http://localhost:3000/expenses/${expense.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: DELETE_EXPENSE, payload: expense })
    })
}
