import { GET_CATEGORIES, ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY } from "../constants/action-type";

const initialState = {
  categories: []
};

const categoryReducer = (state = initialState, action) => {
  let categories
  switch (action.type) {

    case GET_CATEGORIES:
      categories = action.payload
      return { ...state, categories }


    case ADD_CATEGORY:
      categories = [...state.categories, action.payload]
      return { ...state, categories }

    case EDIT_CATEGORY:
      categories = [...state.categories].map(category => {
        if (category.id === action.payload.id ) {
          return action.payload
        } else {
          return category
        }
      })
      return { ...state, categories }

    case DELETE_CATEGORY:
      categories = [...state.categories].filter(category => {
        if (category.id !== action.payload.id ) {
          return category
        }
      })
      return { ...state, categories }

    default:
      return state;
  }
}
export default categoryReducer;
