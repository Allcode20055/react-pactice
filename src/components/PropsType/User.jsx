import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <>
      {/* <h2>{props.newUser}</h2>
      <h2>{props.newId}</h2> */}

      <h2>{props.newUser.name}</h2>
      <h4>{props.newUser.id}</h4>
    </>
  );
};

User.propTypes = {
  //   newUser: PropTypes.string,
  //   newId: PropTypes.number,

  newUser: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
};

// User.defaultProps = {
//   newUser: "hii i am piyas",
//   newId: 1,
// };

export default User;
