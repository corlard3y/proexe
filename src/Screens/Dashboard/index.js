import { Button, Modal, Table } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userActions } from "../../_actions";
import { columns } from "./tabledata";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, [dispatch]);

  let userList = user?.users;

  const dataSource = userList?.map((item) => ({
    id: item.id,
    key: item.id,
    name: item?.name ? item.name : "-",
    username: item?.username ? item.username : "-",
    email: item?.email ? item.email : "-",
    city: item?.address?.city ? item.address.city : "-",
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [active, setActive] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(userActions.deleteUsers(active));
    handleCancel();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        // title=""
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this User?</p>
      </Modal>
      <Fragment>
        <div className="bg-gray-100 p-8 h-screen w-screen">
          <h1 className="text-center font-bold my-4 text-4xl">Dashboard</h1>

          <div className="px-8">
            <div className="flex flex-row w-full items-center justify-between mb-4">
              <h1>USER LIST</h1>
              <Button type="primary" onClick={() => navigate("/create-user")}>
                + Add New
              </Button>
            </div>
            {/* 
            {userList?.length > 0 ? (
              <table className="w-full mt-4 ">
                <thead className="border-b border-gray-100">
                  <tr className="h-12 bg-white my-4 rounded-t-md text-left">
                    <th className="px-4">
                      <span className="text-blue-600 text-sm">ID</span>
                    </th>
                    <th>
                      <span className="text-blue-600 text-sm">Name</span>
                    </th>
                    <th>
                      <span className="text-blue-600 text-sm">Username</span>
                    </th>
                    <th>
                      <span className="text-blue-600 text-sm">Email</span>
                    </th>
                    <th>
                      <span className="text-blue-600 text-sm">City</span>
                    </th>
                    <th>
                      <span className="text-blue-600 text-sm">Edit</span>
                    </th>
                    <th>
                      <span className="text-blue-600 text-sm">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userList?.map((item, i) => (
                    <tr
                      key={item?.id}
                      // className="h-12 bg-white rounded-b-md  text-left"
                      className="h-16 py-4 bg-white text-left border-b border-gray-100 text-xs lg:text-sm"
                    >
                      <td className="px-4">
                        <span className="text-sm">{item?.id}</span>
                      </td>
                      <td>
                        <span className="text-sm">{item?.name}</span>
                      </td>
                      <td>
                        <span className="text-sm">{item?.username}</span>
                      </td>
                      <td>
                        <span className="text-sm">{item?.email}</span>
                      </td>
                      <td>
                        <span className="text-sm">
                          {item?.address?.city ? item?.address?.city : "-"}
                        </span>
                      </td>
                      <td>
                        <span className="text-sm">
                          <Link to={`/edit-user/${item?.id}`}>
                            <Button type="primary">Edit</Button>
                          </Link>
                        </span>
                      </td>
                      <td>
                        <span
                          className="text-sm"
                          onClick={() => {
                            showModal();
                            setActive(item?.id);
                          }}
                        >
                          <Button type="danger">Delete</Button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="w-full lg:w-full h-auto bg-white mt-4 rounded-t-md text-center p-8">
                No data to show
              </div>
            )} */}

            <Table
              {...{
                dataSource,
                pagination: { defaultPageSize: "5" },
                //   pagination: {{ defaultPageSize: "5" }},
                columns: columns({
                  handleEdit: (row) => {
                    showModal();
                    console.log(row);
                    setActive(row?.id);
                  },
                }),
              }}
              //   showModal={showModal}
            />
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Dashboard;
