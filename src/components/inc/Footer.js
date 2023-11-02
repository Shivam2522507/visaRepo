import React,{useState, useEffect} from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import sepratorIMG from "../images/seprator.svg";
import {useAlert} from "react-alert"
import {useDispatch,useSelector} from "react-redux";
import { clearErrors, conatctAction } from "../../actions/contactAction";
import Loader from "./Loader/Loader";
import { CONTACT_USER_RESET } from "../../constants/contactConstants";


function Footer() {
  
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const day = new Date().toLocaleString("en-US", { day : '2-digit'});
  const year = new Date().getFullYear();
  const currentDate = day+"-"+month+"-"+year;
  
  const alert = useAlert();
  const dispatch = useDispatch();


  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [contact,setContact] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const {error,loading,contactSend} = useSelector(state => state.contact)

  const handleContactSubmit = async(event) =>{
    event.preventDefault();

    const formData = new FormData();
  
    formData.set('firstName',firstName);
    formData.set('lastName',lastName);
    formData.set('contact',contact);
    formData.set('email',email);
    formData.set('message',message);
    formData.set('date',currentDate);

    dispatch(conatctAction(formData));
    event.target.reset();

  }


 useEffect(() =>{
  if(error){
      alert.error(error);
      dispatch(clearErrors());
  }
 if(contactSend){
  alert.success("Your response has been submitted successfully.")
  dispatch({
    type: CONTACT_USER_RESET
  })
 }

},[dispatch,error,alert,contactSend])


  return (
    <div className="bg-light">
        <img src={sepratorIMG} alt="seprator" class="footer-seprator-img mt-5" />
      <div className="container pb-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-6 order-lg-1 order-md-1 order-2 d-flex mt-lg-0 mt-md-0 mt-4 footer-cont  align-items-center">
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
                <Link to="/PrivacyPolicy#head" class="nav-link active p-0">
              Privacy Policy
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/TermsAndConditions#head" class="nav-link active p-0">
              Terms And Conditions
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/RefundPolicy#head" class="nav-link active p-0">
              RefundPolicy
                </Link>
                </li>
              </ul>

              <div className="social-link d-flex mt-4 mb-3">
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
          {loading?<Loader/>:(
          <div className="col-lg-4 col-md-6 order-lg-2 order-md-1 order-1 d-flex justify-content-center align-items-center">
            <form onSubmit={handleContactSubmit} className="footer-contact-form">
              <h3 class="modal-title mt-2  mb-2">
              Contact Us
              </h3>
                <div className="row">
                  <div class="col-lg-6 col-md-6 mb-1">
                    <label class="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      class="form-control shadow-none"
                      placeholder="First Name"
                      onChange={event=>setFirstName(event.target.value)}
                      required
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 mb-1">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      class="form-control shadow-none"
                      placeholder="Last Name"
                      onChange={event=>setLastName(event.target.value)}
                    />
                  </div>
                  <div class="col-lg-12 col-md-6 mb-1">
                    <label class="form-label">Contact No.</label>
                    <input
                      type="number"
                      name="contact"
                      class="form-control shadow-none"
                      placeholder="Please Enter Contact No."
                      onChange={event=>setContact(event.target.value)}
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
                      onChange={event=>setEmail(event.target.value)}
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
                      onChange={event=>setMessage(event.target.value)}
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
           )}
        </div>
      </div>
    </div>
  );
}
export default Footer;
