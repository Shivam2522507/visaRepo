import React from "react";
import { useSelector } from "react-redux";


const CoTravelersData = ({ coTraveler, index }) => {
  const { isTraveler } = useSelector((state) => state.travelerDetails);

  return (
    <>
      <h3 className="text-center mt-5">CoTraveler {index} Details</h3>
      <div className="d-flex justify-content-evenly mt-4">
        <p>
          <span className="fw-bold">Title :- </span> {coTraveler.title}
        </p>
        <p>
          <span className="fw-bold">Full Name :- </span> {coTraveler.firstName}{" "}
          {coTraveler.lastName}
        </p>
        <p>
          <span className="fw-bold">D.O.B :- </span> {coTraveler.dob}
        </p>
        <p>
          <span className="fw-bold">Contact No :- </span> {coTraveler.contactNo}
        </p>
      </div>
      <div className="d-flex justify-content-evenly mt-2">
        <p>
          <span className="fw-bold">Nationality :- </span>{" "}
          {coTraveler.nationality}
        </p>
        <p>
          <span className="fw-bold">Passport No. :- </span>{" "}
          {coTraveler.passportNo}
        </p>
        <p>
          <span className="fw-bold">Email :- </span> {coTraveler.email}
        </p>
      </div>
      <h3 className="text-center mt-5">CoTraveler {index} Documents</h3>

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
                src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                  isTraveler ? coTraveler.documents.photograph : ""
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
                src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                  isTraveler ? coTraveler.documents.passport : ""
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
                src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                  isTraveler ? coTraveler.documents.qualifyingCriteria : ""
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
                src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                  isTraveler ? coTraveler.documents.addressProof : ""
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
                src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                  isTraveler ? coTraveler.documents.panCard : ""
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
                src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                  isTraveler ? coTraveler.documents.returnTicket : ""
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
                src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                  isTraveler ? coTraveler.documents.hotelConfirmation : ""
                }`}
                alt="photograph"
                class="d-inline-block align-text-top documents-img"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CoTravelersData;
