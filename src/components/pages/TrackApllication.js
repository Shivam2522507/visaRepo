import React,{ useEffect } from "react";
import "../inc/css/VisaForm.css";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";

function TrackApllication() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const Navigate = useNavigate();
  useEffect(() => {
 
    if (isAuthenticated === false) {
      Navigate("/login");
    }
  
      
    }, [isAuthenticated,Navigate]);
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container pt-4">
          <div className="card shadow">
            <div className="card-body p-3 pt-4 pb-4">
              <h2 className="fw-bold trackApplication-head">
                Track Application Status
              </h2>
              <div>
                <form>
                  <div className="d-flex align-items-center mt-3">
                    <input
                      name="trackApplication"
                      required
                      type="text"
                      class="form-control shadow-none trackApplicationInput text-secondary"
                      placeholder="Please Enter Application Number"
                    />
                    <button
                      type="button"
                      name="track"
                      id="trackApplicationBtn"
                      class="btn btn-success ms-4 ps-4 pe-4"
                    >
                      Track
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="card shadow mt-5">
            <div className="card-body p-3 pb-4">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold mb-0 text-dark">
                  Primary <br /> Aapplicant
                </h6>
                <p className="text-secondary fw-bold mb-0">
                  Date Of Application: mm/dd/yyyy
                </p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div>
                  <p className="text-secondary mb-0">
                    Application Number: **********
                  </p>
                  <p className="text-secondary mb-0">Co-Traveler(Name): </p>
                  <p className="text-secondary mb-0 mt-3">
                    Insurance Opted: Yes
                  </p>
                  <p className="text-secondary mb-0">
                    Okay To Board Opted: Yes
                  </p>
                  <p className="text-secondary mb-0 mt-3">Visa Price: </p>
                  <p className="text-secondary mb-0">Processing Fees: </p>
                  <p className="text-secondary mb-0">GST: </p>
                  <p className="text-secondary mb-0">Total Amount: </p>
                </div>
                <div className="d-flex justify-content-end align-items-end">
                  <button
                    type="button"
                    name="track"
                    id="status"
                    class="btn btn-dark ms-4 ps-4 pe-4"
                  >
                    Status
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion mt-5 pb-4" id="accordionExample">
            <div class="accordion-item shadow">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#PastApplication"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Past Application
                </button>
              </h2>
              <div
                id="PastApplication"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body pb-4">
                  <div className="card shadow mt-3">
                    <div className="card-body p-3 pb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-bold mb-0 text-dark">
                          Primary <br /> Aapplicant
                        </h6>
                        <p className="text-secondary fw-bold mb-0">
                          Date Of Application: mm/dd/yyyy
                        </p>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <p className="text-secondary mb-0">
                            Application Number: **********
                          </p>
                          <p className="text-secondary mb-0">
                            Co-Traveler(Name):{" "}
                          </p>
                          <p className="text-secondary mb-0 mt-3">
                            Insurance Opted: Yes
                          </p>
                          <p className="text-secondary mb-0">
                            Okay To Board Opted: Yes
                          </p>
                          <p className="text-secondary mb-0 mt-3">
                            Visa Price:{" "}
                          </p>
                          <p className="text-secondary mb-0">
                            Processing Fees:{" "}
                          </p>
                          <p className="text-secondary mb-0">GST: </p>
                          <p className="text-secondary mb-0">Total Amount: </p>
                        </div>
                        <div className="d-flex justify-content-end align-items-end">
                          <button
                            type="button"
                            name="track"
                            id="status"
                            class="btn btn-dark ms-4 ps-4 pe-4"
                          >
                            Status
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow mt-3">
                    <div className="card-body p-3 pb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-bold mb-0 text-dark">
                          Primary <br /> Aapplicant
                        </h6>
                        <p className="text-secondary fw-bold mb-0">
                          Date Of Application: mm/dd/yyyy
                        </p>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <p className="text-secondary mb-0">
                            Application Number: **********
                          </p>
                          <p className="text-secondary mb-0">
                            Co-Traveler(Name):{" "}
                          </p>
                          <p className="text-secondary mb-0 mt-3">
                            Insurance Opted: Yes
                          </p>
                          <p className="text-secondary mb-0">
                            Okay To Board Opted: Yes
                          </p>
                          <p className="text-secondary mb-0 mt-3">
                            Visa Price:{" "}
                          </p>
                          <p className="text-secondary mb-0">
                            Processing Fees:{" "}
                          </p>
                          <p className="text-secondary mb-0">GST: </p>
                          <p className="text-secondary mb-0">Total Amount: </p>
                        </div>
                        <div className="d-flex justify-content-end align-items-end">
                          <button
                            type="button"
                            name="track"
                            id="status"
                            class="btn btn-dark ms-4 ps-4 pe-4"
                          >
                            Status
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrackApllication;
