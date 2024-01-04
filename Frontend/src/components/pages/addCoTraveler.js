import React, { useState, useEffect } from "react";
import "../inc/css/ApplyVisa.css";

import {
  
  Plus,
  Upload,

} from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

import { useAlert } from "react-alert";

import "../inc/css/VisaForm.css";
import { addCoTravelerData } from "../../actions/applyVisaAction";
import OtherFormFields from "./otherFormFields";

function AddCoTraveler() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {  mainTravelerId } = useSelector(
    (state) => state.mainTraveler
  );
  const {  isCoTravelerAdded } = useSelector(
    (state) => state.coTraveler
  );

  const [otherForm, setOtherForm] = useState(false);
  const handleNextButtonClick = () => {
    setOtherForm(true);
  };


  const [coTravelers, setCoTravelers] = useState([]);


  

  const handleInputChange = (e, index, field) => {
    const newCoTravelers = [...coTravelers];
    newCoTravelers[index][field] = e.target.value;
    setCoTravelers(newCoTravelers);
  };

  const handleFileChange = (e, index,field) => {
    const fileInput = e.target;
    if(fileInput.files[0].type !== 'image/jpeg'){
      alert.error("Please Upload JPG of below 100kb");
    }else if(fileInput.files[0].size >= 100001){
      alert.error("Please Upload JPG of below 100kb");
    }else{
      
      const fileName = fileInput.files[0].name;
    
      const fileChosenSpan = document.getElementById(`file-chosen-${field}-${index}`);
      if (fileChosenSpan) {
        fileChosenSpan.textContent = fileName;
      }
      const newCoTravelers = [...coTravelers];
      newCoTravelers[index][field] = e.target.files[0];
      setCoTravelers(newCoTravelers);
    }
  };

  const handleAddCoTraveler = () => {
    setCoTravelers([...coTravelers,{}]);
  };

  const handleCoTravelerSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();


    console.log(coTravelers);
   
    coTravelers.forEach((coTraveler, index) => {
      for (const key in coTraveler) {
        if (key !== "photograph" && key !== "passport" && key !== "qualifyingCriteria" && key !== "addressProof" && key !== "panCard" && key !== "returnTicket" && key !== "hotelConfirmation") {
          formData.append(`${key}[${index}]`, coTraveler[key]);
        }
      }

      formData.append(`photograph[${index}]`, coTraveler.photograph);
      formData.append(`passport[${index}]`, coTraveler.passport);
      formData.append(`qualifyingCriteria[${index}]`, coTraveler.qualifyingCriteria);
      formData.append(`addressProof[${index}]`, coTraveler.addressProof);
      formData.append(`panCard[${index}]`, coTraveler.panCard);
      formData.append(`returnTicket[${index}]`, coTraveler.returnTicket);
      formData.append(`hotelConfirmation[${index}]`, coTraveler.hotelConfirmation);
    });

    formData.append('mainTravelerId',mainTravelerId)

    dispatch(addCoTravelerData(formData))



  };

  useEffect(() => {
    if (isCoTravelerAdded) {
      alert.success("co Traveler Added Successfully");
    }
  }, [alert, isCoTravelerAdded]);


  return (
    <>
      <div className="container-fluid p-0 m-0 bg-light">
      <div className="container ">
            
        <form onSubmit={handleCoTravelerSubmit}>
          <div className="container">
            {coTravelers.map((coTraveler, index) => (
              <div key={index}>
                <div className="card mt-4  pb-4">
                  <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                    <div className="steps-no-form-traveler me-4 d-flex justify-content-center align-items-center">
                      <span className="me-3"> {index + 1} </span>
                      Co-Travellers Details
                    </div>
                  </div>
                  <div
                    className="row justify-content-center p-lg-0 p-md-3 p-3 pb-5"
                    id="step-2-form"
                  >
                    <div className="col-lg-1 col-md-4 d-flex align-items-end">
                      <select id="Title" name="title" onChange={(e) => handleInputChange(e,index,"title")} >
                        <option>Title :</option>
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end">
                      <input
                        name="firstName"
                        required
                        type="text"
                        class="form-control shadow-none  mt-2"
                        placeholder="First Name"
                        onChange={(e) => handleInputChange(e,index,"firstName")}
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 d-flex align-items-end mt-3">
                      <input
                        name="lastName"
                        required
                        type="text"
                        class="form-control shadow-none  mt-2"
                        placeholder="Last Name"
                        onChange={(e) => handleInputChange(e,index,"lastName")}
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 d-flex align-items-end mt-3">
                      <input
                        name="dob"
                        required
                        type="date"
                        placeholder="D.O.B"
                        class="form-control shadow-none  mt-2"
                        onChange={(e) => handleInputChange(e,index,"dob")}
                      />
                    </div>
                    <div className="col-lg-5 col-md-6 col-6 d-flex align-items-end mt-lg-5 mt-md-5 mt-3">
                      <input
                        name="nationality"
                        required
                        type="text"
                        placeholder="Nationality"
                        class="form-control shadow-none"
                        onChange={(e) => handleInputChange(e,index,"nationality")}
                      />
                    </div>
                    <div className="col-lg-5 col-md-4 mt-lg-5 mt-md-5 d-flex align-items-end mt-3">
                      <input
                        name="passportNo"
                        required
                        type="number"
                        id="PassportNo"
                        class="form-control shadow-none"
                        placeholder="Passport No"
                        onChange={(e) => handleInputChange(e,index,"passportNo")}
                      />
                    </div>
                    <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                      <input
                        name="contactNo"
                        required
                        type="tel"
                        maxLength="10"
                        class="form-control shadow-none"
                        placeholder="Contact No"
                        onChange={(e) => handleInputChange(e,index,"contactNo")}
                      />
                    </div>
                    <div className="col-lg-5 col-md-4 col-6 mt-lg-5 mt-md-5 mt-3">
                      <input
                        name="email"
                        required
                        type="email"
                        class="form-control shadow-none"
                        placeholder="Email"
                        onChange={(e) => handleInputChange(e,index,"email")}
                      />
                    </div>
                  </div>
                </div>

                <div className="card mt-4 pb-4">
                  <div className="card-head pt-4  d-flex  align-items-center">
                    <div className="steps-no-form-traveler  me-4 d-flex justify-content-center align-items-center">
                      Upload Documents of {index + 1} Co-Travellers
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
                      <span id={`file-chosen-photograph-${index}`}></span>
                      <div>
                        <input
                          type="file"
                          id={`photograph-${index}`}
                          name={`photograph-${index}`}
                          onChange={(e) => handleFileChange(e, index,"photograph")}
                          hidden
                        />
                        <label for={`photograph-${index}`}>
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
                        <span className="text-success">2</span>. Clear colored
                        copy of Front and Last page of Indian passport.{" "}
                      </h4>
                      <p className="doc-desc">*Description--------</p>
                    </div>
                    <div className="upload-inp">
                      <span id={`file-chosen-passport-${index}`}></span>
                      <div>
                        <input
                          type="file"
                          id={`passport-${index}`}
                          name={`passport-${index}`}
                          onChange={(e) => handleFileChange(e, index,"passport")}
                          hidden
                        />
                        <label for={`passport-${index}`}>
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
                      <span id={`file-chosen-qualifyingCriteria-${index}`}></span>
                      <div>
                        <input
                          type="file"
                          id={`qualifyingCriteria-${index}`}
                          name={`qualifyingCriteria-${index}`}
                          onChange={(e) => handleFileChange(e, index,"qualifyingCriteria")}
                          hidden
                        />
                        <label for={`qualifyingCriteria-${index}`}>
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
                        <span className="text-success">4</span>. Current Address
                        proof other than Passport.{" "}
                      </h4>
                      <p className="doc-desc">*Description--------</p>
                    </div>
                    <div className="upload-inp">
                      <span id={`file-chosen-addressProof-${index}`}></span>
                      <div>
                        <input
                          type="file"
                          id={`addressProof-${index}`}
                          name={`addressProof-${index}`}
                          onChange={(e) => handleFileChange(e, index,"addressProof")}
                          hidden
                        />
                        <label for={`addressProof-${index}`}>
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
                      <span id={`file-chosen-panCard-${index}`}></span>
                      <div>
                        <input type="file" id={`panCard-${index}`} name={`panCard-${index}`} hidden onChange={(e) => handleFileChange(e, index,"panCard")}/>
                        <label for={`panCard-${index}`}>
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
                        <span className="text-success">6</span>. Return Journey
                        Ticket copy.{" "}
                      </h4>
                      <p className="doc-desc">*Description--------</p>
                    </div>
                    <div className="upload-inp">
                      <span id={`file-chosen-returnTicket-${index}`}></span>
                      <div>
                        <input
                          type="file"
                          id={`returnTicket-${index}`}
                          name={`returnTicket-${index}`}
                          onChange={(e) => handleFileChange(e, index,"returnTicket")}
                          hidden
                        />
                        <label for={`returnTicket-${index}`}>
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
                      <span id={`file-chosen-hotelConfirmation-${index}`}></span>
                      <div>
                        <input
                          type="file"
                          id={`hotelConfirmation-${index}`}
                          name={`hotelConfirmation-${index}`}
                          onChange={(e) => handleFileChange(e, index,"hotelConfirmation")}
                          hidden
                        />
                        <label for={`hotelConfirmation-${index}`}>
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
            <div className="card mt-4 d-flex justify-content-between flex-row p-lg-4 p-md-4 p-3">
              <div className="addTraveler d-flex align-items-center mt-2">
                <button
                  type="button"
                  className="add-co-traveler-btn"
                  id="add-Traveler-btn"
                  onClick={handleAddCoTraveler}
                >
                  <div className="addIcon d-flex align-items-center justify-content-center me-2 ">
                    <Plus size={28} />
                  </div>
                  Add Co-Traveler
                </button>
              </div>
              <div className="d-flex align-items-center mt-2 me-5">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleNextButtonClick}
                 
                > 
                 Save
                </button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>

      {otherForm ? <OtherFormFields/> : ""}

    </>
  );
}
export default AddCoTraveler;
