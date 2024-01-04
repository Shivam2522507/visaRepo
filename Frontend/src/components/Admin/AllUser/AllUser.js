import React, { useEffect } from "react";
import { clearErrors, getAllUser } from "../../../actions/allUserActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserData from "./user";
import Loader from "../../inc/Loader/Loader";
import { useAlert } from "react-alert";
import { DELETE_USER_RESET } from "../../../constants/allUserConstants";

function AllUser() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const alert = useAlert();
  const { loading, error, Users } = useSelector((state) => state.allUser);
  const { isAuthenticatedAdmin } = useSelector((state) => state.admin);
  const { isDeleted } = useSelector((state) => state.deleteUser);



  useEffect(() => {
    if(isDeleted){
      alert.success("User Deleted Successfully");
      dispatch({
        type: DELETE_USER_RESET,
      })
      dispatch(getAllUser());
    }
  })



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticatedAdmin === false) {
      Navigate("/adminLogin");
    }
    if (isAuthenticatedAdmin) {
      dispatch(getAllUser());
    }
  }, [dispatch, Navigate, error, alert, isAuthenticatedAdmin]);

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
              <h3 className="mb-4">All User</h3>
         
            <div className="card border-0 shadow mb-4">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover border text-center">
                    <thead>
                      <tr className="bg-dark text-light">
                        <th scope="col">Sr no</th>
                        <th scope="col">id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     {Users && Users.map((User,index) => <UserData User={User} index={index + 1}/>)}
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

export default AllUser;
