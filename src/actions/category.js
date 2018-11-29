import {
  GET_CATEGORIES,
  GET_CATEGORY,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from '../constants/action-type'

export const getCategories = (dispatch) => {
 fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      dispatch({ type: GET_CATEGORIES, payload: data })
    })
}

export const getCategory = (category, dispatch) => {
  fetch()

  // dispatch({ type: GET_CATEGORY, payload: data })
}

export const addCategory = (category, dispatch) => {
  return fetch('http://localhost:3000/categories', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      dispatch({ type: ADD_CATEGORY, payload: data })
      return data
    })
}

export const editCategory = (category, dispatch) => {
  fetch()

  // dispatch({ type: EDIT_CATEGORY, payload: data })
}

export const deleteCategory = (category, dispatch) => {
  // console.log(category);
  return fetch(`http://localhost:3000/categories/${category.id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: DELETE_CATEGORY, payload: data })
      return data
    })
}
