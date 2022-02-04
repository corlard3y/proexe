import axios from "axios";

export const userService = {
  getUsers,
};

async function getUsers() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await axios(
    `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`,
    requestOptions
  );

  return response;
}

// async function getSingleUser(id) {
//   const requestOptions = {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   };

//   const response = await axios(
//     `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data,${id}`,
//     requestOptions
//   );
//   return response;
// }
