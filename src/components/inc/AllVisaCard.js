import React, { useEffect } from "react";
import { clearErrors, getVisaCard } from "../../actions/visaAction";
import { useSelector, useDispatch } from "react-redux";
import VisaCard from "./visaCards";
import Loader from "./Loader/Loader";
import { useAlert } from "react-alert";

function AllVisaCard() {
  
  const dispatch = useDispatch();
  const { loading, error, visaCards } = useSelector((state) => state.visaCards);
  const alert = useAlert();
  useEffect(() => {

    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getVisaCard());
  }, [dispatch, error , alert]);
  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <div className="container mt-3 mb-5">
          <div className="row justify-content-center align-items-center px-5">
            {visaCards &&
              visaCards.map((visaCard) => <VisaCard visaCard={visaCard} />)}
          </div>
        </div>
      )}
    </>
  );
}
export default AllVisaCard;
