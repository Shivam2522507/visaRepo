import React, { useState, useEffect } from "react";
import { getRoe } from "../../../actions/roeActions";
import { useSelector, useDispatch } from "react-redux";
import { PencilSquare } from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getVisaCard,
  updateVisa,
} from "../../../actions/visaAction";
import Loader from "../../inc/Loader/Loader";

const VisaCard = ({ visaCard }) => {
  const alert = useAlert();
  const roeData = useSelector((state) => state.roe.roe[0]?.roe);
  const { error, isUpdated, loading } = useSelector(
    (state) => state.updateVisa
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setVisaName(visaCard.name);
    setVisaType(visaCard.visaType);
    setVisaPrice(visaCard.price);
  };

  const [visaName, setVisaName] = useState("");
  const [visaType, setVisaType] = useState("");
  const [visaPrice, setVisaPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", visaName);
    myForm.set("visaType", visaType);
    myForm.set("price", visaPrice);
    dispatch(updateVisa(visaCard._id, myForm));
    handleClose();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      dispatch(getVisaCard());
    }
  }, [dispatch, alert,isUpdated,  error]);

  useEffect(() => {
    dispatch(getRoe());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <tr className="align-middle">
          <td>{visaCard._id}</td>
          <td>{visaCard.name}</td>
          <td>{visaCard.visaType}</td>
          <td>{roeData * visaCard.price}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary shadow-none btn-sm"
              onClick={handleShow}
            >
              <PencilSquare />
            </button>
          </td>
        </tr>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{visaCard.name} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="visaType">Name</label>
              <input
                type="text"
                className="form-control"
                id="visaName"
                name="visaName"
                value={visaName}
                onChange={(e) => setVisaName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="visaType">Visa Type</label>
              <input
                type="text"
                className="form-control"
                id="visaType"
                name="visaType"
                value={visaType}
                onChange={(e) => setVisaType(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="price">Price (Dirham)</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={visaPrice}
                onChange={(e) => setVisaPrice(e.target.value)}
              />
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
    </>
  );
};

export default VisaCard;
