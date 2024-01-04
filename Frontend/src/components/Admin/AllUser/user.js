import React from "react";
import { deleteUserAction } from "../../../actions/allUserActions";
import { useDispatch } from "react-redux";

const UserData = ({ User , index}) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteUserAction(User._id))
   };
  return (
    <>
      <tr className="align-middle">
        <td>{index}</td>
        <td>{User._id}</td>
        <td>{User.email}</td>
        <td>{User.date}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger shadow-none btn-sm"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserData;
