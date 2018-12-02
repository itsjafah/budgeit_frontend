import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from '../constants/action-type'

// export const getCategories = (dispatch) => {
//   fetch('http://localhost:3000/categories', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('jwt')}`
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data)
//       dispatch({ type: GET_CATEGORIES, payload: data })
//     })
// }

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
      // console.log(data);
      dispatch({ type: ADD_CATEGORY, payload: data })
    })
}

export const editCategory = (category, dispatch) => {
  fetch()

  // dispatch({ type: EDIT_CATEGORY, payload: data })
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
