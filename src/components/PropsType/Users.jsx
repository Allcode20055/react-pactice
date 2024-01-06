import React, { useState } from "react";
import User from "./user";

const Users = () => {
  //   const [newUser, setNewUser] = useState("piyas");
  //   const [newId, setNewId] = useState(101);

  const [user, setUser] = useState({
    name: "piyas",
    id: 1245,
  });

  return (
    <div>
      {/* <User newUser={newUser} newId={newId} /> */}
      <User newUser={user} />
    </div>
  );
};

export default Users;
