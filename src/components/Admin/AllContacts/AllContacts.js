import React, { useEffect } from "react";
import { clearErrors,getAllContact } from "../../../actions/contactAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContactData from "./contact";
import Loader from "../../inc/Loader/Loader";
import { useAlert } from "react-alert";
import { DELETE_CONTACT_RESET } from "../../../constants/contactConstants";

function AllContacts() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const alert = useAlert();
  const { loading, error, Contacts } = useSelector((state) => state.allContact);
  const { isAuthenticatedAdmin } = useSelector((state) => state.admin);
  const { isDeleted } = useSelector((state) => state.deleteContact);

  useEffect(() =>{
    if (isDeleted) {
      alert.success("Contact Deleted Successfully");
      dispatch({
        type: DELETE_CONTACT_RESET,
      });
      dispatch(getAllContact());
    }
  }, [dispatch, alert,isDeleted])

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticatedAdmin === false) {
      Navigate("/adminLogin");
    }
    if (isAuthenticatedAdmin) {
      dispatch(getAllContact());
    }
  }, [dispatch, Navigate, error, alert, isAuthenticatedAdmin]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-lg-10 ms-auto p-4 overflow-hidden text-center me-1"
              id="main-content"
            >
              <h3 className="mb-4">All Contacts</h3>
         
            <div className="card border-0 shadow mb-4">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover border text-center">
                    <thead>
                      <tr className="bg-dark text-light">
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     {Contacts && Contacts.map((Contact) => <ContactData Contact={Contact}/>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllContacts;
