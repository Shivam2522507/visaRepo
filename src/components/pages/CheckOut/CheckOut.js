import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CoTravelersData from "./CoTraveler";
import {
  getTravelerDetails,
  clearErrors,
} from "../../../actions/applyVisaAction";
import { useAlert } from "react-alert";
import Loader from "../../inc/Loader/Loader";
import { getVisaCardDetails } from "../../../actions/visaAction";
import { BoxArrowUpRight} from "react-bootstrap-icons"

function CheckOut() {
  const params = useParams();
  const OrderID = params.id;
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, error, traveler, isTraveler } = useSelector(
    (state) => state.travelerDetails
  );
  const roeData = useSelector(state => state.roe.roe[0]?.roe)
  const { visaCard } = useSelector((state) => state.VisaCardDetails);
  const visaId = traveler.visaType;
  const [showCoTraveler, setShowCoTraveler] = useState(true);

  useEffect(() => {
    if (isAuthenticated === false) {
      Navigate("/login");
    }
  }, [isAuthenticated, Navigate]);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (OrderID) {
      const mainTravelerId = new FormData();
      mainTravelerId.append("mainTravelerId", OrderID);
      dispatch(getTravelerDetails(mainTravelerId));
    }
    if (visaId) {
      dispatch(getVisaCardDetails(visaId));
    }
    if (traveler.numberOfPassengers === 1) {
      setShowCoTraveler(false);
    } else {
      setShowCoTraveler(true);
    }
  }, [dispatch, error, alert, OrderID, visaId, traveler.numberOfPassengers]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div class="container-fluid bg-light">
          <div class="row">
            <div
              className="col-lg-12 p-4 overflow-hidden me-1"
              id="main-content"
            >
              <h3 className="text-center">Booking Details</h3>
              <div className="d-flex justify-content-evenly mt-4">
                <p>
                  <span className="fw-bold">Visa Type :- </span> {visaCard.name}
                </p>
                <p>
                  <span className="fw-bold">Onward Date :- </span>{" "}
                  {traveler.onwardDate}
                </p>
                <p>
                  <span className="fw-bold">Return Date :- </span>{" "}
                  {traveler.returnDate}
                </p>
                <p>
                  <span className="fw-bold">Number Of Passengers :- </span>{" "}
                  {traveler.numberOfPassengers}
                </p>
              </div>
              <div className="d-flex justify-content-evenly mt-3">
                <p>
                  <span className="fw-bold">GSTInvoice :- </span>{" "}
                  {traveler.GSTInvoice}
                </p>
                <p>
                  <span className="fw-bold">Okay To Board :- </span>{" "}
                  {traveler.okayToBoard}
                </p>
                <p>
                  <span className="fw-bold">Insurance Type :- </span>{" "}
                  {traveler.insuranceType}
                </p>
                <p>
                  <span className="fw-bold">couponCode :- </span>{" "}
                  {traveler.couponCode}
                </p>
              </div>
              <h3 className="text-center mt-5">Main Traveler Details</h3>
              <div className="d-flex justify-content-evenly mt-4">
                <p>
                  <span className="fw-bold">Title :- </span> {traveler.title}
                </p>
                <p>
                  <span className="fw-bold">Full Name :- </span>{" "}
                  {traveler.firstName} {traveler.lastName}
                </p>
                <p>
                  <span className="fw-bold">D.O.B :- </span> {traveler.dob}
                </p>
                <p>
                  <span className="fw-bold">Contact No :- </span>{" "}
                  {traveler.contactNo}
                </p>
              </div>
              <div className="d-flex justify-content-evenly mt-2">
                <p>
                  <span className="fw-bold">Nationality :- </span>{" "}
                  {traveler.nationality}
                </p>
                <p>
                  <span className="fw-bold">Passport No. :- </span>{" "}
                  {traveler.passportNo}
                </p>
                <p>
                  <span className="fw-bold">Email :- </span> {traveler.email}
                </p>
              </div>
              <h3 className="text-center mt-5">Main Traveler Documents</h3>

              <table className="table table-hover border text-center">
                <thead>
                  <tr className="bg-dark text-light">
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Images</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <td>1</td>
                    <td> Photograph</td>
                    <td>
                      <img
                        src={`http://localhost:8000/userUploadFile/${
                          isTraveler ? traveler.documents.photograph : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>2</td>
                    <td> Passport</td>
                    <td>
                      <img
                        src={`http://localhost:8000/userUploadFile/${
                          isTraveler ? traveler.documents.passport : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>3</td>
                    <td> Qualifying Criteria</td>
                    <td>
                      <img
                        src={`http://localhost:8000/userUploadFile/${
                          isTraveler
                            ? traveler.documents.qualifyingCriteria
                            : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>4</td>
                    <td> Address Proof</td>
                    <td>
                      <img
                        src={`http://localhost:8000/userUploadFile/${
                          isTraveler ? traveler.documents.addressProof : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>5</td>
                    <td> PANCard</td>
                    <td>
                      <img
                        src={`http://localhost:8000/userUploadFile/${
                          isTraveler ? traveler.documents.panCard : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>6</td>
                    <td> Return Ticket</td>
                    <td>
                      <img
                        src={`http://localhost:8000/userUploadFile/${
                          isTraveler ? traveler.documents.returnTicket : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>7</td>
                    <td> Hotel Confirmation</td>
                    <td>
                      <img
                        src={`http://localhost:8000/userUploadFile/${
                          isTraveler ? traveler.documents.hotelConfirmation : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              {showCoTraveler && (
                <>
                  {traveler.coTravelers &&
                    traveler.coTravelers.map((coTraveler, index) => (
                      <CoTravelersData
                        coTraveler={coTraveler}
                        index={index + 1}
                      />
                    ))}
                </>
              )}

                <div className="mt-5 d-flex justify-content-evenly">
                  <div>
                  <h3>Price Breakdown</h3>
              <div className="mt-3">
                <p >
                  <span className="fw-bold">Visa Type:- </span>{" "}
                  {visaCard.name} (₹ {roeData * visaCard.price})
                </p>
                <p>
                  <span className="fw-bold">Service Fee :- </span>{" "}
                  ₹ {visaCard.serviceFee}
                </p>
                <p>
                  <span className="fw-bold">Tech Management Fee :- </span>{" "}
                  ₹ {visaCard.managementFee}
                </p>
                <p>
                  <span className="fw-bold">Okay To Board :- </span>{" "}
                  {traveler.okayToBoard === "YES" ? "YES(₹ 799)" : "NO"}
                </p>
                <p>
                  <span className="fw-bold">Insurance :- </span>{" "}
                  {traveler.insuranceType === "Basic" ? "Basic(₹ 199)" : traveler.insuranceType === "Regular" ? "Regular(₹ 499)" : "Premium(₹ 999)" }
                </p>
                <p>
                  <span className="fw-bold">Tax Price :- </span>{" "}
                  ₹ {traveler.taxPrice}
                </p>
                <p>
                  <span className="fw-bold">Discount Price :- </span>{" "}
                  ₹ {traveler.discountPrice}
                </p>

                <p>
                  <span className="fw-bold">Total Price :- </span>{" "}
                  ₹ {traveler.totalPrice}
                </p>
              </div>
                  </div>
                  <div className="d-flex align-items-end">
                  <button
                    type="button"
                    name="Step-4-Pay"
                    class="btn btn-success ms-4"
                   
                  >
                    Pay Now{" "}
                    <BoxArrowUpRight
                      className="ms-2 text-white mb-1"
                      size={16}
                    />
                  </button>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default CheckOut;
