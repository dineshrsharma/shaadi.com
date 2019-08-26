export const signIn = (credentials) => {
  return (dispatch, getState) => {
    if (credentials.user === 'abc' && credentials.password === '123') {
      dispatch({ type: 'LOGIN_SUCCESS' });
    } else {
      dispatch({ type: 'LOGIN_ERROR' });
    }
  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  }
}