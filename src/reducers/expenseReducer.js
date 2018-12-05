import { GET_EXPENSES, ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from "../constants/action-type";

const initialState = {
  expenses: []
};

const expenseReducer = (state = initialState, action) => {
  let expenses
  let expense
  switch (action.type) {

    case GET_EXPENSES:
      expenses = [...action.payload]
      return { ...state, expenses }

    case ADD_EXPENSE:
      expenses = [...state.expenses, action.payload]
      return { ...state, expenses }

    case EDIT_EXPENSE:
      expenses = [...state.expenses].map(expense => {
        if (expense.id === action.payload.id) {
          return action.payload
        } else {
          return expense
        }
      })
        return {...state, expenses}

    case DELETE_EXPENSE:
    expenses = [...state.expenses].filter(expense => {
      if (expense.id !== action.payload.id ) {
        return expense
      }
    })
    return { ...state, expenses }

  default:
    return state;
  }
}
export default expenseReducer;
