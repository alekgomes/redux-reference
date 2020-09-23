import { FETCH_USERS_REQUEST } from "./usersTypes";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
