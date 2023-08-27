import React, { useEffect, useState } from "react";
import {
  getTravelers,
  clearErrors,
  searchTravelers,
  filterByVisaType,
  filterByDate,
} from "../../../actions/applyVisaAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderData from "./orders";
import { useAlert } from "react-alert";
import { DELETE_TRAVELER_RESET } from "../../../constants/applyVisaConstants";
import Loader from "../../inc/Loader/Loader";
import { FilterLeft, XLg } from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import "../Admin.css";
import { getVisaCard } from "../../../actions/visaAction";

function AllOrders() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const alert = useAlert();
  const { error, travelers } = useSelector((state) => state.allTraveler);
  const { isDeleted, loading } = useSelector((state) => state.deleteTraveler);
  const { isAuthenticatedAdmin } = useSelector((state) => state.admin);
  const { visaCards } = useSelector((state) => state.visaCards);

  const [search, setSearch] = useState("");
  const searchHandle = (e) => {
    setSearch(e);
    let key = e;
    if (key) {
      dispatch(searchTravelers(key));
    } else {
      dispatch(getTravelers());
    }
  };

  const [showModel1, setShowModel1] = useState(false);
  const handleCloseModel1 = () => setShowModel1(false);
  const handleShowModel1 = () => {
    setShowModel1(true);
  };
  const [showModel2, setShowModel2] = useState(false);
  const handleCloseModel2 = () => setShowModel2(false);
  const handleShowModel2 = () => {
    setShowModel2(true);
  };

  const [getFilterVisaType, setFilterVisaType] = useState("");
  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")

  const filterVisa = () => {
    let key = getFilterVisaType;
    if (key) {
      dispatch(filterByVisaType(key));
      handleCloseModel1();
    }
  };
  const filterVisaDate = () => {
    
    if (startDate&&endDate) {
      dispatch(filterByDate(startDate,endDate));
      handleCloseModel2();
    }
  };
  const removeFilter = () => {
    dispatch(getTravelers());
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticatedAdmin === false) {
      Navigate("/adminLogin");
    }
    if (isAuthenticatedAdmin) {
      dispatch(getTravelers());
    }
    if (isDeleted) {
      alert.success("Traveler Deleted Successfully");
      dispatch({
        type: DELETE_TRAVELER_RESET,
      });
      dispatch(getTravelers());
    }
    dispatch(getVisaCard());
  }, [dispatch, Navigate, error, alert, isAuthenticatedAdmin, isDeleted]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-lg-10 ms-auto p-4 overflow-hidden text-center me-1"
              id="main-content"
            >
              <h3 className="mb-4">All Bookings</h3>

              <div className="card border-0 shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn  btn-sm shadow-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#filter"
                          aria-controls="navbarNav"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <FilterLeft size={26} />
                        </button>
                        <div
                          className="p-2 collapse navbar-collapse filter-nav ms-2"
                          id="filter"
                        >
                          <ul className="nav nav-pills">
                            <li className="nav-item me-3">
                              <button onClick={handleShowModel1}>
                                By Visa Type
                              </button>
                            </li>
                            <li className="nav-item">
                              <button onClick={handleShowModel2}>By Order Date</button>
                            </li>
                            <li className="nav-item ms-5 x-btn">
                              <button
                              className="btn  btn-sm shadow-none"
                              type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#filter"
                                aria-controls="navbarNav"
                                aria-expanded="True"
                                aria-label="Toggle navigation"
                                onClick={removeFilter}
                              >
                                <XLg />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => {
                          searchHandle(e.target.value);
                        }}
                        className="form-control mb-3 shadow-none"
                        style={{ width: "350px" }}
                        value={search}
                      />
                    </div>
                    <table className="table table-hover border text-center">
                      <thead>
                        <tr className="bg-dark text-light">
                          <th scope="col">Sr no</th>
                          <th scope="col">Booking id</th>
                          <th scope="col">Visa Type</th>
                          <th scope="col">Onward Date</th>
                          <th scope="col">Return Date</th>
                          <th scope="col">No Of Traveler</th>
                          <th scope="col">Main Traveler</th>
                          <th scope="col">Date</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {travelers &&
                          travelers.map((mainTraveler, index) => (
                            <OrderData
                              mainTraveler={mainTraveler}
                              index={index + 1}
                            />
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal show={showModel1} onHide={handleCloseModel1}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Visa Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group mb-3">
            <label htmlFor="visaType" className="mb-1">
              Select Visa Type
            </label>
            <select
              id="visaType"
              name="visaType"
              className="form-select form-select-md mb-2 shadow-none"
              onChange={(e) => setFilterVisaType(e.target.value)}
            >
              <option>Visa Types</option>
              {visaCards &&
                visaCards.map((visaCards) => (
                  <option value={visaCards._id}>{visaCards.name}</option>
                ))}
            </select>
          </div>

          <hr />
          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={handleCloseModel1}
            >
              Close
            </Button>
            <Button variant="primary" type="button" onClick={filterVisa}>
              Filter
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showModel2} onHide={handleCloseModel2}>
        <Modal.Header closeButton>
          <Modal.Title>Filter By Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <div className="form-group mb-3">
              <label htmlFor="filterDate" className="mb-1">
                Select Start Date
              </label>
              <input
                name="filterDate"
                id="filterDate"
                required
                type="date"
                class="form-control shadow-none  mt-2"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="filterDate" className="mb-1">
                Select End Date
              </label>
              <input
                name="filterDate"
                id="filterDate"
                required
                type="date"
                class="form-control shadow-none  mt-2"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <hr />
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={handleCloseModel2}>
                Close
              </Button>
              <Button variant="primary" type="button" onClick={filterVisaDate}>
                Filter
              </Button>
            </div>
         
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AllOrders;
