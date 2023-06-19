import React from "react";
import "../inc/css/VisaForm.css";
import {Upload} from "react-bootstrap-icons";
import { useState } from "react";
import VisaFormStep4 from "./VisaFormStep4";

function VisaFormStep3(){
    const[photographFile,setPhotographFile] = useState("");
    const photographHandleFile = (e)=>{
        setPhotographFile(e.target.files[0].name);
    }
    const[passportFile,setpassportFile] = useState("");
    const passportHandleFile = (e)=>{
        setpassportFile(e.target.files[0].name);
    }
    const[qualifyingCriteriaFile,setqualifyingCriteriaFile] = useState("");
    const qualifyingCriteriaHandleFile = (e)=>{
        setqualifyingCriteriaFile(e.target.files[0].name);
    }
    const[addressProofFile,setaddressProofFile] = useState("");
    const addressProofHandleFile = (e)=>{
        setaddressProofFile(e.target.files[0].name);
    }
    const[PANCardFile,setPANCardFile] = useState("");
    const PANCardHandleFile = (e)=>{
        setPANCardFile(e.target.files[0].name);
    }
    const[returnTicketFile,setreturnTicketFile] = useState("");
    const returnTicketHandleFile = (e)=>{
        setreturnTicketFile(e.target.files[0].name);
    }
    const[hotelConfirmationFile,sethotelConfirmationFile] = useState("");
    const hotelConfirmationHandleFile = (e)=>{
        sethotelConfirmationFile(e.target.files[0].name);
    }
    const[step4Form,setStep4Form] = useState("");
    const step4 = (e)=>{
        setStep4Form(<VisaFormStep4/>)
    }
    return (
        <div className="container">
            <div className="card mt-4 pb-4">
                <div className="card-head pt-4  d-flex  align-items-center">
                    <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">3</div>
                    Upload Documents
                </div>
            </div>
            <div className="card mt-3 p-lg-5 p-md-5 p-3">
                <div className="upload-doc d-flex justify-content-between align-items-center">
                    <div className="doc-title">
                        <h4><span className="text-success">1</span>. Clear colored Passport Size Photograph.</h4>
                        <p className="doc-desc">*Description--------</p>
                    </div>
                    <div  className="upload-inp">
                        <span id="file-chosen-Photograph" className="me-3" >{photographFile}</span> 
                        <div>
                            <input type="file" id="Photograph" name="Photograph" hidden onChange={photographHandleFile}/>
                            <label for="Photograph">Upload <Upload className="ms-2"  size={20} /></label>
                        </div> 
                    </div>
                </div>
                <div className=" mt-2 mb-2">
                    <hr/>
                </div>
                <div className="upload-doc d-flex justify-content-between align-items-center">
                    <div className="doc-title">
                        <h4><span className="text-success">2</span>. Clear colored copy of Front and Last page of Indian passport. </h4>
                        <p className="doc-desc">*Description--------</p>
                    </div>
                    <div  className="upload-inp">
                        <span id="file-chosen-passport" className="me-3" >{passportFile}</span>
                        <div>  
                            <input type="file" id="passport" name="passport" hidden onChange={passportHandleFile}/>
                            <label for="passport">Upload <Upload className="ms-2"  size={20} /></label>
                        </div>
                    </div>
                </div>
                <div className=" mt-2 mb-2">
                    <hr/>
                </div>
                <div className="upload-doc d-flex justify-content-between align-items-center">
                    <div className="doc-title">
                        <h4><span className="text-success">3</span>. Documents supporting any of the qualifying criteria mentioned above. </h4>
                        <p className="doc-desc">*Description--------</p>
                    </div>
                    <div  className="upload-inp">
                        <span id="file-chosen-qualifying-criteria" className="me-3" >{qualifyingCriteriaFile}</span> 
                        <div> 
                            <input type="file" id="qualifyingCriteria" name="qualifyingCriteria" hidden onChange={qualifyingCriteriaHandleFile}/>
                            <label for="qualifyingCriteria">Upload <Upload className="ms-2"  size={20} /></label>
                        </div> 
                    </div>
                </div>
                <div className=" mt-2 mb-2">
                    <hr/>
                </div>
                <div className="upload-doc d-flex justify-content-between align-items-center">
                    <div className="doc-title">
                        <h4><span className="text-success">4</span>. Current Address proof other than Passport. </h4>
                        <p className="doc-desc">*Description--------</p>
                    </div>
                    <div  className="upload-inp">
                        <span id="file-chosen-Address-proof" className="me-3" >{addressProofFile}</span>  
                        <div>
                            <input type="file" id="addressProof" name="addressProof" hidden onChange={addressProofHandleFile}/>
                            <label for="addressProof">Upload <Upload className="ms-2"  size={20} /></label>
                        </div>
                    </div>
                </div>
                <div className=" mt-2 mb-2">
                    <hr/>
                </div>
                <div className="upload-doc d-flex justify-content-between align-items-center">
                    <div className="doc-title">
                        <h4><span className="text-success">5</span>. Copy of PAN Card. </h4>
                        <p className="doc-desc">*Description--------</p>
                    </div>
                    <div className="upload-inp">
                        <span id="file-chosen-PAN-Card" className="me-3" >{PANCardFile}</span>  
                        <div>
                            <input type="file" id="PANCard" name="PANCard" hidden onChange={PANCardHandleFile}/>
                            <label for="PANCard">Upload <Upload className="ms-2"  size={20} /></label>
                        </div>
                    </div>
                </div>
                <div className=" mt-2 mb-2">
                    <hr/>
                </div>
                <div className="upload-doc d-flex justify-content-between align-items-center">
                    <div className="doc-title">
                        <h4><span className="text-success">6</span>. Return Journey Ticket copy. </h4>
                        <p className="doc-desc">*Description--------</p>
                    </div>
                    <div  className="upload-inp">
                        <span id="file-chosen-Return-Ticket" className="me-3" >{returnTicketFile}</span>  
                        <div>
                            <input type="file" id="returnTicket" name="returnTicket" hidden onChange={returnTicketHandleFile}/>
                            <label for="returnTicket">Upload <Upload className="ms-2"  size={20} /></label>
                        </div>
                    </div>
                </div>
                <div className=" mt-2 mb-2">
                    <hr/>
                </div>
                <div className="upload-doc d-flex justify-content-between align-items-center">
                    <div className="doc-title">
                        <h4><span className="text-success">7</span>. Hotel confirmation. </h4>
                        <p className="doc-desc">*Description--------</p>
                    </div>
                    <div  className="upload-inp">
                        <span id="file-chosen-Hotel-Confirmation" className="me-3" >{hotelConfirmationFile}</span>  
                        <div>
                            <input type="file" id="hotelConfirmation" name="hotelConfirmation" hidden onChange={hotelConfirmationHandleFile}/>
                            <label for="hotelConfirmation">Upload <Upload className="ms-2"  size={20} /></label>
                        </div>
                    </div>
                </div>
                <div className=" mt-2 mb-2">
                    <hr/>
                </div>
            </div>
            <div className="card mt-4 p-lg-4 p-md-4 p-3">
                <div className="board">
                    <div className="board-head mb-3">
                        <h3>Okay To Board,Do you want to take Okay To Board ?  <span>( ₹799/per person )</span></h3>
                    </div>
                    <div className="board-body d-flex align-items-center">
                        <div className="px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2 me-lg-5 me-md-4">
                            <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            Yes, and I accept the terms & conditions
                        </div>
                        <div className="px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2">
                            <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            No, I don't want Okay To Board
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-4 p-lg-4 p-md-4 p-1">
                <div className="Insurance">
                    <div className="Insurance-head mb-3">
                        <h3>Insurance (Incl. of GST) Select your Travel Insurance - </h3>
                    </div>
                    <div className="Insurance-body d-flex align-items-center">
                        <div className=" px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2 me-lg-5">
                            <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            Basic Insurance ( ₹199/per person )
                        </div>
                        <div className=" px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2">
                            <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            Regular Insurance ( ₹499/per person )
                        </div>
                        <div className="px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2">
                            <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            Premium Insurance ( ₹999/per person )
                        </div>
                    </div>
                        <div className="px-4 mt-4 d-flex justify-content-end align-items-center">
                            <button type="submit" name="Step-3-Next" class="btn btn-success ms-4" onClick={step4}>Continue</button>
                        </div>
                </div>
            </div>

            {step4Form}

        </div>
    ); 
}


export default VisaFormStep3;