import React from "react";
import { deleteContactAction } from "../../../actions/contactAction";
import { useDispatch } from "react-redux";

const ContactData = ({ Contact,index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
   dispatch(deleteContactAction(Contact._id))
  };
  return (
    <>
      <tr className="align-middle">
        <td>{index}</td>
        <td>{Contact._id}</td>
        <td>{Contact.firstName}</td>
        <td>{Contact.lastName}</td>
        <td>{Contact.contact}</td>
        <td>{Contact.email}</td>
        <td>{Contact.message}</td>
        <td>{Contact.date}</td>
       
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

export default ContactData;
