const initialState = {
  isLoading: false,
  user: null,
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch(action.type){
    case 'SIGN_IN':
    return Object.assign({}, state, {
      isLoading: true,
    });
    case 'SIGN_IN_FAIL':
    return Object.assign({}, state, {
      authError: 'login failed',
      isLoggedIn: false,
      isLoading: false,
    });
    case 'SIGN_IN_SUCCESS':
    return Object.assign({}, state, {
      authError: 'login Success',
      isLoggedIn: true,
      isLoading: false,
    });

    default: return state;
  }
}
