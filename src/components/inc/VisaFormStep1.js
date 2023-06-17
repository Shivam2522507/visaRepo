import React from "react";
import "../inc/css/VisaForm.css"
import { useState } from "react";
import VisaFormStep2 from "./VisaFormStep2";

function VisaFormStep1(){
    const[step2Form,setStep2Form] = useState("");
    const step2 = (e)=>{
        setStep2Form(<VisaFormStep2/>)
    }
    return (
      
        <div className="container">
            <div className="card mt-4 pb-5">
                <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                    <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">1</div>
                    Itinerary
                </div>
                <form method="post">
                    <div className="row justify-content-center " id="step-1-form">
                        <div className="col-lg-3 col-md-3">
                            Onward Date
                            <input name="OnwordDate" required type="date" class="form-control shadow-none  mt-2"/>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            Return Date
                            <input name="ReturnDate" required type="date" class="form-control shadow-none  mt-2"/>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            Passengers
                            <input name="Passenger" required type="number" class="form-control shadow-none  mt-2"/>
                        </div>
                        <div className="col-lg-1 col-md-1 d-flex align-items-center">
                            <button type="submit" name="Step-1-Next" class="btn btn-success" onClick={step2}>Next</button>
                        </div>
                    </div>
                </form>
            </div>

            {step2Form}

        </div>
    );
}
export default VisaFormStep1;