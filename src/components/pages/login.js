import React, { useRef, useState, useEffect } from "react";
import "../inc/css/Login.css";
import { Link } from "react-router-dom";
import GoogleImg from "../images/google-Logo.png";
import FacebookImg from "../images/facebookLogo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  forgetUserPassword,
  login,
  loginGoogle,
} from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../inc/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { Modal, Button } from "react-bootstrap";
import { FORGET_PASSWORD_UPDATE_RESET } from "../../constants/userConstants";
// import ReactFacebookLogin from "react-facebook-login";
// import axios from "axios";
import { LoginSocialFacebook } from "reactjs-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const { forgetLoading, isMailSend } = useSelector(
    (state) => state.forgetUserPassword
  );

  const loginTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const Googlelogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const access_token = codeResponse.access_token;
      // console.log(access_token)
      dispatch(loginGoogle(access_token));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleGoogleLogin = () => {
    Googlelogin();
  };

  const [forgetEmail, setForgetEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const forgetPasswordSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", forgetEmail);
    dispatch(forgetUserPassword(formData));
    handleClose();
  };

  const handleFacebookResponse = (response) => {
    console.log(response);
    // Handle the response as needed (e.g., update user state, make API calls)
  };

  const handleFacebookError = (error) => {
    console.log(error);
    // Handle the error (e.g., show an error message to the user)
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      Navigate("/ApplyVisa/:id");
    }
    if (isMailSend) {
      alert.success("We send Forget Password Link to Your Register Email Id");
      dispatch({
        type: FORGET_PASSWORD_UPDATE_RESET,
      });
    }
  }, [dispatch, error, alert, Navigate, isAuthenticated, isMailSend]);
  return (
    <>
      {forgetLoading ? (
        <Loader />
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div className="container login-form-cont">
              <div className="card login-form-card p-4 shadow">
                <h2 className="text-center mt-2">Login</h2>
                <div className="social-login mt-3 px-5">
                  <button onClick={handleGoogleLogin} class="nav-link me-4">
                    <img
                      src={GoogleImg}
                      alt="googleIcon"
                      class="me-2 google-icon"
                    />
                    Google
                  </button>

                  {/* <ReactFacebookLogin
        appId="628909005894149"
        autoLoad={false}
        fields="email,public_profile"
        callback={responseFacebook}
      /> */}
                  <LoginSocialFacebook
                    appId={`628909005894149`}
                    onResolve={handleFacebookResponse}
                    onReject={handleFacebookError}
                  >
                    <button class="nav-link">
                      <img
                        src={FacebookImg}
                        alt="facebookIcon"
                        class="me-2 facebook-icon"
                      />
                      Facebook
                    </button>
                  </LoginSocialFacebook>
                </div>
                <div className="division mt-3">
                  <div className="line">
                    <hr />
                  </div>
                  <div className="or m-0 p-0">or</div>
                </div>
                <div className="login-form">
                  <form ref={loginTab} onSubmit={loginSubmit}>
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
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
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
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-4">
                        <Link
                          onClick={handleShow}
                          class="nav-link text-secondary"
                        >
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
                  <p className=" d-flex justify-content-center">
                    Don't have an account?{" "}
                    <Link to="/Signup" class="nav-link text-danger ms-2">
                      {" "}
                      Sign up here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forget Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={forgetPasswordSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="mb-2">
                Enter Your Register Email
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                id="email"
                name="forgetEmail"
                placeholder="Email"
                value={forgetEmail}
                onChange={(e) => setForgetEmail(e.target.value)}
              />
            </div>
            <hr />
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleClose}
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
export default Login;
