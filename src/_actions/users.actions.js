import { toast } from "material-react-toastify";
import { userService } from "../_services";
import { userTypes } from "../_types";

export const userActions = {
  getUsers,
  editUsers,
  addUsers,
  deleteUsers,
};

function getUsers() {
  return async (dispatch) => {
    dispatch(request());

    try {
      const users = await userService.getUsers();
      dispatch(success(users));
      localStorage.setItem("users", JSON.stringify(users?.data));
      return users;
    } catch (error) {
      dispatch(failure(error.toString()));
      return error.response;
    }
  };

  function request() {
    return { type: userTypes.GET_USERS_REQUEST };
  }
  function success(users) {
    return {
      type: userTypes.GET_USERS_SUCCESS,
      users,
    };
  }
  function failure(error) {
    return { type: userTypes.GET_USERS_FAILURE, error };
  }
}

function editUsers(formdata) {
  return async (dispatch) => {
    dispatch(request(formdata));

    try {
      dispatch(success());
      toast.success("Updated Successfully!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      // return users;
    } catch (error) {
      dispatch(failure(error.toString()));
      return error.response;
    }
  };

  function request(formdata) {
    return { type: userTypes.EDIT_USERS_REQUEST, formdata };
  }
  function success() {
    return {
      type: userTypes.EDIT_USERS_SUCCESS,
    };
  }
  function failure(error) {
    return { type: userTypes.EDIT_USERS_FAILURE, error };
  }
}

function addUsers(formdata) {
  return async (dispatch) => {
    dispatch(request(formdata));

    try {
      dispatch(success());
      toast.success("Added Successfully!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      // return users;
    } catch (error) {
      dispatch(failure(error.toString()));
      return error.response;
    }
  };

  function request(formdata) {
    return { type: userTypes.ADD_USER_REQUEST, formdata };
  }
  function success() {
    return {
      type: userTypes.ADD_USER_SUCCESS,
    };
  }
  function failure(error) {
    return { type: userTypes.ADD_USER_FAILURE, error };
  }
}

function deleteUsers(id) {
  return async (dispatch) => {
    dispatch(request(id));

    try {
      dispatch(success());
      toast.success("Deleted Successfully!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      // return users;
    } catch (error) {
      dispatch(failure(error.toString()));
      return error.response;
    }
  };

  function request(id) {
    return { type: userTypes.DELETE_USER_REQUEST, id };
  }
  function success() {
    return {
      type: userTypes.DELETE_USER_SUCCESS,
    };
  }
  function failure(error) {
    return { type: userTypes.DELETE_USER_FAILURE, error };
  }
}
