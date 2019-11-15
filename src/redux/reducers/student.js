const initialState = {
  isLoading: false,
  students: null,
};

export default function user(state = initialState, action) {
  switch(action.type){
    case 'GET_STUDENTS':
    return Object.assign({}, state, {
      isLoading: true,
    });
    case 'GET_STUDENTS_SUCCESS':
    return Object.assign({}, state, {
      isLoading: false,
      students: action.payload.data
    });

    default: return state;
  }
}
