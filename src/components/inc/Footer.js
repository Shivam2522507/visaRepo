import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import sepratorIMG from "../images/seprator.svg";

function Footer() {
  return (
    <div className="bg-light">
              <img src={sepratorIMG} alt="seprator" class="footer-seprator-img mt-5" />
      <div className="container pb-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-6 d-flex mt-lg-0 mt-md-0 mt-4 footer-cont  align-items-center">
            <div className="left-cont">
              <Link to="/" class="navbar-brand d-flex align-items-center">
                <img
                  src={logo}
                  alt="Logo"
                  class="d-inline-block align-text-top"
                />
              </Link>
              <ul class="navbar-nav left-cont-ul ms-auto mt-4 footer-ul mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/ApplyVisa" class="nav-link active p-0">
                    Apply Visa
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/TrackApllication" class="nav-link active p-0">
                    Track Apllication
                  </Link>
                </li>
                <li class="nav-item">
                  <a
                    href="/"
                    class="nav-link p-0"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#contact"
                  >
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link active p-0">
                    Sitemap
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link active p-0">
                    Support
                  </Link>
                </li>
              </ul>

              <div className="social-link d-flex mt-4">
                <Link to="/" class="nav-link active p-0 me-2">
                  <Facebook className="social-link-icon"/>
                </Link>
                <Link to="/" class="nav-link active p-0 me-2">
                  <Instagram className="social-link-icon" />
                </Link>
                <Link to="/" class="nav-link active p-0">
                  <Twitter  className="social-link-icon"/>
                </Link>
              </div>
              <p className="p-0">Copyright ©2023 Merkabah.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
            <form method="post" className="footer-contact-form">
              <h3 class="modal-title mt-2  mb-2 text-success">
              Contact Us
              </h3>
                <div className="row">
                  <div class="col-lg-6 col-md-6 mb-1">
                    <label class="form-label">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      class="form-control shadow-none"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 mb-1">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      class="form-control shadow-none"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="col-lg-12 col-md-6 mb-1">
                    <label class="form-label">Contact No.</label>
                    <input
                      type="number"
                      name="phone"
                      class="form-control shadow-none"
                      placeholder="Please Enter Contact No."
                      required
                    />
                  </div>
                  <div class="col-lg-12 col-md-6 mb-1">
                    <label class="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control shadow-none"
                      placeholder="Please Enter Email Address"
                      required
                    />
                  </div>
                  <div class="col-lg-12 mb-lg-3  mb-1">
                    <label class="form-label">Message</label>
                    <textarea
                      class="form-control shadow-none"
                      name="message"
                      rows="2"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <div class="d-flex footer-sub-btn align-items-center justify-content-end mb-2">
                    <button
                      type="submit"
                      name="mess_send"
                      class="btn btn-success"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
