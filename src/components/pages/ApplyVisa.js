import React from "react";
import "../inc/css/ApplyVisa.css";
import creditCardIMG from "../images/credit-card-img.png";
import googleDocsIMG from "../images/google-docs-img.png";
import passportIMG from "../images/passport-img.png";
import { ArrowRight} from "react-bootstrap-icons";
import VisaFormStep1 from "../inc/VisaFormStep1";
import sepratorIMG from "../images/seprator.svg";
import Footer from "../inc/Footer";

function ApplyVisa(){
    return (
        <div className="container-fluid p-0 m-0 bg-light">
            <div className="container pt-5">
                <h2 className="text-center mb-5">UNITED ARAB EMIRATES <span> Visa Online</span></h2>
                <div className="card p-4">
                    <h6>Why get a visa from us?</h6>
                    <ul className="d-flex w-100 mt-3 p-2">
                        <li >Best prices</li>
                        <li className="ms-5">Faster processing</li>
                        <li className="ms-5">Zero hassle</li>
                    </ul>
                </div>
                <div className="row justify-content-between align-items-center mt-5">
                    <div className="col-lg-8">
                        <div className="card p-3 Visa-Type-card">
                            <h5 className="m-0">Visa-Type</h5>
                            <p className="mb-3 mt-2">Select Stay Duration</p>
                            <select class="form-select form-select-lg mb-2 shadow-none" aria-label=".form-select-lg example">
                                <option>30-days single entry Visa</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <h6>Visa processing takes 5-7 working days</h6>
                            <h5 className="mt-2">Instructions:</h5>
                            <p className="m-0 Instructions-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, tempore magnam omnis sint totam soluta quasi rerum labore nobis adipisci ipsum illum aspernatur maiores incidunt eum, nulla architecto cupiditate ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, tempore magnam omnis sint totam soluta quasi rerum labore nobis adipisci ipsum illum aspernatur maiores incidunt eum, nulla architecto cupiditate ex.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="card p-4 get-visa-steps">
                                <h5 className="mb-3">STEPS TO GET YOUR VISA</h5>
                                <div className="d-flex">
                                    <div className="icon">
                                    <img src={googleDocsIMG} alt="googleDocsIMG" class="googleDocsIMG me-3" />
                                    </div>
                                    <div className="text">
                                        <p className="text-head m-0">Upload Documents</p>
                                        <p className="text-para">Upload soft copy of below mentioned documents and get your visa verified</p>
                                    </div>

                                </div>
                                <div className="d-flex">
                                    <div className="icon">
                                    <img src={creditCardIMG} alt="googleDocsIMG" class="googleDocsIMG me-3" />
                                    </div>
                                    <div className="text">
                                        <p className="text-head m-0">Pay Online</p>
                                        <p className="text-para">Complete your purchase using a paymode of your choice</p>
                                    </div>

                                </div>
                                <div className="d-flex">
                                    <div className="icon">
                                    <img src={passportIMG} alt="passportIMG" class="passportIMG me-3" />
                                    </div>
                                    <div className="text">
                                        <p className="text-head m-0">Get Your Visa</p>
                                        <p className="text-para">Keep track of your visa status and get visa on mail.</p>
                                    </div>

                                </div>
                        </div>

                    </div>

                </div>
                <div className="form-steps mt-5 mb-5 p-4 d-flex justify-content-between align-items-center">
                    <div className="steps d-flex justify-content-center align-items-center">
                        <div className="steps-no me-2 text-center" id="step-1">1</div>
                        Itinerary
                    </div>
                    <div className="steps-arrow">
                    <ArrowRight  size={28} />
                    </div>
                    <div className="steps d-flex justify-content-center align-items-center">
                        <div className="steps-no me-2 text-center" id="step-2">2</div>
                        Traveller Details
                    </div>
                    <div className="steps-arrow">
                    <ArrowRight  size={28} />
                    </div>
                    <div className="steps d-flex justify-content-center align-items-center">
                        <div className="steps-no me-2 text-center" id="step-3">3</div>
                        Upload Documents
                    </div>
                    <div className="steps-arrow">
                    <ArrowRight  size={28} />
                    </div>
                    <div className="steps d-flex justify-content-center align-items-center">
                        <div className="steps-no me-2 text-center" id="step-4">4</div>
                        Make Payment
                    </div>
                </div>

                <VisaFormStep1/>
                
            </div>
            <img src={sepratorIMG} alt="seprator" class="footer-seprator-img mt-5" />
                 <div><Footer/></div>
        </div>
    );
}
export default ApplyVisa;