import React, { useEffect } from "react";
import { clearErrors, getVisaCard } from "../../../actions/visaAction";
import { useSelector, useDispatch } from "react-redux";
import VisaCard from "./visaCard";
import Loader from "../../inc/Loader/Loader";
import { useAlert } from "react-alert";
import { VISA_UPDATE_RESET } from "../../../constants/visaConstants";

function AllVisaCards() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, visaCards } = useSelector((state) => state.visaCards);
  const {  isUpdated} = useSelector(
    (state) => state.updateVisa
  );
  useEffect(() => {
    
    if (isUpdated) {
      alert.success("Visa Updated Successfully");
      dispatch({
        type: VISA_UPDATE_RESET,
      });
    }
  }, [dispatch, alert, isUpdated, error]);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getVisaCard());
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
              <h3 className="mb-4">All Visa Cards</h3>

              <div className="card border-0 shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover border text-center">
                      <thead>
                        <tr className="bg-dark text-light">
                          <th scope="col">Sr no</th>
                          <th scope="col">id</th>
                          <th scope="col">Visa Name</th>
                          <th scope="col">Visa Type</th>
                          <th scope="col">Price (INR) </th>
                          <th scope="col">Service Fee (INR) </th>
                          <th scope="col">Management Fee (INR) </th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visaCards &&
                          visaCards.map((visaCard,index) => (
                            <VisaCard key={visaCard._id} visaCard={visaCard} index={index + 1}/>
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
    </>
  );
}
export default AllVisaCards;
