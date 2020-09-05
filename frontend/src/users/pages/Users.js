import React, { Fragment } from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "U-10010",
      name: "Muhammad",
      image:
        "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      places: 3,
    },
  ];

  return (
    <Fragment>
      <UsersList items={USERS} />
    </Fragment>
  );
};

export default Users;
