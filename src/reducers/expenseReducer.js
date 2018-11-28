import { GET_EXPENSES, GET_EXPENSE, ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from "../constants/action-type";

const initialState = {
  expenses: [],
  id: '',
  description: '',
  date: '',
  amount: '',
  user_id: ''
};

const expenseReducer = (state = initialState, action) => {
  let expenses
  let expense
  switch (action.type) {
    case GET_EXPENSES:
      expenses = [...action.payload]
      return { ...state, expenses }
    case GET_EXPENSE:
      expense = action.payload
      return { ...state, expense }
    case ADD_EXPENSE:
      expenses = [...state.expenses, action.payload]
      return { ...state, expenses }
    case EDIT_EXPENSE:
      expense = action.payload
      return { ...state, expense }
    case DELETE_EXPENSE:
      expense = action.payload
      return { ...state, expense }
    default:
      return state;
  }
}
export default expenseReducer;
