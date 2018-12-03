import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from '../constants/action-type'

export const addCategory = (category, dispatch) => {
  fetch('http://localhost:3000/categories', {
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
  fetch(`http://localhost:3000/categories/${category.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  })
  dispatch({ type: DELETE_CATEGORY, payload: category })
}
