import { userTypes } from "../_types";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")),
};

export function user(state = initialState, action) {
  switch (action.type) {
    case userTypes.GET_USERS_REQUEST:
      return {
        ...state,
      };
    case userTypes.EDIT_USERS_SUCCESS:
    case userTypes.GET_USERS_SUCCESS:
    case userTypes.ADD_USER_SUCCESS:
    case userTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state?.users,
      };
    case userTypes.GET_USERS_FAILURE:
    case userTypes.ADD_USER_FAILURE:
    case userTypes.EDIT_USERS_FAILURE:
    case userTypes.DELETE_USER_FAILURE:
      return {
        error: action.error,
      };
    case userTypes.EDIT_USERS_REQUEST:
      return {
        ...state,
        users: state?.users?.map((x, i) =>
          // eslint-disable-next-line
          x.id == action?.formdata?.id
            ? {
                ...x,
                name: action.formdata?.name,
                username: action.formdata?.username,
                email: action.formdata?.email,
                city: action.formdata?.city,
              }
            : x
        ),
      };
    case userTypes.ADD_USER_REQUEST:
      return {
        ...state,
        users: state?.users?.concat({
          id: state?.users?.[state?.users?.length - 1]?.id + 1,
          name: action?.formdata?.name,
          username: action.formdata?.username,
          email: action.formdata?.email,
          address: {
            city: action.formdata?.city,
          },
        }),
      };
    case userTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        users: state?.users?.filter((x) => x?.id !== action.id),
      };
    default:
      return state;
  }
}
