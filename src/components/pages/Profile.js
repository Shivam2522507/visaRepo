import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../inc/Loader/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  loadUser,
  updateUser,
  updateUserPassword,
} from "../../actions/userAction";
import { deleteUserAction } from "../../actions/allUserActions";
import { useAlert } from "react-alert";
import {
  USER_PASSWORD_UPDATE_RESET,
  USER_UPDATE_RESET,
} from "../../constants/userConstants";
import "../inc/css/Login.css";
import { Modal, Button } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import { DELETE_USER_RESET } from "../../constants/allUserConstants";
import { logoutUser } from "../../actions/userAction";

const Profile = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const { error, isUpdated } = useSelector((state) => state.updateUser);
  const { isUpdatePassword } = useSelector((state) => state.updateUserPassword);
  const { isDeleted } = useSelector((state) => state.deleteUser);

  const [updateEmail, setUpdateEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNEWPassword] = useState("");
  const [confmPassword, setConfmPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const showEditEmailModal = () => {
    setUpdateEmail(user.email);
  };

  const updateUserEmail = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("email", updateEmail);

    dispatch(updateUser(myForm));
  };
  const handleUpdatePassword = (e) => {
    e.preventDefault();

    if (!(newPassword === confmPassword)) {
      alert.error("Password and ConformPassword did not match");
    } else {
      const myForm = new FormData();
      myForm.set("oldPassword", oldPassword);
      myForm.set("newPassword", newPassword);
      myForm.set("confirmPassword", confmPassword);
      dispatch(updateUserPassword(myForm));
      handleClose();
    }
  };

  const handleDelete = () => {
    dispatch(deleteUserAction(user._id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated === false) {
      Navigate("/login");
    }
    if (isUpdated) {
      alert.success("Email Updated Successfully");
      dispatch(loadUser());
      // window.location.reload();
      dispatch({
        type: USER_UPDATE_RESET,
      });
    }
    if (isUpdatePassword) {
      alert.success("Password Updated Successfully");
      dispatch(loadUser());
      // window.location.reload();
      dispatch({
        type: USER_PASSWORD_UPDATE_RESET,
      });
    }
    if (isDeleted) {
      alert.success("User Deleted Successfully");
      dispatch(logoutUser())
      dispatch({
        type: DELETE_USER_RESET,
      })

    }
  }, [
    Navigate,
    alert,
    isUpdated,
    dispatch,
    isDeleted,
    error,
    isUpdatePassword,
    isAuthenticated,
  ]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid bg-light">
          <div className="container pt-4">
            <div className="card Profile-card p-4 shadow">
              <div className="Profile-head d-flex justify-content-between mb-3">
                <h1 className="fw-bold mb-0">My Profile</h1>
                <div>
                  <p className="text-secondary">Joined On: {user.date}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="text-secondary">Profile Name</h5>
                  <p className="m-0 fw-bold text-secondary">{user.email}</p>
                  
                  <Link
                    className="btn btn-success mt-2 ps-3 pe-3 me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-email"
                    onClick={showEditEmailModal}
                  >
                    Change Email{" "}
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger mt-2 ps-3 pe-3 shadow-none "
                    onClick={handleDelete}
                  >
                    Delete Profile
                  </button>
                  
                </div>
                <div className="d-flex justify-content-end align-items-end">
                  <button
                    type="button"
                    name="changePassword"
                    id="changePassword"
                    class="btn btn-secondary ps-4 pe-4"
                    onClick={handleShow}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow mt-5">
              <div className="card-body p-3 pb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold mb-0 text-dark">
                    Primary <br /> Aapplicant
                  </h6>
                  <p className="text-secondary fw-bold mb-0">
                    Date Of Application: mm/dd/yyyy
                  </p>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <p className="text-secondary mb-0">
                      Application Number: **********
                    </p>
                    <p className="text-secondary mb-0">Co-Traveler(Name): </p>
                    <p className="text-secondary mb-0 mt-3">
                      Insurance Opted: Yes
                    </p>
                    <p className="text-secondary mb-0">
                      Okay To Board Opted: Yes
                    </p>
                    <p className="text-secondary mb-0 mt-3">Visa Price: </p>
                    <p className="text-secondary mb-0">Processing Fees: </p>
                    <p className="text-secondary mb-0">GST: </p>
                    <p className="text-secondary mb-0">Total Amount: </p>
                  </div>
                  <div className="d-flex justify-content-end align-items-end">
                    <button
                      type="button"
                      name="status"
                      id="status"
                      class="btn btn-dark ms-4 ps-4 pe-4 "
                    >
                      Status
                    </button>
                    <button
                      type="button"
                      name="download"
                      id="status"
                      class="btn btn-success ms-4 ps-4 pe-4"
                    >
                      <Download className="me-1 mb-1" /> Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion mt-5 pb-4" id="accordionExample">
              <div class="accordion-item shadow">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#PastApplication"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Past Application
                  </button>
                </h2>
                <div
                  id="PastApplication"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body pb-4">
                    <div className="card shadow mt-3">
                      <div className="card-body p-3 pb-4">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-bold mb-0 text-dark">
                            Primary <br /> Aapplicant
                          </h6>
                          <p className="text-secondary fw-bold mb-0">
                            Date Of Application: mm/dd/yyyy
                          </p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <div>
                            <p className="text-secondary mb-0">
                              Application Number: **********
                            </p>
                            <p className="text-secondary mb-0">
                              Co-Traveler(Name):{" "}
                            </p>
                            <p className="text-secondary mb-0 mt-3">
                              Insurance Opted: Yes
                            </p>
                            <p className="text-secondary mb-0">
                              Okay To Board Opted: Yes
                            </p>
                            <p className="text-secondary mb-0 mt-3">
                              Visa Price:{" "}
                            </p>
                            <p className="text-secondary mb-0">
                              Processing Fees:{" "}
                            </p>
                            <p className="text-secondary mb-0">GST: </p>
                            <p className="text-secondary mb-0">
                              Total Amount:{" "}
                            </p>
                          </div>
                          <div className="d-flex justify-content-end align-items-end">
                            <button
                              type="button"
                              name="track"
                              id="status"
                              class="btn btn-dark ms-4 ps-4 pe-4"
                            >
                              Status
                            </button>
                            <button
                              type="button"
                              name="download"
                              id="status"
                              class="btn btn-success ms-4 ps-4 pe-4"
                            >
                              <Download className="me-1 mb-1" /> Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow mt-3">
                      <div className="card-body p-3 pb-4">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-bold mb-0 text-dark">
                            Primary <br /> Aapplicant
                          </h6>
                          <p className="text-secondary fw-bold mb-0">
                            Date Of Application: mm/dd/yyyy
                          </p>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <div>
                            <p className="text-secondary mb-0">
                              Application Number: **********
                            </p>
                            <p className="text-secondary mb-0">
                              Co-Traveler(Name):{" "}
                            </p>
                            <p className="text-secondary mb-0 mt-3">
                              Insurance Opted: Yes
                            </p>
                            <p className="text-secondary mb-0">
                              Okay To Board Opted: Yes
                            </p>
                            <p className="text-secondary mb-0 mt-3">
                              Visa Price:{" "}
                            </p>
                            <p className="text-secondary mb-0">
                              Processing Fees:{" "}
                            </p>
                            <p className="text-secondary mb-0">GST: </p>
                            <p className="text-secondary mb-0">
                              Total Amount:{" "}
                            </p>
                          </div>
                          <div className="d-flex justify-content-end align-items-end">
                            <button
                              type="button"
                              name="track"
                              id="status"
                              class="btn btn-dark ms-4 ps-4 pe-4"
                            >
                              Status
                            </button>
                            <button
                              type="button"
                              name="download"
                              id="status"
                              class="btn btn-success ms-4 ps-4 pe-4"
                            >
                              <Download className="me-1 mb-1" /> Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <form onSubmit={updateUserEmail}>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdatePassword}>
            <div className="form-group mb-3">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="text"
                className="form-control shadow-none"
                id="oldPassword"
                name="oldPassword"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="text"
                className="form-control shadow-none"
                id="newPassword"
                name="newPassword"
                onChange={(e) => setNEWPassword(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="ConformPassword">Conform Password</label>
              <input
                type="text"
                className="form-control shadow-none"
                id="ConformPassword"
                name="ConformPassword"
                onChange={(e) => setConfmPassword(e.target.value)}
              />
            </div>

            <hr />
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleClose}
                type="reset"
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
