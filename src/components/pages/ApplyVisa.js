import React, { useState, useEffect } from "react";
import "../inc/css/ApplyVisa.css";
import whatsappIcon from "../images/whatsappIcon.png";
import creditCardIMG from "../images/credit-card-img.png";
import googleDocsIMG from "../images/google-docs-img.png";
import passportIMG from "../images/passport-img.png";
import {
  ArrowRight,
  Upload,
} from "react-bootstrap-icons";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getVisaCard,
  getVisaCardDetails,
} from "../../actions/visaAction";
import { useAlert } from "react-alert";
import Loader from "../inc/Loader/Loader";
import "../inc/css/VisaForm.css";
import { addMainTravelerData } from "../../actions/applyVisaAction";
import AddCoTraveler from "./addCoTraveler";
import OtherFormFields from "./otherFormFields";
import { getRoe } from "../../actions/roeActions";

function ApplyVisa() {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error, visaCards } = useSelector((state) => state.visaCards);
  const { visaCard } = useSelector((state) => state.VisaCardDetails);
  const { isMainTravelerAdded, mainTravelerId } = useSelector(
    (state) => state.mainTraveler
  );
  const roeData = useSelector(state => state.roe.roe[0]?.roe);
  const { isAuthenticated,user } = useSelector((state) => state.user);
  
  const alert = useAlert();
  const VisaCardId = params.id;

  const Navigate = useNavigate();



  const visaCardName = visaCard ? visaCard.name : null;

  const [showStep2Form, setShowStep2Form] = useState(false);
  const handleStep2NextButtonClick = () => {
    setShowStep2Form(true);
  };


  const [visaType, setVisaType] = useState("");
  const [onwordDate, setOnwordDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [numberOfPassenger, setNumberOfPassenger] = useState("");
  const [mainTravelerTitle, setMainTravelerTitle] = useState("");
  const [mainTravelerFirstName, setMainTravelerFirstName] = useState("");
  const [mainTravelerLastName, setMainTravelerLastName] = useState("");
  const [mainTravelerDOB, setMainTravelerDOB] = useState("");
  const [mainTravelerNationality, setMainTravelerNationality] = useState("");
  const [mainTravelerPassportNo, setMainTravelerPassportNo] = useState("");
  const [mainTravelerContactNo, setMainTravelerContactNo] = useState("");
  const [mainTravelerEmail, setMainTravelerEmail] = useState("");
  const [photograph, setPhotograph] = useState("");
  const [passport, setpassport] = useState("");
  const [qualifyingCriteria, setqualifyingCriteria] = useState("");
  const [addressProof, setaddressProof] = useState("");
  const [panCard, setPANCard] = useState("");
  const [returnTicket, setreturnTicket] = useState("");
  const [hotelConfirmation, sethotelConfirmation] = useState("");

  const [photographFile, setPhotographFile] = useState("");
  const [passportFile, setpassportFile] = useState("");
  const [qualifyingCriteriaFile, setqualifyingCriteriaFile] = useState("");
  const [addressProofFile, setaddressProofFile] = useState("");
  const [PANCardFile, setPANCardFile] = useState("");
  const [returnTicketFile, setreturnTicketFile] = useState("");
  const [hotelConfirmationFile, sethotelConfirmationFile] = useState("");

  const photographHandleFile = (e) => {
    setPhotograph(e.target.files[0]);
    setPhotographFile(e.target.files[0].name);
  };
  const passportHandleFile = (e) => {
    setpassport(e.target.files[0]);
    setpassportFile(e.target.files[0].name);
  };
  const qualifyingCriteriaHandleFile = (e) => {
    setqualifyingCriteria(e.target.files[0]);
    setqualifyingCriteriaFile(e.target.files[0].name);
  };
  const addressProofHandleFile = (e) => {
    setaddressProof(e.target.files[0]);
    setaddressProofFile(e.target.files[0].name);
  };
  const PANCardHandleFile = (e) => {
    setPANCard(e.target.files[0]);
    setPANCardFile(e.target.files[0].name);
  };
  const returnTicketHandleFile = (e) => {
    setreturnTicket(e.target.files[0]);
    setreturnTicketFile(e.target.files[0].name);
  };
  const hotelConfirmationHandleFile = (e) => {
    sethotelConfirmation(e.target.files[0]);
    sethotelConfirmationFile(e.target.files[0].name);
  };


if(returnDate!==""){
  if(onwordDate >= returnDate){
    alert.error("Error in Return Date");
  }
}

  
 
  if(visaType === ""){
    setVisaType(VisaCardId);
  }
useEffect(() => {
 
  if (isAuthenticated === false) {
    Navigate("/login");
  }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
   if(visaType){
      dispatch(getVisaCardDetails(visaType))
    }
    dispatch(getVisaCard());
    dispatch(getRoe());
    
  }, [dispatch,isAuthenticated,Navigate, error,visaType, alert]);


 
  const visaCardPrice = visaCard ? visaCard.price : 0;
  const totalPassenger = numberOfPassenger ? numberOfPassenger : 0;
 

  var totalPrice = visaCardPrice * roeData * totalPassenger;
  console.log(totalPrice);







  
  const handleMainTravelerSubmit = async (e) => {
    e.preventDefault();
    try {
      const mainTravelerData = new FormData();
      mainTravelerData.append("userId", user._id);
      mainTravelerData.append("visaType", visaType);
      mainTravelerData.append("onwardDate", onwordDate);
      mainTravelerData.append("returnDate", returnDate);
      mainTravelerData.append("numberOfPassengers", numberOfPassenger);
      mainTravelerData.append("title", mainTravelerTitle);
      mainTravelerData.append("firstName", mainTravelerFirstName);
      mainTravelerData.append("lastName", mainTravelerLastName);
      mainTravelerData.append("dob", mainTravelerDOB);
      mainTravelerData.append("nationality", mainTravelerNationality);
      mainTravelerData.append("passportNo", mainTravelerPassportNo);
      mainTravelerData.append("contactNo", mainTravelerContactNo);
      mainTravelerData.append("email", mainTravelerEmail);
      mainTravelerData.append("photograph", photograph);
      mainTravelerData.append("passport", passport);
      mainTravelerData.append("qualifyingCriteria", qualifyingCriteria);
      mainTravelerData.append("addressProof", addressProof);
      mainTravelerData.append("panCard", panCard);
      mainTravelerData.append("returnTicket", returnTicket);
      mainTravelerData.append("hotelConfirmation", hotelConfirmation);
      mainTravelerData.append("totalPrice", totalPrice);

      dispatch(addMainTravelerData(mainTravelerData));
    } catch (error) {
      console.error("Error adding travelers:", error);
    }
  };







  useEffect(() => {
    if (isMainTravelerAdded) {
      alert.success("main Traveler Added Successfully");
      console.log(mainTravelerId);
    }
   
  }, [alert, isMainTravelerAdded, mainTravelerId]);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-light">
          <form onSubmit={handleMainTravelerSubmit}>
          <div className="container-fluid p-0 m-0 bg-light">
            <div className="container pt-5">
              <h2 className="text-center mb-5">
                UNITED ARAB EMIRATES <span> Visa Online</span>
              </h2>
              <div className="card p-4">
                <h6>Why get a visa from us?</h6>
                <ul className="d-flex w-100 mt-3 p-2">
                  <li>Best prices</li>
                  <li className="ms-5">Faster processing</li>
                  <li className="ms-5">Zero hassle</li>
                </ul>
              </div>
              <div className="row justify-content-between align-items-center mt-5">
                <div className="col-lg-8">
                  <div className="card p-3 Visa-Type-card">
                    <h5 className="m-0">Visa-Type</h5>
                    <p className="mb-3 mt-2">Select Stay Duration</p>
                    <select
                      class="form-select form-select-lg mb-2 shadow-none"
                      aria-label=".form-select-lg example"
                      onChange={(e) => setVisaType(e.target.value)}
                    >
                      {visaCard ? (
                        <option value={visaCard._id} selected>
                          {" "}
                          {visaCardName}
                        </option>
                      ) : (
                        ""
                      )}
                      {visaCards &&
                        visaCards.map((visaCards) => (
                          <option key={visaCards._id} value={visaCards._id}>
                            {visaCards.name}
                          </option>
                        ))}
                    </select>
                    <h6>Visa processing takes 5-7 working days</h6>
                    <h5 className="mt-2">Instructions:</h5>
                    <p className="m-0 Instructions-para">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aliquid, Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Aliquid, Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Aliquid, tempore magnam
                      omnis sint totam soluta quasi rerum labore nobis adipisci
                      ipsum illum aspernatur maiores incidunt eum, nulla
                      architecto cupiditate ex. Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Aliquid, tempore magnam
                      omnis sint totam soluta quasi rerum labore nobis adipisci
                      ipsum illum aspernatur maiores incidunt eum, nulla
                      architecto cupiditate ex.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-md-3 mt-3">
                  <div className="card p-4 get-visa-steps">
                    <h5 className="mb-3">STEPS TO GET YOUR VISA</h5>
                    <div className="d-flex">
                      <div className="icon">
                        <img
                          src={googleDocsIMG}
                          alt="googleDocsIMG"
                          class="googleDocsIMG me-3"
                        />
                      </div>
                      <div className="text">
                        <p className="text-head m-0">Upload Documents</p>
                        <p className="text-para">
                          Upload soft copy of below mentioned documents and get
                          your visa verified
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="icon">
                        <img
                          src={creditCardIMG}
                          alt="googleDocsIMG"
                          class="googleDocsIMG me-3"
                        />
                      </div>
                      <div className="text">
                        <p className="text-head m-0">Pay Online</p>
                        <p className="text-para">
                          Complete your purchase using a paymode of your choice
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="icon">
                        <img
                          src={passportIMG}
                          alt="passportIMG"
                          class="passportIMG me-3"
                        />
                      </div>
                      <div className="text">
                        <p className="text-head m-0">Get Your Visa</p>
                        <p className="text-para">
                          Keep track of your visa status and get visa on mail.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-steps mt-5 mb-5 p-4 d-flex justify-content-between align-items-center">
                <div className="steps d-flex justify-content-center align-items-center">
                  <div className="steps-no me-2 text-center" id="step-1">
                    1
                  </div>
                  <p className="m-0">Itinerary</p>
                </div>
                <div className="steps-arrow d-flex align-items-center">
                  <ArrowRight />
                </div>
                <div className="steps d-flex justify-content-center align-items-center">
                  <div className="steps-no me-2 text-center" id="step-2">
                    2
                  </div>
                  <p className="m-0">Traveller Details</p>
                </div>
                <div className="steps-arrow d-flex align-items-center">
                  <ArrowRight />
                </div>
                <div className="steps d-flex justify-content-center align-items-center">
                  <div className="steps-no me-2 text-center" id="step-3">
                    3
                  </div>
                  <p className="m-0">Upload Documents</p>
                </div>
                <div className="steps-arrow d-flex align-items-center">
                  <ArrowRight />
                </div>
                <div className="steps d-flex justify-content-center align-items-center">
                  <div className="steps-no me-2 text-center" id="step-4">
                    4
                  </div>
                  <p className="m-0">Make Payment</p>
                </div>
              </div>
              <div className="whatapp-icon fixed-bottom">
                {" "}
                <Link to="https://wa.me/8826450975" class="nav-link ">
                  <img src={whatsappIcon} alt="whatsappIcon" />
                </Link>
              </div>
              <div className="container">
                <div className="card mt-4 pb-5">
                  <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                    <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">
                      1
                    </div>
                    Itinerary
                  </div>
                  <div
                    className="row justify-content-center p-lg-0 p-md-0 p-3"
                    id="step-1-form"
                  >
                    <div className="col-lg-3 col-md-3 col-6">
                      Onward Date
                      <input
                        name="OnwordDate"
                        required
                        type="date"
                        class="form-control shadow-none  mt-2"
                        onChange={(e) => setOnwordDate(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      Return Date
                      <input
                        name="ReturnDate"
                        required
                        type="date"
                        class="form-control shadow-none  mt-2"
                        onChange={(e) => setReturnDate(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-md-0 mt-3">
                      No of Passengers
                      <input
                        name="Passenger"
                        required
                        type="number"
                        class="form-control shadow-none  mt-2"
                        onChange={(e) => setNumberOfPassenger(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-1 col-md-1 col-6 d-flex  Step-1-Next-btn">
                      <button
                        type="button"
                        name="Step-1-Next"
                        class="btn btn-success"
                        onClick={handleStep2NextButtonClick}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                {showStep2Form ? (
                  <>
                    <div className="card mt-4  pb-4">
                      <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                        <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">
                          2
                        </div>
                        Travellers Details
                      </div>

                      <div
                        className="row justify-content-center p-lg-0 p-md-3 p-3 pb-5"
                        id="step-2-form"
                      >
                        <div className="col-lg-1 col-md-4 d-flex align-items-end">
                          <select
                            id="Title"
                            name="Title"
                            onChange={(e) =>
                              setMainTravelerTitle(e.target.value)
                            }
                          >
                            <option>Title :</option>
                            <option value="Mr">Mr.</option>
                            <option value="Ms">Ms.</option>
                            <option value="Mrs">Mrs.</option>
                          </select>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end">
                          <input
                            name="FirstName"
                            required
                            type="text"
                            class="form-control shadow-none  mt-2"
                            placeholder="First Name"
                            onChange={(e) =>
                              setMainTravelerFirstName(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end mt-3">
                          <input
                            name="LastName"
                            required
                            type="text"
                            class="form-control shadow-none  mt-2"
                            placeholder="Last Name"
                            onChange={(e) =>
                              setMainTravelerLastName(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 d-flex align-items-end mt-3">
                          <input
                            name="dob"
                            required
                            type="date"
                            placeholder="DOB"
                            class="form-control shadow-none  mt-2"
                            onChange={(e) => setMainTravelerDOB(e.target.value)}
                          />
                        </div>
                        <div className="col-lg-5 col-md-6 col-6 d-flex align-items-end mt-lg-5 mt-md-5 mt-3">
                          <input
                            name="Nationality"
                            required
                            type="text"
                            placeholder="Nationality"
                            class="form-control shadow-none"
                            onChange={(e) =>
                              setMainTravelerNationality(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-lg-5 col-md-4 mt-lg-5 mt-md-5 d-flex align-items-end mt-3">
                          <input
                            name="PassportNo"
                            required
                            type="number"
                            id="PassportNo"
                            class="form-control shadow-none"
                            placeholder="Passport No"
                            onChange={(e) =>
                              setMainTravelerPassportNo(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                          <input
                            name="ContactNo"
                            required
                            type="tel"
                            maxLength="10"
                            class="form-control shadow-none"
                            placeholder="Contact No"
                            onChange={(e) =>
                              setMainTravelerContactNo(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                          <input
                            name="Email"
                            required
                            type="email"
                            class="form-control shadow-none"
                            placeholder="Email"
                            onChange={(e) =>
                              setMainTravelerEmail(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="card mt-4 pb-4">
                      <div className="card-head pt-4  d-flex  align-items-center">
                        <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">
                          3
                        </div>
                        Upload Documents
                      </div>
                    </div>
                    <div className="card mt-3 p-lg-5 p-md-5 p-3">
                      <div className="upload-doc d-flex justify-content-between align-items-center">
                        <div className="doc-title">
                          <h4>
                            <span className="text-success">1</span>. Clear
                            colored Passport Size Photograph.
                          </h4>
                          <p className="doc-desc">*Description--------</p>
                        </div>
                        <div className="upload-inp">
                          <span id="file-chosen-Photograph">
                            {photographFile}
                          </span>
                          <div>
                            <input
                              type="file"
                              id="Photograph"
                              name="Photograph"
                              hidden
                              onChange={photographHandleFile}
                            />
                            <label for="Photograph">
                              Upload <Upload className="ms-2" size={20} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <hr />
                      </div>
                      <div className="upload-doc d-flex justify-content-between align-items-center">
                        <div className="doc-title">
                          <h4>
                            <span className="text-success">2</span>. Clear
                            colored copy of Front and Last page of Indian
                            passport.{" "}
                          </h4>
                          <p className="doc-desc">*Description--------</p>
                        </div>
                        <div className="upload-inp">
                          <span id="file-chosen-passport">{passportFile}</span>
                          <div>
                            <input
                              type="file"
                              id="passport"
                              name="passport"
                              hidden
                              onChange={passportHandleFile}
                            />
                            <label for="passport">
                              Upload <Upload className="ms-2" size={20} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <hr />
                      </div>
                      <div className="upload-doc d-flex justify-content-between align-items-center">
                        <div className="doc-title">
                          <h4>
                            <span className="text-success">3</span>. Documents
                            supporting any of the qualifying criteria mentioned
                            above.{" "}
                          </h4>
                          <p className="doc-desc">*Description--------</p>
                        </div>
                        <div className="upload-inp">
                          <span id="file-chosen-qualifying-criteria">
                            {qualifyingCriteriaFile}
                          </span>
                          <div>
                            <input
                              type="file"
                              id="qualifyingCriteria"
                              name="qualifyingCriteria"
                              hidden
                              onChange={qualifyingCriteriaHandleFile}
                            />
                            <label for="qualifyingCriteria">
                              Upload <Upload className="ms-2" size={20} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <hr />
                      </div>
                      <div className="upload-doc d-flex justify-content-between align-items-center">
                        <div className="doc-title">
                          <h4>
                            <span className="text-success">4</span>. Current
                            Address proof other than Passport.{" "}
                          </h4>
                          <p className="doc-desc">*Description--------</p>
                        </div>
                        <div className="upload-inp">
                          <span id="file-chosen-Address-proof">
                            {addressProofFile}
                          </span>
                          <div>
                            <input
                              type="file"
                              id="addressProof"
                              name="addressProof"
                              hidden
                              onChange={addressProofHandleFile}
                            />
                            <label for="addressProof">
                              Upload <Upload className="ms-2" size={20} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <hr />
                      </div>
                      <div className="upload-doc d-flex justify-content-between align-items-center">
                        <div className="doc-title">
                          <h4>
                            <span className="text-success">5</span>. Copy of PAN
                            Card.{" "}
                          </h4>
                          <p className="doc-desc">*Description--------</p>
                        </div>
                        <div className="upload-inp">
                          <span id="file-chosen-PAN-Card">{PANCardFile}</span>
                          <div>
                            <input
                              type="file"
                              id="PANCard"
                              name="PANCard"
                              hidden
                              onChange={PANCardHandleFile}
                            />
                            <label for="PANCard">
                              Upload <Upload className="ms-2" size={20} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <hr />
                      </div>
                      <div className="upload-doc d-flex justify-content-between align-items-center">
                        <div className="doc-title">
                          <h4>
                            <span className="text-success">6</span>. Return
                            Journey Ticket copy.{" "}
                          </h4>
                          <p className="doc-desc">*Description--------</p>
                        </div>
                        <div className="upload-inp">
                          <span id="file-chosen-Return-Ticket">
                            {returnTicketFile}
                          </span>
                          <div>
                            <input
                              type="file"
                              id="returnTicket"
                              name="returnTicket"
                              hidden
                              onChange={returnTicketHandleFile}
                            />
                            <label for="returnTicket">
                              Upload <Upload className="ms-2" size={20} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <hr />
                      </div>
                      <div className="upload-doc d-flex justify-content-between align-items-center">
                        <div className="doc-title">
                          <h4>
                            <span className="text-success">7</span>. Hotel
                            confirmation.{" "}
                          </h4>
                          <p className="doc-desc">*Description--------</p>
                        </div>
                        <div className="upload-inp">
                          <span id="file-chosen-Hotel-Confirmation">
                            {hotelConfirmationFile}
                          </span>
                          <div>
                            <input
                              type="file"
                              id="hotelConfirmation"
                              name="hotelConfirmation"
                              hidden
                              onChange={hotelConfirmationHandleFile}
                            />
                            <label for="hotelConfirmation">
                              Upload <Upload className="ms-2" size={20} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 mb-2">
                        <hr />
                      </div>
                      <div className="px-4 d-flex justify-content-end align-items-center">
                        <button
                          type="submit"
                          name="Step-2-Next"
                          class="btn btn-success"
                          // onClick={handleMainTravelerSubmit}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          </form>
          {isMainTravelerAdded ? numberOfPassenger === "1" ? <OtherFormFields/> : <AddCoTraveler/> : ""}
          {/* { numberOfPassenger === "1" ? <OtherFormFields/> : <><AddCoTraveler/><OtherFormFields/></>} */}
        </div>
      )}
    </>
  );
}
export default ApplyVisa;
