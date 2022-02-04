import { Button, Modal, Space, Spin, Table } from "antd";
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

          {userList ? (
            <div className="lg:px-8">
              <div className="flex flex-row w-full items-center justify-between mb-4">
                <h1>USER LIST</h1>
                <Button type="primary" onClick={() => navigate("/create-user")}>
                  + Add New
                </Button>
              </div>
              <Table
                {...{
                  dataSource,
                  scroll: { x: true },
                  pagination: { defaultPageSize: "5" },
                  columns: columns({
                    handleEdit: (row) => {
                      showModal();
                      setActive(row?.id);
                    },
                  }),
                }}
              />
            </div>
          ) : (
            <Space className="mt-8 w-full flex justify-center items-center">
              <Spin size="large" className="mt-20" />
            </Space>
          )}
        </div>
      </Fragment>
    </>
  );
};

export default Dashboard;
