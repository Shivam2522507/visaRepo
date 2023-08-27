import React, { useState,useEffect } from "react";
import "../inc/css/ApplyVisa.css";
import {useParams} from "react-router-dom"
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import {  useDispatch,useSelector } from "react-redux";
import { useAlert } from "react-alert";
import "../inc/css/VisaForm.css";
import { addOtherFields ,clearErrors,getTravelerDetails} from "../../actions/applyVisaAction";
import {validateCouponAction} from "../../actions/couponAction"

function OtherFormFields() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  const Navigate = useNavigate()
  const VisaCardId = params.id;

    const {  mainTravelerId } = useSelector(
    (state) => state.mainTraveler
  );

  const { error } = useSelector(
    (state) => state.addOtherField
  );

  const { discount, isValid } = useSelector(
    (state) => state.validateCoupon
  );


  const [GSTInput, setGSTInput] = useState(false);
  const getGSTInput = (e) => {
    if (e.target.value === "gst_yes") {
      setGSTInput(true);
    }
  };
const [checked,setChecked] = useState(false);
const [GSTInputData, setGSTInputData] = useState("");
const [OkayToBoard, setOkayToBoard] = useState("");
const [Insurance, setInsurance] = useState("");
const [couponCodeInputData, setcouponCodeInputData] = useState("");

  const [showStep4Form, setShowStep4Form] = useState(false);
  const handleStep4NextButtonClick = () => {
    setShowStep4Form(true);
  };



  const handleCheckOut = () => {
    Navigate(`/checkOut/${mainTravelerId}`)
  };

  const [couponCodeInput, setcouponCodeInput] = useState(false);
  const couponCode = (e) => {
    if (e.target.value === "couponCode") {
      setcouponCodeInput(true);
    }
  };



  const otherFieldsSubmit = (e) =>{
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.set("GSTInvoice",GSTInputData);
      myForm.set("okayToBoard",OkayToBoard);
      myForm.set("insuranceType",Insurance);
      dispatch(addOtherFields(mainTravelerId,myForm));
    } catch (error) {
      console.log(error)
    }
  }
  const validateCoupon = (e) =>{
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.set("code",couponCodeInputData);
      myForm.set("visaId",VisaCardId);
      dispatch(validateCouponAction(myForm));
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // if (isOtherFieldsAdded) {
    //   alert.success("Other Fields Added Successfully")
    // }
    if (mainTravelerId) {
      const mainTraveler = new FormData();
      mainTraveler.append("mainTravelerId", mainTravelerId);
      dispatch(getTravelerDetails(mainTraveler));
    }
 
  }, [dispatch, alert,mainTravelerId, error]);

  useEffect(() => {
    if (isValid) {
      alert.success("Coupon is Applyed Successfully");
      const myForm = new FormData();
      myForm.set("couponCode",couponCodeInputData);
      myForm.set("discountPrice",discount);
      dispatch(addOtherFields(mainTravelerId,myForm));
    }
  }, [dispatch,isValid,alert,discount,couponCodeInputData,mainTravelerId]);

  

  return (
    <>
      <div className="container-fluid p-0 m-0 bg-light">
        <form onSubmit={otherFieldsSubmit}>
          <div className="container">
            <div className="container">
              <div className="card mt-4 p-lg-4 p-md-4 p-3">
                <div className="GSTInvoice d-flex align-items-center">
                  <input
                    class="form-check-input mt-0 shadow-none me-2"
                    type="checkbox"
                    value="gst_yes"
                    onChange={getGSTInput}
                    aria-label="Checkbox for following text input"
                  />
                  I need a business GST invoice
                  {GSTInput ? (
                    <input
                      name="GSTNo"
                      required
                      type="text"
                      class="form-control shadow-none ms-5"
                      placeholder="GST Number"
                      onChange={(e) => setGSTInputData(e.target.value)}
                    />
                  ) : (
                    ""
                  )}
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
                    <div class="form-check board-body-div d-flex align-items-center px-lg-4 px-md-4 px-1 mt-2">
                      <div className="d-flex align-items-center">
                        <input
                          class="with-gap me-2"
                          name="board"
                          type="radio"
                          value={`YES`}
                          id="YesBoard"
                          onChange={(e) => setOkayToBoard(e.target.value)}
                        />
                        <label for="YesBoard" className="me-lg-5 me-md-4">
                          Yes, and I accept the terms & conditions
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <input
                          class="with-gap me-2"
                          type="radio"
                          name="board"
                          value={`No`}
                          id="NoBoard"
                          onChange={(e) => setOkayToBoard(e.target.value)}
            
                        />
                        <label for="NoBoard">
                          No, I don't want Okay To Board
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4 p-lg-4 p-md-4 p-1">
                <div className="Insurance">
                  <div className="Insurance-head mb-3">
                    <h3>
                      Insurance (Incl. of GST) Select your Travel Insurance -{" "}
                    </h3>
                  </div>
                  <div className="Insurance-body d-flex align-items-center">
                    <div class="form-check Insurance-body-div d-flex align-items-center px-lg-4 px-md-4 px-1 mt-2">
                      <div className="d-flex align-items-center">
                        <input
                          class="with-gap me-2"
                          name="Insurance"
                          type="radio"
                          value={`Basic`}
                          id="BasicInsurance"
                          onChange={(e) => setInsurance(e.target.value)}
                        />
                        <label for="BasicInsurance" className="me-lg-5 me-md-4">
                          Basic Insurance ( ₹199/per person )
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <input
                          class="with-gap me-2"
                          type="radio"
                          name="Insurance"
                          value={`Regular`}
                          id="RegularInsurance"
                          onChange={(e) => setInsurance(e.target.value)}
                        />
                        <label
                          for="RegularInsurance"
                          className="me-lg-5 me-md-4"
                        >
                          Regular Insurance ( ₹499/per person )
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <input
                          class="with-gap me-2"
                          type="radio"
                          name="Insurance"
                          value={`Premium`}
                          id="PremiumInsurance"
                          onChange={(e) => setInsurance(e.target.value)}
                        />
                        <label for="PremiumInsurance">
                          Premium Insurance ( ₹999/per person )
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 mt-4 d-flex justify-content-end align-items-center">
                    <input
                      class="form-check-input mt-0 shadow-none me-2"
                      type="checkbox"
                      checked = {checked}
                      onChange={event=>setChecked(event.target.checked)}
                      aria-label="Checkbox for following text input"
                    />
                    I accept the rules of this trip
                    <button
                      type="submit"
                      name="Step-3-Next"
                      class="btn btn-success ms-4"
                      disabled = {checked ? false : true}
                      onClick={handleStep4NextButtonClick}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container-fluid p-0 m-0 bg-light">
        <div className="container">
          <div className="container">
            {showStep4Form ? (
              <div className="card mt-4 pb-5">
                <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                  <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">
                    4
                  </div>
                  Make Payment
                </div>
                <div className="couponCode px-4 d-flex align-items-center">
                  <input
                    class="form-check-input mt-0 shadow-none me-2"
                    type="checkbox"
                    value="couponCode"
                    aria-label="Checkbox for following text input"
                    onChange={couponCode}
                  />
                  I have a coupon code
                  {couponCodeInput ? (
                    <form onSubmit={validateCoupon}>
                      <div className="d-flex align-items-center">
                        <input
                          name="couponCode"
                          required
                          type="text"
                          class="form-control shadow-none ms-5"
                          placeholder="Coupon Code"
                          onChange={(e) => setcouponCodeInputData(e.target.value)}
                        />
                        <button
                          type="submit"
                          name="couponCodeApply"
                          class="btn btn-success ms-4"
                        >
                          Apply Now
                        </button>
                      </div>
                    </form>
                  ) : (
                    ""
                  )}
                </div>
                <div className="px-4 mt-1">
                  <hr />
                </div>
                <div className="px-4 mt-4 d-flex justify-content-end align-items-center">
                  <p className="total m-0" >Total- <span id="total-price-display"></span></p>
                  <button
                    type="button"
                    name="Step-4-Pay"
                    class="btn btn-success ms-4"
                    onClick={handleCheckOut}
                  >
                    Pay Now{" "}
                    <BoxArrowUpRight
                      className="ms-2 text-white mb-1"
                      size={16}
                    />
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default OtherFormFields;
