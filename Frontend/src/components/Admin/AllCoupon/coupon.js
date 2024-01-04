import React, { useState, useEffect } from "react";
import {
  deleteCouponAction,
  getAllCouponAction,
  clearErrors,
  updateCoupon,
} from "../../../actions/couponAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../inc/Loader/Loader";
import { PencilSquare } from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import { getVisaCard } from "../../../actions/visaAction";

const CouponCard = ({ Coupon, index }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, isUpdated, loading } = useSelector(
    (state) => state.updateCoupon
  );
  const {visaCards} = useSelector((state) => state.visaCards);
  const handleDelete = () => {
    dispatch(deleteCouponAction(Coupon.code));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setCode(Coupon.code);
    setDiscount(Coupon.discount);
    setExpiryDate(Coupon.expiryDate);
    setStartDate(Coupon.startDate);
    setisMultiused(Coupon.isMultiUse);
    setMaxUses(Coupon.maxUses);
    setforVisaId(Coupon.forVisaId);
  };

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isMultiused, setisMultiused] = useState("");
  const [maxUses, setMaxUses] = useState("");
  const [forVisaId, setforVisaId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("code", code);
    myForm.set("discount", discount);
    myForm.set("startDate", startDate);
    myForm.set("expiryDate", expiryDate);
    myForm.set("isMultiUse", isMultiused);
    myForm.set("maxUses", maxUses);
    myForm.set("forVisaId", forVisaId);
    dispatch(updateCoupon(myForm));
    handleClose();
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      dispatch(getAllCouponAction());
    }
    dispatch(getVisaCard())
  }, [dispatch, alert, isUpdated, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <tr className="align-middle">
          <td>{index}</td>
          <td>{Coupon.code}</td>
          <td>{Coupon.discount}</td>
          <td>{Coupon.isMultiUse ? "MultiUse" : "One Time Use"}</td>
          <td>{Coupon.maxUses}</td>
          {/* <td>{Coupon.usedCount}</td> */}
          <td>{Coupon.startDate}</td>
          <td>{Coupon.expiryDate}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary shadow-none btn-sm me-2"
              onClick={handleShow}
            >
              <PencilSquare />
            </button>
            <button
              type="button"
              className="btn btn-danger shadow-none btn-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="Code">Coupon Code</label>
              <input
                type="text"
                className="form-control shadow-none"
                id="Code"
                name="Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="discount">Discount Price</label>
              <input
                type="number"
                className="form-control shadow-none"
                id="discount"
                name="discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="expiryDate">Start Date</label>
              <input
                type="date"
                className="form-control shadow-none"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="date"
                className="form-control shadow-none"
                id="expiryDate"
                name="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <select
                id="isMultiused"
                name="isMultiused"
                className="couponSelect"
                onChange={(e) => setisMultiused(e.target.value)}
              >
                <option>isMultiused :</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="maxUses">max Uses</label>
              <input
                type="number"
                className="form-control shadow-none "
                id="maxUses"
                name="maxUses"
                value={maxUses}
                onChange={(e) => setMaxUses(e.target.value)}
              />
            </div>
             <div className="form-group mb-3">
              <select
                id="forVisaId"
                name="forVisaId"
                className="couponSelect"
                onChange={(e) => setforVisaId(e.target.value)}
              >
                <option>Visa {Coupon.forVisaId}</option>
                {visaCards &&
                        visaCards.map((visaCards) => (
                          <option key={visaCards._id} value={visaCards._id}>
                            {visaCards.name}
                          </option>
                ))}
                <option value="null">For All</option>

              </select>
            </div>

            <hr />
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleClose}
                type="reset"
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

export default CouponCard;
