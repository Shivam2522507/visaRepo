import React from "react";
import "../inc/css/VisaForm.css";
import {Plus} from "react-bootstrap-icons";
import { useState } from "react";
import VisaFormStep3 from "./VisaFormStep3";

function VisaFormStep2(){
        const[step3Form,setStep3Form] = useState("");
        const step3 = (e)=>{
            setStep3Form(<VisaFormStep3/>)
        }
        const[GSTInput,setGSTInput] = useState("");
        const getGSTInput = (e)=>{
            if(e.target.value==="gst_yes"){ 
                setGSTInput(<input name="GSTNo" required type="text" class="form-control shadow-none ms-5" placeholder="GST Number"/>);
            }
            else{
                setGSTInput("");
            }
        }
    return (
        <>
            <div className="card mt-4  pb-4">
                <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                    <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">2</div>
                    Travellers Details
                </div>

                <div className="row justify-content-center p-lg-0 p-md-3 p-3 " id="step-2-form">
                    <div className="col-lg-1 col-md-4 d-flex align-items-end">
                        <select id="Title" name="Title">
                            <option >Title :</option>
                            <option value="Mr">Mr.</option>
                            <option value="Ms">Ms.</option>
                            <option value="Mrs">Mrs.</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end">
                        <input name="FirstName" required type="text" class="form-control shadow-none  mt-2" placeholder="First Name"/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end mt-3">
                        <input name="LastName" required type="text" class="form-control shadow-none  mt-2" placeholder="Last Name"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 d-flex align-items-end mt-3">
                         
                        <input name="dob" required type="date" placeholder="D.O.B" class="form-control shadow-none  mt-2"/>
                    </div>
                    <div className="col-lg-5 col-md-6 col-6 d-flex align-items-end mt-lg-5 mt-md-5 mt-3">
                         
                        <input name="Nationality" required type="text" placeholder="Nationality" class="form-control shadow-none"/>
                    </div>
                    <div className="col-lg-5 col-md-4 mt-lg-5 mt-md-5 d-flex align-items-end mt-3">
                        <input name="PassportNo" required type="number" id="PassportNo" class="form-control shadow-none" placeholder="Passport No"/>
                    </div>
                    <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                        <input name="ContactNo" required type="number" maxLength="10" class="form-control shadow-none" placeholder="Contact No"/>
                    </div>
                    <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                        <input name="Email" required type="email" class="form-control shadow-none" placeholder="Email"/>
                    </div>
                </div>
                <div className="addTraveler d-flex align-items-center mt-5">
                    <div className="addIcon d-flex align-items-center justify-content-center me-2 "><Plus  size={28} /></div>
                    Add another traveler
                </div>
                <div className="px-4 mt-3">
                    <hr/>
                </div>
                <div className="GSTInvoice px-4 d-flex align-items-center">
                    <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="gst_yes" onChange={getGSTInput} aria-label="Checkbox for following text input"/>
                    I need a business GST invoice
                    {GSTInput}
                </div>
                <div className="px-4 mt-1">
                    <hr/>
                </div>
                <div className="GSTInvoice px-4 mt-4 d-flex justify-content-end align-items-center">
                    <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                    I accept the rules of this trip
                    <button type="submit" name="Step-2-Next" class="btn btn-success ms-4" onClick={step3}>Continue</button>
                </div>
            </div>

           {step3Form} 

        </>
    );
}
export default VisaFormStep2;