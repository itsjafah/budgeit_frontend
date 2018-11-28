import { GET_CATEGORIES, GET_CATEGORY, ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY } from "../constants/action-type";

const initialState = {
  categories: [],
  category: {
    id: '',
    title: '',
    color: ''
  }
};

const categoryReducer = (state = initialState, action) => {
  let categories
  let category
  switch (action.type) {
    case GET_CATEGORIES:
      categories = action.payload
      return { ...state, categories }
    case GET_CATEGORY:
      category = action.payload
      return { ...state, category }
    case ADD_CATEGORY:
      category = action.payload
      return { ...state, category }
    case EDIT_CATEGORY:
      category = action.payload
      return { ...state, category }
    case DELETE_CATEGORY:
      category = action.payload
      return { ...state, category }
    default:
      return state;
  }
}
export default categoryReducer;
