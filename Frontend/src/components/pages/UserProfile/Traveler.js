import React, { useEffect, useState } from "react";
import { Download, EmojiExpressionless } from "react-bootstrap-icons";
import CoTraveler from "./CoTraveler";
import axios from "axios";
import { saveAs } from "file-saver";

function Traveler({ mainTraveler }) {
  const [showCoTraveler, setShowCoTraveler] = useState(true);
  const [visaName, setVisaName] = useState("");
  const getVisaCardName = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/VisaCard/${id}`
    );
    setVisaName(data.visaCard.name);
  };
  if (!visaName) {
    getVisaCardName(mainTraveler.visaType);
  }

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



  useEffect(() => {
    if (mainTraveler.numberOfPassengers === 1) {
      setShowCoTraveler(false);
    } else {
      setShowCoTraveler(true);
    }
  }, [mainTraveler.numberOfPassengers]);
  return (
    <>
      <div className="card shadow mt-3">
        <div className="card-body p-3 pb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-bold mb-0 text-dark">
            Application No. :- {mainTraveler._id}
            </h6>
            <p className="text-secondary fw-bold mb-0">
              Date Of Application: {mainTraveler.bookingDate}
            </p>
          </div>
          <div className="d-flex justify-content-around align-items-center mt-3 p-2 ">
            <p>Visa Type :- {visaName}</p>
            <p>
              GST Opted :- {mainTraveler.GSTInvoice === "null" ? "No" : "Yes"}
            </p>
            <p>Insurance Type :- {mainTraveler.insuranceType}</p>
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <p>Tax Price :- {mainTraveler.taxPrice}</p>
            <p>Discount Price :- {mainTraveler.discountPrice}</p>
            <p>Total Price :- {mainTraveler.totalPrice}</p>
          </div>
          <table className="table table-hover border text-center mt-3">
            <thead>
              <tr className="bg-dark text-light">
                <th scope="col">Full Name</th>
                <th scope="col">Passport No</th>
                <th scope="col">Status</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle">
                <td>
                  {mainTraveler.firstName} {mainTraveler.lastName}
                </td>
                <td>
                  {mainTraveler.passportNo}
                </td>
                <td>{mainTraveler.status}</td>
                <td>
                  {mainTraveler.status === "Rejected" ? (
                    <>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-danger ms-4 ps-4 pe-4"
                      >
                        <EmojiExpressionless className="me-2 mb-1" /> Rejected
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        name="download"
                        id="status"
                        class="btn btn-success ms-4 ps-4 pe-4"
                        disabled={
                          mainTraveler.status === "Accepted" ? false : true
                        }
                        onClick={() =>
                          handleDownloadClick(
                            mainTraveler.visa,
                            `${mainTraveler.firstName}-VISA`
                          )
                        }
                      >
                        <Download className="me-1 mb-1" /> Download
                      </button>
                    </>
                  )}
                </td>
              </tr>
              {showCoTraveler && (
                <>
                  {mainTraveler.coTravelers &&
                    mainTraveler.coTravelers.map((coTraveler) => (
                      <CoTraveler coTraveler={coTraveler} />
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Traveler;
