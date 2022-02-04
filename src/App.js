import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./Screens/Dashboard";
import { Fragment } from "react";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateUser from "./Screens/CreateUser";
import EditUser from "./Screens/EditUser";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <ToastContainer position="top-right" autoClose={3000} />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
