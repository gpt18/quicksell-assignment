import { ActionTypes } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_GROUPING:
      return { ...state, grouping: action.payload };
    case ActionTypes.SET_ORDERING:
      return { ...state, ordering: action.payload };
    default:
      return state;
  }
};

export default reducer;
