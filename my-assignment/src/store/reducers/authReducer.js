const initState = {
  authError: "new"
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: 'Login Success'
      }
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        authError: 'new'
      }
    default:
      return state;
  }
}

export default authReducer;