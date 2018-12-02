import { ADD_USER, LOGIN, GET_PROFILE, EDIT_PROFILE, LOGOUT } from "../constants/action-type";

const initialState = {
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: ''
  }
};

const userReducer = (state = initialState, action) => {
  let user
  switch (action.type) {

    case ADD_USER:
      user = action.payload
      return { ...state, user }

    case LOGIN:
      user = action.payload
      return {...state, user }

    case GET_PROFILE:
      user = action.payload
      return {...state, user}

    case EDIT_PROFILE:
      user = action.payload
      return {...state, user}

    case LOGOUT:
      user = action.payload
      return initialState

    default:
      return state;
  }
}
export default userReducer;
