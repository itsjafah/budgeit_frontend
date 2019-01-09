import {
  ADD_BUDGET,
  EDIT_BUDGET,
  DELETE_BUDGET,
} from '../constants/action-type'

export const addBudget = (budget, dispatch) => {
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
      dispatch({ type: ADD_BUDGET, payload: data })
  })
}

export const editBudget = (budget, dispatch) => {
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
      dispatch({ type: EDIT_BUDGET, payload: data })
    })
}

export const deleteBudget = (budget, dispatch) => {
  fetch(`http://localhost:3000/budgets/${budget.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  })
  dispatch({ type: DELETE_BUDGET, payload: budget })
}
