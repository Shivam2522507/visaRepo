import React from "react";
import { Link } from "react-router-dom";
import { BoxArrowInRight } from "react-bootstrap-icons";

function MultipleEntry(){
    return (
        <div className="container mt-3 mb-5">
        <div className="row justify-content-center align-items-center px-5">
            <div className="col-lg-4 col-md-6 mt-5 d-flex justify-content-center align-items-center">
                <div className="card visa-card">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                        <h3>48 hours transit visa</h3>
                        <h5 className="text-center">Multiple Entry <br/> Visa</h5>
                        <h1 className="mt-3 fw-bold">5,000 INR</h1>
                        <Link to="/ApplyVisa" class="nav-link mt-2">
                            Apply Now <BoxArrowInRight className="ms-1 text-black" size={36} />
                        </Link>
                        <p className="mt-4"> Connecting Flight Air Ticket Required Processing Time 2 to 4 working days</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 d-flex justify-content-center align-items-center">
                <div className="card visa-card">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                        <h3>48 hours transit visa</h3>
                        <h5 className="text-center">Multiple Entry <br/> Visa</h5>
                        <h1 className="mt-3 fw-bold">5,000 INR</h1>
                        <Link to="/ApplyVisa" class="nav-link mt-2">
                            Apply Now <BoxArrowInRight className="ms-1 text-black" size={36} />
                        </Link>
                        <p className="mt-4"> Connecting Flight Air Ticket Required Processing Time 2 to 4 working days</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 d-flex justify-content-center align-items-center">
                <div className="card visa-card">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                        <h3>48 hours transit visa</h3>
                        <h5 className="text-center">Multiple Entry <br/> Visa</h5>
                        <h1 className="mt-3 fw-bold">5,000 INR</h1>
                        <Link to="/ApplyVisa" class="nav-link mt-2">
                            Apply Now <BoxArrowInRight className="ms-1 text-black" size={36} />
                        </Link>
                        <p className="mt-4"> Connecting Flight Air Ticket Required Processing Time 2 to 4 working days</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 d-flex justify-content-center align-items-center">
                <div className="card visa-card">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                        <h3>48 hours transit visa</h3>
                        <h5 className="text-center">Multiple Entry <br/> Visa</h5>
                        <h1 className="mt-3 fw-bold">5,000 INR</h1>
                        <Link to="/ApplyVisa" class="nav-link mt-2">
                            Apply Now <BoxArrowInRight className="ms-1 text-black" size={36} />
                        </Link>
                        <p className="mt-4"> Connecting Flight Air Ticket Required Processing Time 2 to 4 working days</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}
export default MultipleEntry;