import React from "react";
import { Download,EmojiExpressionless } from "react-bootstrap-icons";
import { saveAs } from "file-saver";

function CoTraveler({ coTraveler }) {
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
  return (
    <>
      <tr className="align-middle">
        <td>
          {coTraveler.firstName} {coTraveler.lastName}
        </td>
        <td > {coTraveler.passportNo}</td>
        <td > {coTraveler.status}</td>
        <td>
          {coTraveler.status === "Rejected" ? (
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
                onClick={() =>
                  handleDownloadClick(
                    coTraveler.visa,
                    `${coTraveler.firstName}-VISA`
                  )
                }
                disabled={coTraveler.status === "Accepted" ? false : true}
              >
                <Download className="me-1 mb-1" /> Download
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
}

export default CoTraveler;
