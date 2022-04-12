const initialState = {
  data: {
    id: 0,
  },
  message: '',
  error: true,
  code: 0,
};
const DeleteScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DeleteScheduleReducer.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default DeleteScheduleReducer;
