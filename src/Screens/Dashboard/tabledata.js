import { Button } from "antd";
import { Link } from "react-router-dom";

export const columns = ({ handleEdit }) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    sorter: (a, b) => a.username.localeCompare(b.username),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Edit",
    render: (row) => (
      <Link to={`/edit-user/${row.id}`}>
        <Button
          type="primary"
          onClick={() => {
            console.log(row);
          }}
        >
          Edit
        </Button>
      </Link>
    ),
    width: "5%",
  },
  {
    title: "Delete",
    render: (row) => (
      <Button type="danger" onClick={() => handleEdit(row)}>
        Delete
      </Button>
    ),
    width: "5%",
  },
];
