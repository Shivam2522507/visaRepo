import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, loginAdmin } from "../../actions/adminAction";
import Loader from "../inc/Loader/Loader";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, isAuthenticatedAdmin } = useSelector(
    (state) => state.admin
  );

  const [AdminLoginEmail, setAdminLoginEmail] = useState("");
  const [AdminLoginPassword, setAdminLoginPassword] = useState("");

  const adminLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(AdminLoginEmail, AdminLoginPassword));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticatedAdmin) {
      Navigate("/AdminDashbord");
    }
  }, [dispatch, error, alert, Navigate, isAuthenticatedAdmin]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container login-form-cont">
          <div className="card login-form-card p-4 shadow">
            <h2 className="text-center mt-2">Login</h2>
            <div className="login-form">
              <form onSubmit={adminLoginSubmit}>
                <div class="p-4 py-3 pb-0">
                  <div class="mb-3">
                    <label class="form-label">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      class="form-control shadow-none bg-light"
                      placeholder="Email"
                      value={AdminLoginEmail}
                      onChange={(e) => setAdminLoginEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      class="form-control shadow-none bg-light"
                      placeholder="Password"
                      value={AdminLoginPassword}
                      onChange={(e) => setAdminLoginPassword(e.target.value)}
                    />
                  </div>
                  <div class="d-flex align-items-center justify-content-center mb-4">
                    <Link to="/password/forgot" class="nav-link text-secondary">
                      {" "}
                      Forget Password ?
                    </Link>
                  </div>
                  <div class="d-flex align-items-center justify-content-center mb-2">
                    <button
                      type="submit"
                      value="Login"
                      class="btn btn-success w-100"
                    >
                      Login
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
}

export default AdminLogin;
