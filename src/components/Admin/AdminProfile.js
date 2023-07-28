import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../inc/Loader/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { clearErrors, loadAdmin, updateAdmin } from "../../actions/adminAction";
import { useAlert } from "react-alert";
import { ADMIN_UPDATE_RESET } from "../../constants/adminConstants";

const AdminProfile = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { admin, loading, isAuthenticatedAdmin } = useSelector(
    (state) => state.admin
  );
  const { error, isUpdated } = useSelector((state) => state.updateAdmin);

  const [updateEmail, setUpdateEmail] = useState("");

  const showEditEmailModal = () => {
    setUpdateEmail(admin.email);
  };

  const updateAdminEmail = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", updateEmail);

    dispatch(updateAdmin(myForm));
  };

  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch(clearErrors());
    }
    if (isAuthenticatedAdmin === false) {
      Navigate("/AdminLogin");
    }
    if(isUpdated) {
        alert.success("Email Updated Successfully");
        dispatch(loadAdmin());
        window.location.reload();
        dispatch({
            type: ADMIN_UPDATE_RESET
        })

    }
  }, [Navigate, isAuthenticatedAdmin,alert,isUpdated,dispatch,error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-light col-lg-10 ms-auto p-4 overflow-hidden text-center me-1">
          <div>
            <h4>Email</h4>
            <p>{admin.email}</p>
            <Link data-bs-toggle='modal' data-bs-target='#edit-email' onClick={showEditEmailModal}>Change Email </Link>
          </div>
          <div>
            <Link to="/password/update">Change Password </Link>
          </div>
        </div>
      )}
       <div
        className="modal fade"
        id="edit-email"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form onSubmit={updateAdminEmail}>
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Email</h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control shadow-none"
                      value={updateEmail}
                      onChange={(e) => setUpdateEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn text-secondary shadow-none"
                  data-bs-dismiss="modal"
                >
                  CANCEL
                </button>
                <button type="submit" className="btn text-success shadow-none">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminProfile;
