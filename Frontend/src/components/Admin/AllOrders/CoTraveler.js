import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Download } from "react-bootstrap-icons";
import { saveAs } from "file-saver";
import { Modal, Button } from "react-bootstrap";
import { useAlert } from "react-alert";
import { changeCoTravelerStatus,clearErrors } from "../../../actions/applyVisaAction";
import { addCoVisaData } from "../../../actions/getVisaAction";
import { ADD_CO_VISA_RESET } from "../../../constants/getVisaConstant";
// import { CHANGE_COTRAVELERS_STATUS_RESET } from "../../../constants/applyVisaConstants";

const CoTravelersData = ({ coTraveler, index}) => {
  const { isTraveler } = useSelector((state) => state.travelerDetails);
  const { error } = useSelector((state) => state.changeCoTravelerStatus);
  const { isCoVisaAdded } = useSelector(
    (state) => state.CoVisa
  );
  const dispatch = useDispatch();
  const alert = useAlert();
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

  const [coTravelerStatus, setCoTravelerStatus] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [CoTravelerVisa, setCoTravelerVisa] = useState("");
  const [VisaUploadshow, setVisaUploadShow] = useState(false);
  const handleVisaUploadClose = () => setVisaUploadShow(false);
  const handleVisaUploadShow = () => {
    setVisaUploadShow(true);
  };


  const handleVisaFile = (e) => {
    setCoTravelerVisa(e.target.files[0]);
  };


  const handleUploadVisa = (e) => {
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.set("bookingId", coTraveler.bookingId);
      myForm.set("visa", CoTravelerVisa);
      dispatch(addCoVisaData(myForm));
      handleVisaUploadClose();
    } catch (error) {
      console.log(error);
    }
  };  

  const handleStatusSubmit = (e) => {
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.set("passportNo",coTraveler.passportNo);
      myForm.set("status",coTravelerStatus);
      dispatch(changeCoTravelerStatus(myForm));
      handleClose()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    // if(isCoTravelerStatusChanged){
    //   alert.success(`CoTraveler ${index}  Status changed Successfully`);
    //   dispatch({
    //     type: CHANGE_COTRAVELERS_STATUS_RESET
    //   })
    // }
    if (isCoVisaAdded) {
      alert.success("Visa Added");
      dispatch({
        type: ADD_CO_VISA_RESET,
      });
      window.location.reload();
    }
  },[dispatch,error,alert,isCoVisaAdded])

  return (
    <>
      <h3 className="text-center mt-5">CoTraveler {index} Details</h3>
      <div className="d-flex justify-content-evenly mt-4">
        <p>
          <span className="fw-bold">Booking Id :- </span> {coTraveler.bookingId}
        </p>
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
        <p>
          <span className="fw-bold">Status :- </span> {coTraveler.status}
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
      <h3 className="text-center mt-5">CoTraveler {index} Documents</h3>

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
                  isTraveler ? coTraveler.documents.photograph : ""
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
                onClick={() => handleDownloadClick(coTraveler.documents.photograph, `${coTraveler.firstName}-photograph`)}
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
                  isTraveler ? coTraveler.documents.passport : ""
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
                onClick={() => handleDownloadClick(coTraveler.documents.passport, `${coTraveler.firstName}-passport`)}
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
                  isTraveler ? coTraveler.documents.qualifyingCriteria : ""
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
                onClick={() => handleDownloadClick(coTraveler.documents.qualifyingCriteria, `${coTraveler.firstName}-qualifyingCriteria`)}
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
                  isTraveler ? coTraveler.documents.addressProof : ""
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
                onClick={() => handleDownloadClick(coTraveler.documents.addressProof, `${coTraveler.firstName}-addressProof`)}
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
                  isTraveler ? coTraveler.documents.panCard : ""
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
                onClick={() => handleDownloadClick(coTraveler.documents.panCard, `${coTraveler.firstName}-panCard`)}
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
                  isTraveler ? coTraveler.documents.returnTicket : ""
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
                onClick={() => handleDownloadClick(coTraveler.documents.returnTicket, `${coTraveler.firstName}-returnTicket`)}
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
                  isTraveler ? coTraveler.documents.hotelConfirmation : ""
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
                onClick={() => handleDownloadClick(coTraveler.documents.hotelConfirmation, `${coTraveler.firstName}-hotelConfirmation`)}
              >
                <Download className="me-1 mb-1" /> Download
              </button>
            </td>
          </tr>
          {coTraveler.status === "Accepted" ? (
                    <>
                      <tr className="align-middle">
                        <td>8</td>
                        <td>Visa</td>
                        <td>
                          {coTraveler.visa === "null" ? "" : <>
                          
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/userUploadFile/${
                              isTraveler
                                ? coTraveler.visa
                                : ""
                            }`}
                            alt="photograph"
                            class="d-inline-block align-text-top documents-img"
                          />
                          </>}
                        </td>
                        <td>
                          {coTraveler.visa === "null" ? <> <button
                            type="button"
                            className="btn btn-primary shadow-none  ms-4 ps-4 pe-4"
                            onClick={handleVisaUploadShow}
                          >
                            Upload Visa
                          </button></> : <> <button
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Visa Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleStatusSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="status" className="mb-1">Select Status</label>
              <select
                id="status"
                name="status"
                className="form-select form-select-md mb-2 shadow-none" 
                onChange={(e) => setCoTravelerStatus(e.target.value)}
              >
                <option >Status</option>
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

export default CoTravelersData;
