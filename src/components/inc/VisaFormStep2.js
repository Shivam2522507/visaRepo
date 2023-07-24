import React from "react";
import "../inc/css/VisaForm.css";
import { Plus } from "react-bootstrap-icons";
import { Upload } from "react-bootstrap-icons";
import { useState } from "react";
import VisaFormStep4 from "./VisaFormStep4";

function VisaFormStep2() {
  const [GSTInput, setGSTInput] = useState("");
  const getGSTInput = (e) => {
    if (e.target.value === "gst_yes") {
      setGSTInput(
        <input
          name="GSTNo"
          required
          type="text"
          class="form-control shadow-none ms-5"
          placeholder="GST Number"
        />
      );
    } else {
      setGSTInput("");
    }
  };


  const [Travelers, setTravelers] = useState([]);
  const handleAddCoTraveler = () => {
setTravelers([...Travelers, {}]);

};

  const [photographFile, setPhotographFile] = useState("");
  const photographHandleFile = (e) => {
    setPhotographFile(e.target.files[0].name);
  };
  const [passportFile, setpassportFile] = useState("");
  const passportHandleFile = (e) => {
    setpassportFile(e.target.files[0].name);
  };
  const [qualifyingCriteriaFile, setqualifyingCriteriaFile] = useState("");
  const qualifyingCriteriaHandleFile = (e) => {
    setqualifyingCriteriaFile(e.target.files[0].name);
  };
  const [addressProofFile, setaddressProofFile] = useState("");
  const addressProofHandleFile = (e) => {
    setaddressProofFile(e.target.files[0].name);
  };
  const [PANCardFile, setPANCardFile] = useState("");
  const PANCardHandleFile = (e) => {
    setPANCardFile(e.target.files[0].name);
  };
  const [returnTicketFile, setreturnTicketFile] = useState("");
  const returnTicketHandleFile = (e) => {
    setreturnTicketFile(e.target.files[0].name);
  };
  const [hotelConfirmationFile, sethotelConfirmationFile] = useState("");
  const hotelConfirmationHandleFile = (e) => {
    sethotelConfirmationFile(e.target.files[0].name);
  };
  const [step4Form, setStep4Form] = useState("");
  const step4 = (e) => {
    setStep4Form(<VisaFormStep4 />);
  };
  return (
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
                <select id="Title" name="Title">
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
                />
              </div>
              <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end mt-3">
                <input
                  name="LastName"
                  required
                  type="text"
                  class="form-control shadow-none  mt-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-end mt-3">
                <input
                  name="dob"
                  required
                  type="date"
                  placeholder="D.O.B"
                  class="form-control shadow-none  mt-2"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-6 d-flex align-items-end mt-lg-5 mt-md-5 mt-3">
                <input
                  name="Nationality"
                  required
                  type="text"
                  placeholder="Nationality"
                  class="form-control shadow-none"
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
                />
              </div>
              <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                <input
                  name="ContactNo"
                  required
                  type="number"
                  maxLength="10"
                  class="form-control shadow-none"
                  placeholder="Contact No"
                />
              </div>
              <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                <input
                  name="Email"
                  required
                  type="email"
                  class="form-control shadow-none"
                  placeholder="Email"
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
                  <span className="text-success">1</span>. Clear colored
                  Passport Size Photograph.
                </h4>
                <p className="doc-desc">*Description--------</p>
              </div>
              <div className="upload-inp">
                <span id="file-chosen-Photograph">{photographFile}</span>
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
                  <span className="text-success">2</span>. Clear colored copy of
                  Front and Last page of Indian passport.{" "}
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
                  <span className="text-success">3</span>. Documents supporting
                  any of the qualifying criteria mentioned above.{" "}
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
                  <span className="text-success">4</span>. Current Address proof
                  other than Passport.{" "}
                </h4>
                <p className="doc-desc">*Description--------</p>
              </div>
              <div className="upload-inp">
                <span id="file-chosen-Address-proof">{addressProofFile}</span>
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
                  <span className="text-success">5</span>. Copy of PAN Card.{" "}
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
                  <span className="text-success">6</span>. Return Journey Ticket
                  copy.{" "}
                </h4>
                <p className="doc-desc">*Description--------</p>
              </div>
              <div className="upload-inp">
                <span id="file-chosen-Return-Ticket">{returnTicketFile}</span>
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
                  <span className="text-success">7</span>. Hotel confirmation.{" "}
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
          </div>
      
      {Travelers.map((Traveler, index) => (
        <div key={index}>
          <div className="card mt-4  pb-4">
            <div className="card-head pt-4 mb-4 d-flex  align-items-center">
              <div className="steps-no-form-traveler me-4 d-flex justify-content-center align-items-center">
              <span className="me-3"> {index + 1} </span>Co-Travellers Details
              </div>
            </div>
            <div
              className="row justify-content-center p-lg-0 p-md-3 p-3 pb-5"
              id="step-2-form"
            >
              <div className="col-lg-1 col-md-4 d-flex align-items-end">
                <select id="Title" name="Title">
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
                />
              </div>
              <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end mt-3">
                <input
                  name="LastName"
                  required
                  type="text"
                  class="form-control shadow-none  mt-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-6 d-flex align-items-end mt-3">
                <input
                  name="dob"
                  required
                  type="date"
                  placeholder="D.O.B"
                  class="form-control shadow-none  mt-2"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-6 d-flex align-items-end mt-lg-5 mt-md-5 mt-3">
                <input
                  name="Nationality"
                  required
                  type="text"
                  placeholder="Nationality"
                  class="form-control shadow-none"
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
                />
              </div>
              <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                <input
                  name="ContactNo"
                  required
                  type="number"
                  maxLength="10"
                  class="form-control shadow-none"
                  placeholder="Contact No"
                />
              </div>
              <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                <input
                  name="Email"
                  required
                  type="email"
                  class="form-control shadow-none"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>

          <div className="card mt-4 pb-4">
            <div className="card-head pt-4  d-flex  align-items-center">
              <div className="steps-no-form-traveler  me-4 d-flex justify-content-center align-items-center">
              Upload Documents of {index + 1}  Co-Travellers 
              </div>
            </div>
          </div>
          <div className="card mt-3 p-lg-5 p-md-5 p-3">
            <div className="upload-doc d-flex justify-content-between align-items-center">
              <div className="doc-title">
                <h4>
                  <span className="text-success">1</span>. Clear colored
                  Passport Size Photograph.
                </h4>
                <p className="doc-desc">*Description--------</p>
              </div>
              <div className="upload-inp">
                <span id="file-chosen-Photograph">{photographFile}</span>
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
                  <span className="text-success">2</span>. Clear colored copy of
                  Front and Last page of Indian passport.{" "}
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
                  <span className="text-success">3</span>. Documents supporting
                  any of the qualifying criteria mentioned above.{" "}
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
                  <span className="text-success">4</span>. Current Address proof
                  other than Passport.{" "}
                </h4>
                <p className="doc-desc">*Description--------</p>
              </div>
              <div className="upload-inp">
                <span id="file-chosen-Address-proof">{addressProofFile}</span>
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
                  <span className="text-success">5</span>. Copy of PAN Card.{" "}
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
                  <span className="text-success">6</span>. Return Journey Ticket
                  copy.{" "}
                </h4>
                <p className="doc-desc">*Description--------</p>
              </div>
              <div className="upload-inp">
                <span id="file-chosen-Return-Ticket">{returnTicketFile}</span>
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
                  <span className="text-success">7</span>. Hotel confirmation.{" "}
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
          </div>
        </div>
      ))}

      <div className="card mt-4 p-lg-4 p-md-4 p-3">
        <div className="addTraveler d-flex align-items-center mt-2">
          
          <button type="button" className="add-co-traveler-btn" id="add-Traveler-btn" onClick={handleAddCoTraveler}>
          <div className="addIcon d-flex align-items-center justify-content-center me-2 ">
            <Plus size={28} />
          </div>
          Add Co-Traveler
        </button>
        </div>
        <div className=" mt-3">
          <hr />
        </div>
        <div className="GSTInvoice d-flex align-items-center">
          <input
            class="form-check-input mt-0 shadow-none me-2"
            type="checkbox"
            value="gst_yes"
            onChange={getGSTInput}
            aria-label="Checkbox for following text input"
          />
          I need a business GST invoice
          {GSTInput}
        </div>
        <div className=" mt-1">
          <hr />
        </div>
      </div>
      <div className="card mt-4 p-lg-4 p-md-4 p-3">
        <div className="board">
          <div className="board-head mb-3">
            <h3>
              Okay To Board,Do you want to take Okay To Board ?{" "}
              <span>( ₹799/per person )</span>
            </h3>
          </div>
          <div className="board-body d-flex align-items-center">
            <div className="px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2 me-lg-5 me-md-4">
              <input
                class="form-check-input mt-0 shadow-none me-2"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
              Yes, and I accept the terms & conditions
            </div>
            <div className="px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2">
              <input
                class="form-check-input mt-0 shadow-none me-2"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
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
              <input
                class="form-check-input mt-0 shadow-none me-2"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
              Basic Insurance ( ₹199/per person )
            </div>
            <div className=" px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2">
              <input
                class="form-check-input mt-0 shadow-none me-2"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
              Regular Insurance ( ₹499/per person )
            </div>
            <div className="px-lg-4 px-md-4 px-1 d-flex align-items-center mt-2">
              <input
                class="form-check-input mt-0 shadow-none me-2"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
              Premium Insurance ( ₹999/per person )
            </div>
          </div>
          <div className="px-4 mt-4 d-flex justify-content-end align-items-center">
            <input
              class="form-check-input mt-0 shadow-none me-2"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
            I accept the rules of this trip
            <button
              type="submit"
              name="Step-3-Next"
              class="btn btn-success ms-4"
              onClick={step4}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {step4Form}
    </>
  );
}
export default VisaFormStep2;
