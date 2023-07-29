import React from "react";

const ContactData = ({ Contact }) => {
  return (
    <>
      <tr className="align-middle">
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
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ContactData;
