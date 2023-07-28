import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import {useAlert} from "react-alert";

function Navbar() {
  const { isAuthenticated} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();
  function Logout(){
    dispatch(logoutUser());
    alert.success("Logout Successfully")
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white px-lg-3 py-lg-2 shadow-sm sticky-top">
        <div class="container-fluid">
          <Link
            to="/"
            class="navbar-brand ms-lg-5 ms-md-3 fw-bold fs-3 d-flex align-items-center"
          >
            <img src={logo} alt="Logo" class="d-inline-block align-text-top" />
          </Link>

          <button
            class="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/ApplyVisa" class="nav-link active">
                  Apply Visa
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/TrackApllication" class="nav-link active">
                  Track Apllication
                </Link>
              </li>
              <li class="nav-item">
                <a
                  href="/"
                  class="nav-link me-2"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#contact"
                >
                  Contact
                </a>
              </li>
              {isAuthenticated ? (
                <div class="btn-group">
                            <button type="button" class="btn btn-outline-light shadow-none dropdown-toggle border-none myaccount-btn" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                               My Account
                            </button>
                            <ul class="dropdown-menu dropdown-menu-lg-end">
                                <li><Link to="/Profile" class="dropdown-item">Profile</Link></li>
                                <li><Link to="/" onClick={Logout} class="dropdown-item text-danger">Logout</Link></li>
                                
                            </ul>
                        </div>
              
                
              ) : (
                <li class="nav-item">
                  <Link to="/Login" class="nav-link active">
                    <u> Login </u>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="contact"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <form method="post">
              <div class="modal-header">
                <h3 class="modal-title d-flex align-items-center text-success">
                  {/* <PersonRolodex className="me-2" size={33} /> */}
                  Contact Us
                </h3>
                <button
                  type="reset"
                  class="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div class="col-lg-6 mb-3">
                    <label class="form-label">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      class="form-control shadow-none"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      class="form-control shadow-none"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label class="form-label">Contact No.</label>
                    <input
                      type="number"
                      name="phone"
                      class="form-control shadow-none"
                      placeholder="Please Enter Contact No."
                      required
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label class="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control shadow-none"
                      placeholder="Please Enter Email Address"
                      required
                    />
                  </div>
                  <div class="col-lg-12 mb-4">
                    <label class="form-label">Message</label>
                    <textarea
                      class="form-control shadow-none"
                      name="message"
                      rows="3"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <div class="d-flex align-items-center justify-content-center mb-2">
                    <button
                      type="submit"
                      name="mess_send"
                      class="btn btn-success"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
