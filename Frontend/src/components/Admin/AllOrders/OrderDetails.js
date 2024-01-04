import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getTravelerDetails,
  clearErrors,
  addOtherFields,
} from "../../../actions/applyVisaAction";
import { saveAs } from "file-saver";
import { useAlert } from "react-alert";
import Loader from "../../inc/Loader/Loader";
import { getVisaCardDetails } from "../../../actions/visaAction";
import { Download } from "react-bootstrap-icons";
import "../Admin.css";
import CoTravelersData from "./CoTraveler";
import { Modal, Button } from "react-bootstrap";
import {
  ADD_OTHER_FIELDS_RESET,
  CHANGE_COTRAVELERS_STATUS_RESET,
} from "../../../constants/applyVisaConstants";
import { ADD_VISA_RESET } from "../../../constants/getVisaConstant";
import { addVisaData } from "../../../actions/getVisaAction";

const OrderDetails = () => {
  const params = useParams();
  const OrderID = params.id;

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, traveler, isTraveler } = useSelector(
    (state) => state.travelerDetails
  );
  const { isOtherFieldsAdded } = useSelector((state) => state.addOtherField);
  const { visaCard } = useSelector((state) => state.VisaCardDetails);
  const { isCoTravelerStatusChanged } = useSelector(
    (state) => state.changeCoTravelerStatus
  );
  const { isVisaAdded } = useSelector(
    (state) => state.Visa
  );

  const visaId = traveler.visaType;

  const [showCoTraveler, setShowCoTraveler] = useState(true);

  const handleDownloadClick = (filename, name) => {
    const imageUrl = `${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${filename}`;

    // Customize the downloaded filename based on the associated name
    const downloadedFilename = `${name}.jpg`;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, downloadedFilename);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  const [mainTravelerStatus, setMainTravelerStatus] = useState("");

  const [mainTravelerVisa, setMainTravelerVisa] = useState("");
  const [VisaUploadshow, setVisaUploadShow] = useState(false);
  const handleVisaUploadClose = () => setVisaUploadShow(false);
  const handleVisaUploadShow = () => {
    setVisaUploadShow(true);
  };


  const handleVisaFile = (e) => {
    setMainTravelerVisa(e.target.files[0]);
  };


  const handleUploadVisa = (e) => {
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.set("bookingId", traveler.bookingId);
      myForm.set("visa", mainTravelerVisa);
      dispatch(addVisaData(myForm));
      handleVisaUploadClose();
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleStatus = (e) => {
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.set("status", mainTravelerStatus);
      dispatch(addOtherFields(OrderID, myForm));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isOtherFieldsAdded) {
      alert.success("Main Traveler Status changed Successfully");
      dispatch({
        type: ADD_OTHER_FIELDS_RESET,
      });
    }
    if (isVisaAdded) {
      alert.success("Visa Added");
      dispatch({
        type: ADD_VISA_RESET,
      });
      const mainTravelerId = new FormData();
      mainTravelerId.append("mainTravelerId", OrderID);
      dispatch(getTravelerDetails(mainTravelerId));
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
    if (isCoTravelerStatusChanged) {
      alert.success(`CoTraveler Status changed Successfully`);
      dispatch({
        type: CHANGE_COTRAVELERS_STATUS_RESET,
      });
    }
  }, [
    dispatch,
    error,
    alert,
    OrderID,
    visaId,
    traveler.numberOfPassengers,
    isOtherFieldsAdded,
    isCoTravelerStatusChanged,
    isVisaAdded,
  ]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div class="container-fluid">
          <div class="row">
            <div
              className="col-lg-10 ms-auto p-4 overflow-hidden me-1"
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
                  {traveler.okayToBoard === "YES" ? "YES(799)" : "NO"}
                </p>
                <p>
                  <span className="fw-bold">Insurance Type :- </span>{" "}
                  {traveler.insuranceType === "Basic"
                    ? "Basic(199)"
                    : traveler.insuranceType === "Regular"
                    ? "Regular(499)"
                    : "Premium(999)"}
                </p>
                <p>
                  <span className="fw-bold">couponCode :- </span>{" "}
                  {traveler.couponCode}
                </p>
              </div>
              <div className="d-flex justify-content-evenly mt-3">
                <p>
                  <span className="fw-bold">Service Fee :- </span>{" "}
                  {visaCard.serviceFee}
                </p>
                <p>
                  <span className="fw-bold">Management Fee :- </span>{" "}
                  {visaCard.managementFee}
                </p>
                <p>
                  <span className="fw-bold">Tax Price :- </span>{" "}
                  {traveler.taxPrice}
                </p>
                <p>
                  <span className="fw-bold">Discount Price :- </span>{" "}
                  {traveler.discountPrice}
                </p>

                <p>
                  <span className="fw-bold">Total Price :- </span>{" "}
                  {traveler.totalPrice}
                </p>
              </div>
              <h3 className="text-center mt-5">Main Traveler Details</h3>
              <div className="d-flex justify-content-evenly mt-4">
                <p>
                  <span className="fw-bold">Booking Id :- </span>{" "}
                  {traveler.bookingId}
                </p>
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
                <p>
                  <span className="fw-bold">Status :- </span> {traveler.status}
                </p>
                <p>
                  <button
                    type="button"
                    className="btn btn-primary shadow-none btn-sm "
                    onClick={handleShow}
                  >
                    Change Status
                  </button>
                </p>
              </div>
              <h3 className="text-center mt-5">Main Traveler Documents</h3>

              <table className="table table-hover border text-center">
                <thead>
                  <tr className="bg-dark text-light">
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Images</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <td>1</td>
                    <td> Photograph</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                          isTraveler ? traveler.documents.photograph : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        onClick={() =>
                          handleDownloadClick(
                            traveler.documents.photograph,
                            `${traveler.firstName}-photograph`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>2</td>
                    <td> Passport</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                          isTraveler ? traveler.documents.passport : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        onClick={() =>
                          handleDownloadClick(
                            traveler.documents.passport,
                            `${traveler.firstName}-passport`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>3</td>
                    <td> Qualifying Criteria</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                          isTraveler
                            ? traveler.documents.qualifyingCriteria
                            : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        onClick={() =>
                          handleDownloadClick(
                            traveler.documents.qualifyingCriteria,
                            `${traveler.firstName}-qualifyingCriteria`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>4</td>
                    <td> Address Proof</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                          isTraveler ? traveler.documents.addressProof : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        onClick={() =>
                          handleDownloadClick(
                            traveler.documents.addressProof,
                            `${traveler.firstName}-addressProof`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>5</td>
                    <td> PANCard</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                          isTraveler ? traveler.documents.panCard : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        onClick={() =>
                          handleDownloadClick(
                            traveler.documents.panCard,
                            `${traveler.firstName}-panCard`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>6</td>
                    <td> Return Ticket</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                          isTraveler ? traveler.documents.returnTicket : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        onClick={() =>
                          handleDownloadClick(
                            traveler.documents.returnTicket,
                            `${traveler.firstName}-returnTicket`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td>7</td>
                    <td> Hotel Confirmation</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                          isTraveler ? traveler.documents.hotelConfirmation : ""
                        }`}
                        alt="photograph"
                        class="d-inline-block align-text-top documents-img"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        onClick={() =>
                          handleDownloadClick(
                            traveler.documents.hotelConfirmation,
                            `${traveler.firstName}-hotelConfirmation`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </td>
                  </tr>

                  {traveler.status === "Accepted" ? (
                    <>
                      <tr className="align-middle">
                        <td>8</td>
                        <td>Visa</td>
                        <td>
                          {traveler.visa === "null" ? "" : <>
                          
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                              isTraveler
                                ? traveler.visa
                                : ""
                            }`}
                            alt="photograph"
                            class="d-inline-block align-text-top documents-img"
                          />
                          </>}
                        </td>
                        <td>
                          {traveler.visa === "null" ? <><button
                            type="button"
                            className="btn btn-primary shadow-none  ms-4 ps-4 pe-4"
                            onClick={handleVisaUploadShow}
                          >
                            Upload Visa
                          </button></> : <><button
                            type="button"
                            className="btn btn-primary shadow-none  ms-4 ps-4 pe-4"
                            onClick={handleVisaUploadShow}
                          >
                           Edit
                          </button></>}
                      
                        </td>
                      </tr>
                    </>
                  ) : (
                    ""
                  )}
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
            </div>
          </div>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Visa Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleStatus}>
            <div className="form-group mb-3">
              <label htmlFor="status" className="mb-1">
                Select Status
              </label>
              <select
                id="status"
                name="status"
                className="form-select form-select-md mb-2 shadow-none"
                onChange={(e) => setMainTravelerStatus(e.target.value)}
              >
                <option>Status</option>
                <option value="Processing">Processing</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <hr />
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={VisaUploadshow} onHide={handleVisaUploadClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload VISA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUploadVisa}>
            <div className="form-group mb-3">
              <input type="file" id="visa" name="visa" onChange={handleVisaFile} />
            </div>


            <hr />
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleVisaUploadClose}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderDetails;
