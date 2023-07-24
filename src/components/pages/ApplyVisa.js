import React , {  useState,useEffect }  from "react";
import "../inc/css/ApplyVisa.css";
import whatsappIcon from "../images/whatsappIcon.png";
import creditCardIMG from "../images/credit-card-img.png";
import googleDocsIMG from "../images/google-docs-img.png";
import passportIMG from "../images/passport-img.png";
import { ArrowRight } from "react-bootstrap-icons";
import VisaFormStep2 from "../inc/VisaFormStep2";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getVisaCard } from "../../actions/visaAction";
import { useAlert } from "react-alert";
import Loader from "../inc/Loader/Loader";


function ApplyVisa() {

    const dispatch = useDispatch();
  const { loading, error, visaCards } = useSelector((state) => state.visaCards);
  const alert = useAlert();
  useEffect(() => {

    if(error){
        alert.error(error);
        dispatch(clearErrors());
    }
    dispatch(getVisaCard());
  }, [dispatch, error , alert]);

  

  const [step2Form, setStep2Form] = useState("");
  const step2 = (e) => {
    setStep2Form(<VisaFormStep2 />);
  };
  return (
    <>
     {loading ? (
        <Loader/>
      ) : (
      <div className="container-fluid p-0 m-0 bg-light">
        <div className="container pt-5">
          <form>
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
                    >
                        
                        {visaCards && visaCards.map((visaCards) =>(
                                <option key={visaCards._id} value={visaCards.name}>
                                  {visaCards.name}
                                </option>
                         
                        ))}
                    </select>
                    <h6>Visa processing takes 5-7 working days</h6>
                    <h5 className="mt-2">Instructions:</h5>
                    <p className="m-0 Instructions-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Aliquid, Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aliquid, Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Aliquid, tempore magnam omnis sint totam
                        soluta quasi rerum labore nobis adipisci ipsum illum
                        aspernatur maiores incidunt eum, nulla architecto cupiditate
                        ex. Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aliquid, tempore magnam omnis sint totam soluta quasi
                        rerum labore nobis adipisci ipsum illum aspernatur maiores
                        incidunt eum, nulla architecto cupiditate ex.
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
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                        Return Date
                        <input
                        name="ReturnDate"
                        required
                        type="date"
                        class="form-control shadow-none  mt-2"
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-md-0 mt-3">
                        Passengers
                        <input
                        name="Passenger"
                        required
                        type="number"
                        class="form-control shadow-none  mt-2"
                        />
                    </div>
                    <div className="col-lg-1 col-md-1 col-6 d-flex  Step-1-Next-btn">
                        <button
                        type="submit"
                        name="Step-1-Next"
                        class="btn btn-success"
                        onClick={step2}
                        >
                        Next
                        </button>
                    </div>
                    </div>
                </div>
                {step2Form}
                </div>
          </form>
        </div>
      </div>
      )}
    </>
  );
}
export default ApplyVisa;
