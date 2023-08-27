import React, { useState, useEffect } from "react";
import "../../inc/css/Login.css";
import { useParams, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from "../../inc/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { resetUserPassword, clearErrors } from "../../../actions/userAction";
import { RESET_PASSWORD_UPDATE_RESET } from "../../../constants/userConstants";

const ResetPassword = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();
  const resetToken = params.token;
  const { error, loading, isPasswordReset } = useSelector(
    (state) => state.resetUserPassword
  );

  const [password, setPassword] = useState("");
  const [ConformPassword, setConformPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetUserPassword(resetToken, password, ConformPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isPasswordReset) {
      Navigate("/login")
      alert.success("Your Password is Change Successfully");
      dispatch({
        type: RESET_PASSWORD_UPDATE_RESET,
      });
    }
  }, [dispatch, error, alert, Navigate, isPasswordReset]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container login-form-cont">
          <div className="card login-form-card p-4 shadow">
            <h2 className="text-center mt-2">Change Your Password</h2>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div class="p-4 py-3 pb-0">
                  <div class="mb-3">
                    <label class="form-label">
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      class="form-control shadow-none bg-light"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <label class="form-label">
                      Conform Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      class="form-control shadow-none bg-light"
                      placeholder="Conform Password"
                      onChange={(e) => setConformPassword(e.target.value)}
                    />
                  </div>
                  <div class="d-flex align-items-center justify-content-center mb-2">
                    <button type="submit" class="btn btn-success w-100">
                      Change Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ResetPassword;
