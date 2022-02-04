import { Button } from "antd";
import React, { Fragment, useState, useMemo } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../_actions";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState({
    name: "",
    email: "",
    city: "",
    username: "",
  });

  const disabled = useMemo(
    () => !query.name || !query.city || !query.email || !query.username,
    [query.name, query.city, query.email, query.username]
  );

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    console.log(query);
    await dispatch(userActions.addUsers(query));
    navigate("/");

    // setTimeout(() => {
    //   dispatch(userActions.getUsers());
    // }, 500);
  };

  return (
    <Fragment>
      <div className="bg-gray-100 p-8 h-screen w-screen">
        <div
          className="flex flex-row items-center text-black hover:text-blue-600"
          onClick={() => navigate("/")}
        >
          <FaAngleLeft />
          <p className="ml-2 my-auto">BACK</p>
        </div>
        <form className="bg-white w-1/3 mx-auto p-8">
          <h1 className="text-center text-2xl font-bold">Create New User</h1>

          <div className="flex flex-col">
            <div className="flex flex-col font-bold">
              <label>Name:</label>
              <input
                type={"text"}
                value={query?.name}
                className="input-text"
                name="name"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="flex flex-col mt-4 font-bold">
              <label>Email:</label>
              <input
                type={"text"}
                value={query?.email}
                className="input-text"
                name="email"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="flex flex-col mt-4 font-bold">
              <label>Username:</label>
              <input
                type={"text"}
                value={query?.username}
                className="input-text"
                name="username"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="flex flex-col mt-4 font-bold">
              <label>City:</label>
              <input
                type={"text"}
                value={query?.city}
                className="input-text"
                name="city"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="mt-8 flex flex-row justify-end">
              <Button type="danger" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button
                type="primary submit"
                disabled={disabled}
                onClick={(e) => submit(e)}
                className="ml-4"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateUser;
