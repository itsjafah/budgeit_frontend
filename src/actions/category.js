import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
} from '../constants/action-type'

export const addCategory = (category, dispatch) => {
  fetch('https://budgeit-backend.herokuapp.com/categories', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: ADD_CATEGORY, payload: data })
    })
}

export const deleteCategory = (category, dispatch) => {
  fetch(`https://budgeit-backend.herokuapp.com/categories/${category.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  })
  dispatch({ type: DELETE_CATEGORY, payload: category })
}
