import { combineReducers } from 'redux'
import userReducer from './userReducer'
import expenseReducer from './expenseReducer'
import budgetReducer from './budgetReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
  userReducer,
  expenseReducer,
  budgetReducer,
  categoryReducer
})
export default rootReducer
