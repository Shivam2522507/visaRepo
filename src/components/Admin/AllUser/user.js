import React from "react";

const UserData = ({ User }) => {
  return (
    <>
      <tr className="align-middle">
        <td>{User._id}</td>
        <td>{User.email}</td>
        <td>{User.date}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger shadow-none btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserData;
