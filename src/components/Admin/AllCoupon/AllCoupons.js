import React, { useState, useEffect } from "react";
import {
  clearErrors,
  createCouponAction,
  getAllCouponAction,
} from "../../../actions/couponAction";
import { useSelector, useDispatch } from "react-redux";
import { PlusSquare } from "react-bootstrap-icons";
import CouponCard from "./coupon";
import Loader from "../../inc/Loader/Loader";
import { useAlert } from "react-alert";
import { Modal, Button } from "react-bootstrap";
import { CREATE_COUPON_RESET, DELETE_COUPON_RESET } from "../../../constants/couponConstants";

function AllCoupons() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, Coupons } = useSelector((state) => state.allCoupon);
  const { isCreated } = useSelector((state) => state.createCoupon);
  const { isDeleted } = useSelector((state) => state.deleteCoupon);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true);
  };

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isMultiused, setisMultiused] = useState("false");
  const [maxUses, setMaxUses] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("code", code);
    myForm.set("discount", discount);
    myForm.set("expiryDate", expiryDate);
    myForm.set("isMultiUse", isMultiused);
    myForm.set("maxUses", maxUses);
    dispatch(createCouponAction(myForm));
    handleClose();
  };

  useEffect(() => {
    if (isCreated) {
      alert.success("Coupon Created Successfully");
      dispatch({
        type: CREATE_COUPON_RESET,
      });
      dispatch(getAllCouponAction());
      setCode("");
      setDiscount("");
      setExpiryDate("")
    }
    if (isDeleted) {
      alert.success("Coupon Deleted Successfully");
      dispatch({
        type: DELETE_COUPON_RESET,
      });
      dispatch(getAllCouponAction());
    }
  }, [dispatch, alert, isCreated,isDeleted]);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllCouponAction());
  }, [dispatch, error, alert]);
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
              <h3 className="mb-4">All Coupons</h3>

              <div className="card border-0 shadow mb-4">
                <div className="card-body">
                  <div class="text-end mb-4">
                    <button
                      type="button"
                      class="btn btn-dark shadow-none btn-sm"
                      onClick={handleShow}
                    >
                      <PlusSquare className="me-1" /> ADD
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover border text-center">
                      <thead>
                        <tr className="bg-dark text-light">
                          <th scope="col">Code</th>
                          <th scope="col">Discount(INR)</th>
                          <th scope="col">Type</th>
                          <th scope="col">Max Uses</th>
                          <th scope="col">No of Time Used</th>
                          <th scope="col">Expiry Date</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Coupons &&
                          Coupons.map((Coupon) => (
                            <CouponCard key={Coupon._id} Coupon={Coupon} />
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
              <label htmlFor="isMultiused">is Multiuse</label>
              <input
                type="text"
                className="form-control shadow-none"
                id="isMultiused"
                name="isMultiused"
                checked={isMultiused}
                onChange={(e) => setisMultiused(e.target.value)}
              />
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
}
export default AllCoupons;
