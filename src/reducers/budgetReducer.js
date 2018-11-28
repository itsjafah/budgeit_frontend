import { GET_BUDGETS, GET_BUDGET, ADD_BUDGET, EDIT_BUDGET, DELETE_BUDGET } from "../constants/action-type";

const initialState = {
  budgets: [],
  id: '',
  description: '',
  amount: '',
  start_date: '',
  end_date: '',
  user_id: ''
};

const budgetReducer = (state = initialState, action) => {
  let budgets
  let budget
  switch (action.type) {
    case GET_BUDGETS:
      budgets = action.payload
      return { ...state, budgets }
    case GET_BUDGET:
      budget = action.payload
      return { ...state, budget }
    case ADD_BUDGET:
      budget = action.payload
      return { ...state, budget }
    case EDIT_BUDGET:
      budget = action.payload
      return { ...state, budget }
    case DELETE_BUDGET:
      budget = action.payload
      return { ...state, budget }
    default:
      return state;
  }
}
export default budgetReducer;
