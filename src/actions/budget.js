import {
  GET_BUDGETS,
  GET_BUDGET,
  ADD_BUDGET,
  EDIT_BUDGET,
  DELETE_BUDGET,
} from '../constants/action-type'

export const getBudgets = (dispatch) => {
  fetch('http://localhost:3000/budgets')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: GET_BUDGETS, payload: data })
    })
}

export const getBudget = (budget, dispatch) => {
  fetch()

  // dispatch({ type: GET_BUDGET, payload: data })
}

export const addBudget = (budget, dispatch) => {
  fetch('http://localhost:3000/budgets', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(budget)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      dispatch({ type: ADD_BUDGET, payload: data })
  })
}

export const editBudget = (budget, dispatch) => {
  fetch()

  // dispatch({ type: EDIT_BUDGET, payload: data })
}

export const deleteBudget = (budget, dispatch) => {
  // console.log(budget);
  fetch(`http://localhost:3000/budgets/${budget.id}`, {
    method: 'DELETE'
  })
}
