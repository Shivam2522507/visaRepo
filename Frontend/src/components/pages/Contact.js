import React, { useState, useEffect } from "react";
// import PostServices from "../../services/PostServices";
import {GeoAltFill,TelephoneFill,EnvelopeAtFill} from "react-bootstrap-icons"
import {clearErrors, conatctAction} from "../../actions/contactAction"
import { useDispatch,useSelector } from "react-redux";
// import Loader from "../inc/Loader/Loader";
import { useAlert } from "react-alert";
import { CONTACT_USER_RESET } from "../../constants/contactConstants";



function ContactUs() {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { error, contactSend } = useSelector((state) => state.contact);
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const day = new Date().toLocaleString("en-US", { day: "2-digit" });
  const year = new Date().getFullYear();
  const currentDate = day + "-" + month + "-" + year;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("contact", contact);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("date", currentDate);

    dispatch(conatctAction(formData));
   
    event.target.reset();

  
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (contactSend) {
      alert.success("Your response has been submitted successfully.");
      dispatch({
        type: CONTACT_USER_RESET
      })
    }
  }, [dispatch, error, alert,contactSend]);
  return (
    <div className="container">
      <div className="my-5 px-4">
        <h2 className="fw-bold h-fonts text-center">CONTACT US</h2>
        <p className="text-center mt-3 mb-5">
          For the first time ever, Merkabah Group brings to you a unique fully
          automated, state-of-the-art platform that allows you to apply for your
          visa online
          <br />
          All you need to do is fill in our online form, scan and upload your
          documents and we’ll take care of the rest
        </p>

        <div class="row">
          <div class="col-lg-6 col-md-6 mb-5 px-4">
            <div class="bg-white rounded shadow p-4">
              <iframe
                class="w-100 rounded mb-4"
                height="320px"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.051261801536!2d77.35115015364312!3d28.584004073325712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59ece6f7ebf%3A0xfc36e92c0dfd73d6!2sSector%2034%2C%20Noida%2C%20Uttar%20Pradesh%20201307!5e0!3m2!1sen!2sin!4v1697026865914!5m2!1sen!2sin"
                loading="lazy"
                title="address"
              ></iframe>
              <h5>Branch Office Address</h5>
              <a
                href="https://www.google.com/maps/search/1002,+Amber+Towers+Supertech,+Sector+34+,Noida+,UP+%E2%80%93+201301/@28.5839949,77.3557422,16z/data=!3m1!4b1?entry=ttu"
                
                class="d-inline-block text-decoration-none text-dark mb-1 d-flex align-items-center"
              >
                <GeoAltFill className="me-2" size={22}/> 1002, Amber Towers Supertech, Sector 34 ,Noida ,UP – 201301

              </a>
              <h5 className="mt-2">Address</h5>
              <a
                href="https://www.google.com/maps/place/Sector+9,+Rohini,+Delhi,+110085/@28.7148494,77.104213,15z/data=!3m1!4b1!4m10!1m2!2m1!1sHO+:+78,+PLOT+NO.+50,+BLOCK-B,+SECTOR-9,+ROHINI,+New+Delhi,+North+West+Delhi,%C2%A0Delhi,%C2%A0110085!3m6!1s0x390d015d09338e77:0x449dedc0a9a93bf3!8m2!3d28.7161663!4d77.1240672!15sCl1ITyA6IDc4LCBQTE9UIE5PLiA1MCwgQkxPQ0stQiwgU0VDVE9SLTksIFJPSElOSSwgTmV3IERlbGhpLCBOb3J0aCBXZXN0IERlbGhpLMKgRGVsaGkswqAxMTAwODWSAQxzdWJsb2NhbGl0eTLgAQA!16s%2Fg%2F1thxtlqb?entry=ttu"
                
                class="d-inline-block text-decoration-none text-dark mb-1 d-flex align-items-center"
              >
                <GeoAltFill className="me-2" size={30}/> HO : 78, PLOT NO. 50, BLOCK-B,
                SECTOR-9, ROHINI, New Delhi, North West Delhi, Delhi, 110085
              </a>
              <h5 class="mt-2">Call us</h5>
              <a
                href="tel: 9315350283"
                class="d-inline-block mb-1 text-decoration-none text-dark d-flex align-items-center"
              >
                <TelephoneFill className="me-2"/> 9315350283
              </a>

              <h5 class="mt-2">Email</h5>
              <a
                href="mailto:life@merkabahgroup.com "
                class="d-inline-block mb-1 text-decoration-none text-dark d-flex align-items-center"
              >
                <EnvelopeAtFill className="me-2"/> life@merkabahgroup.com{" "}
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 px-4">
            <div class="bg-white rounded shadow p-4">
              <form
                onSubmit={handleContactSubmit}
                className="footer-contact-form"
              >
                <h3 class="modal-title mt-2  mb-2">Contact Us</h3>
                <div className="row">
                  <div class="col-lg-12 col-md-6 mb-1">
                    <label class="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      class="form-control shadow-none"
                      placeholder="First Name"
                      onChange={(event) => setFirstName(event.target.value)}
                      required
                    />
                  </div>
                  <div class="col-lg-12 col-md-6 mb-1">
                    <label class="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      class="form-control shadow-none"
                      placeholder="Last Name"
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </div>
                  <div class="col-lg-12 col-md-6 mb-1">
                    <label class="form-label">Contact No.</label>
                    <input
                      type="number"
                      name="contact"
                      class="form-control shadow-none"
                      placeholder="Please Enter Contact No."
                      onChange={(event) => setContact(event.target.value)}
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
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div class="col-lg-12 mb-lg-3  mb-1">
                    <label class="form-label">Message</label>
                    <textarea
                      class="form-control shadow-none"
                      name="message"
                      rows="6"
                      placeholder="Write your message"
                      onChange={(event) => setMessage(event.target.value)}
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
    </div>
  );
}
export default ContactUs;
