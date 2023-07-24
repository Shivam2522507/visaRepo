import React from "react";
import { Link } from "react-router-dom";
import { BoxArrowInRight } from "react-bootstrap-icons";

const VisaCard = ({ visaCard }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6  d-flex justify-content-center align-items-center  mt-5">
        <Link to={`/ApplyVisa/${visaCard._id}`}>
          <div className="card visa-card">
            <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
              <h3>{visaCard.name}</h3>
              <h5 className="text-center">
                {visaCard.visaType} Entry <br/> Visa
              </h5>
              <h1 className="mt-lg-3 mt-md-2 fw-bold">{visaCard.price} INR</h1>
              <Link to="/ApplyVisa" class="nav-link mt-2">
                Apply Now{" "}
                <BoxArrowInRight className=" ms-1 text-black BoxArrowInRight" />
              </Link>
              <p className="mt-5">
                {" "}
                Connecting Flight Air Ticket Required Processing Time 2 to 4
                working days
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VisaCard;
