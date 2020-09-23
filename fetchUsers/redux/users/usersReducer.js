import { FETCH_USERS_REQUEST } from "./usersTypes";

const initialState = { loading: false, users: [], error: "" };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default usersReducer;
