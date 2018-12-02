import {
  GET_BUDGETS,
  ADD_BUDGET,
  EDIT_BUDGET,
  DELETE_BUDGET,
} from '../constants/action-type'

// export const getBudgets = (dispatch) => {
//   fetch('http://localhost:3000/budgets', {
//     method: 'GET',
//     body: {
//       Authorization: `Bearer ${localStorage.getItem('jwt')}`
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data)
//       dispatch({ type: GET_BUDGETS, payload: data })
//     })
// }

export const addBudget = (budget, dispatch) => {
  // debugger
  fetch('http://localhost:3000/budgets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(budget)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({ type: ADD_BUDGET, payload: data })
  })
}

export const editBudget = (budget, dispatch) => {
  // console.log(budget.id);
  return fetch(`http://localhost:3000/budgets/${budget.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(budget)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: EDIT_BUDGET, payload: data })
    })
}

export const deleteBudget = (budget, dispatch) => {
  // console.log(budget);
  fetch(`http://localhost:3000/budgets/${budget.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  })
  dispatch({ type: DELETE_BUDGET, payload: budget })
}
