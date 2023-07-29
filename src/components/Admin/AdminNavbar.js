import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { logoutAdmin } from "../../actions/adminAction";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

function AdminNav() {
  const dispatch = useDispatch();
  const alert = useAlert();
  function Adminlogout(){
    dispatch(logoutAdmin());
    alert.success("Logout Successfully")
  }
  return (
    <>
      <div class="container-fluid bg-dark text-light p-3 d-flex align-items-center justify-content-between sticky-top">
        <h3 class="mb-0 h-fonts">MERKABAH</h3>
        <Link onClick={Adminlogout} class="btn btn-light btn-sm">
          LOG OUT
        </Link>
      </div>

      <div
        class="col-lg-2 bg-dark border-top border-3 border-secondary"
        id="dashboard-menu"
      >
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid flex-lg-column align-items-stretch">
            <h4 class="mt-2 text-light">ADMIN PANEL</h4>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#adminDropdown"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse flex-column align-items-stretch mt-2"
              id="adminDropdown"
            >
              <ul class="nav nav-pills flex-column">
                
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/AllUser">
                    AllUser
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/AdminVisaCard">
                    Visa Card
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/AdminRoe">
                    Roe
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/AllContacts">
                    Contacts
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/AdminProfile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default AdminNav;
