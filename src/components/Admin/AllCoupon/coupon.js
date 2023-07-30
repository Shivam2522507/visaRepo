import React from "react";
import {deleteCouponAction} from "../../../actions/couponAction";
import {useDispatch} from "react-redux"

const CouponCard = ({ Coupon }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
   dispatch(deleteCouponAction( (Coupon.code)))
  };

  return (
    <>

        <tr className="align-middle">
          <td>{Coupon.code}</td>
          <td>{Coupon.discount}</td>
          <td>{Coupon.isMultiUse ? ("MultiUse") : ("One Time Use")}</td>
          <td>{Coupon.maxUses}</td>
          <td>{Coupon.usedCount}</td>
          <td>{Coupon.expiryDate}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger shadow-none btn-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>

    </>
  );
};

export default CouponCard;
