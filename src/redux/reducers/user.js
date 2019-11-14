const initialState = {
  isLoading: false,
  user: null,
  isLoggedIn: false,
  credentials: {
    access_token: window.localStorage.getItem('user') || null,
  },
};


function setUserLocalStorage(headers) {
  localStorage.setItem('user', JSON.stringify(headers));
}

function removeUserLocalStorage() {
  localStorage.removeItem('user');
}

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
    case 'SIGN_IN_SUCCESS': {
      setUserLocalStorage(action.payload.data.token)
      return Object.assign({}, state, {
        authError: 'login Success',
        isLoggedIn: true,
        isLoading: false,
        user: action.payload.data.infoAccount,
        credentials: {
          access_token: action.payload.data.token,
        }
      });
    }
    case 'SIGN_OUT': {
      function removeUserLocalStorage() {
        localStorage.removeItem('user');
      }
      return state;
    }

    default: return state;
  }
}
