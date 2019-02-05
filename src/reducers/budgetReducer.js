import { GET_BUDGETS, ADD_BUDGET, EDIT_BUDGET, DELETE_BUDGET } from "../constants/action-type";

const initialState = {
  budgets: []
};

const budgetReducer = (state = initialState, action) => {
  let budgets
  switch (action.type) {

    case GET_BUDGETS:
      budgets = action.payload
      return { ...state, budgets }

    case ADD_BUDGET:
      budgets = [...state.budgets, action.payload]
      return { ...state, budgets }

    case EDIT_BUDGET:
      budgets = [...state.budgets].map(budget => {
        if (budget.id === action.payload.id ) {
          return action.payload
        } else {
          return budget
        }
      })
      return { ...state, budgets }

    case DELETE_BUDGET:
      budgets = [...state.budgets].filter(budget => {
        if (budget.id !== action.payload.id ) {
          return budget
        } else {
          return null
        }
      })
      return { ...state, budgets }
    default:
      return state;
  }
}
export default budgetReducer;
