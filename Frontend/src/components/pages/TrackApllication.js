import React, { useEffect, useState } from "react";
import "../inc/css/VisaForm.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getTravelerByUser,
  trackTravelerAction,
} from "../../actions/applyVisaAction";
import Traveler from "./UserProfile/Traveler";
import Loader from "../inc/Loader/Loader";
import { XLg } from "react-bootstrap-icons";
import TrackTraveler from "./UserProfile/TrackTraveler";
import { TRACK_TRAVELER_RESET } from "../../constants/applyVisaConstants";

function TrackApllication() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isTraveler, travelers, travelerLoading } = useSelector(
    (state) => state.getTravelerByUser
  );
  const { isTravelerTrack, trackTraveler } = useSelector(
    (state) => state.trackTraveler
  );
  const [trackTravelerId, setTrackTravelerId] = useState("");

  const handleTrack = async (e) => {
    e.preventDefault();
    try {
      const mainTravelerId = new FormData();
      mainTravelerId.append("mainTravelerId", trackTravelerId);
      dispatch(trackTravelerAction(mainTravelerId));
    } catch (error) {
      console.error("Error in Track travelers:", error);
    }
  };


  const handleCross = () => {
    dispatch({type:TRACK_TRAVELER_RESET})
    setTrackTravelerId("")
  }





  useEffect(() => {
    if (isAuthenticated === false) {
      Navigate("/login");
    }

    if (!isTraveler && isAuthenticated) {
      if(user && user._id){
        const userId = user._id;
        dispatch(getTravelerByUser(userId));
      }
    }
  }, [isAuthenticated, Navigate, isTraveler, dispatch, user]);
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container pt-4">
          <div className="card shadow mb-4">
            <div className="card-body p-3 pt-4 pb-4">
              <h2 className="fw-bold trackApplication-head">
                Track Application Status
              </h2>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <form onSubmit={handleTrack}>
                    <div className="d-flex align-items-center mt-3">
                      <input
                        name="trackApplication"
                        required
                        type="text"
                        class="form-control shadow-none trackApplicationInput text-secondary"
                        placeholder="Please Enter Application Number"
                        value={trackTravelerId}
                        onChange={(e) => setTrackTravelerId(e.target.value)}
                      />
                      <button
                        type="submit"
                        name="track"
                        id="trackApplicationBtn"
                        class="btn btn-success ms-4 ps-4 pe-4"
                      >
                        Track
                      </button>
                    </div>
                  </form>
                </div>
                {isTravelerTrack? (

                <div className="me-5 mt-3">
                  

                  <XLg size={28} className="Cross" onClick={handleCross}/>
                  
                </div>
                ) : ("")}
              </div>
            </div>
          </div>
          {isTravelerTrack ? (
            <>
              <TrackTraveler mainTraveler={trackTraveler}/>
            </>
          ) : (
            <>
              {travelerLoading ? (
                <Loader />
              ) : (
                <>
                  {travelers &&
                    travelers.map((mainTraveler) => (
                      <Traveler mainTraveler={mainTraveler} />
                    ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default TrackApllication;
