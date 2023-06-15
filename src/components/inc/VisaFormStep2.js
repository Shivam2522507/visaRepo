import React from "react";
import "../inc/css/VisaForm.css"

function VisaFormStep2(){
    return (
        <div className="container">
            <div className="card mt-4 pb-4">
                <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                    <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">2</div>
                    Travellers Details
                </div>

                <div className="row justify-content-center " id="step-2-form">
                    <div className="col-lg-1 col-md-1 d-flex align-items-end">
                        {/* <input name="Title" required type="text" class="form-control shadow-none  mt-2" placeholder="Title"/> */}
                        <select id="Title" name="Title">
                            <option >Title :</option>
                            <option value="x">abc</option>
                            <option value="x">def</option>
                            <option value="x">Efi</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-3 d-flex align-items-end">
                        <input name="FirstName" required type="text" class="form-control shadow-none  mt-2" placeholder="First Name"/>
                    </div>
                    <div className="col-lg-3 col-md-3 d-flex align-items-end">
                        <input name="LastName" required type="text" class="form-control shadow-none  mt-2" placeholder="Last Name"/>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        D.O.B
                        <input name="dob" required type="date" class="form-control shadow-none  mt-2"/>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-lg-5 mt-md-5">
                         Nationality
                        <input name="Nationality" required type="text" class="form-control shadow-none"/>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-lg-5 mt-md-5 d-flex align-items-end">
                        <input name="PassportNo" required type="number" class="form-control shadow-none" placeholder="Passport No"/>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-lg-5 mt-md-5">
                        Contact No
                        <input name="ContactNo" required type="number" class="form-control shadow-none" placeholder="Contact No"/>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-lg-5 mt-md-5">
                        Email
                        <input name="Email" required type="email" class="form-control shadow-none" placeholder="Email"/>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default VisaFormStep2;