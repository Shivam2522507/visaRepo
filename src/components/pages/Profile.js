import React, { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Loader from "../inc/Loader/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { clearErrors, loadUser, updateUser } from "../../actions/userAction";
import {useAlert} from "react-alert"
import { USER_UPDATE_RESET } from "../../constants/userConstants";

const Profile = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const { error, isUpdated} = useSelector((state) => state.updateUser);

  const [updateEmail,setUpdateEmail] = useState("");
 

  const showEditEmailModal = () => {
    setUpdateEmail(user.email);

  };


  

  const updateUserEmail = (e) =>{
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("email",updateEmail);

    dispatch(updateUser(myForm));
  
  }



  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch(clearErrors());
    }
    if (isAuthenticated === false) {
      Navigate("/login");
    }
    if (isUpdated) {
      alert.success("Email Updated Successfully");
      dispatch(loadUser());
      window.location.reload();
      dispatch({
        type : USER_UPDATE_RESET
      })
    }
  }, [Navigate,alert,isUpdated, dispatch,error,isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
          ) : (
        <div className="Container ms-auto p-4 overflow-hidden text-center me-1 bg-light">
          <div className="mb-5">
            <h4>Email</h4>
            <p className="m-0 fw-bold">{user.email}</p>
            <Link data-bs-toggle='modal' data-bs-target='#edit-email' onClick={showEditEmailModal}>Change Email </Link>
          </div>
          <div className="mb-5">
            <h4>Joined On</h4>
            <p>{user.date}</p>
          </div>
          <div className="d-flex flex-column">
            <Link to="/Application">My Application </Link>
            <Link to="/password/update">Change Password </Link>
          </div>
        </div>
      )}
      <div
        className="modal fade"
        id="edit-email"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form onSubmit={updateUserEmail}>
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Email</h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control shadow-none"
                      value={updateEmail}
                      onChange={(e) => setUpdateEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn text-secondary shadow-none"
                  data-bs-dismiss="modal"
                >
                  CANCEL
                </button>
                <button type="submit" className="btn text-success shadow-none">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
