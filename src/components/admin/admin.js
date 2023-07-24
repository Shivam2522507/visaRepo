import React, {useRef, useState, useEffect} from "react";
import "../inc/css/Login.css";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {clearErrors, loginAdmin} from "../../actions/adminAction"
import {useAlert} from "react-alert"
import Loader from "../inc/Loader/Loader";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const Navigate = useNavigate(); 
    const dispatch = useDispatch();
    const alert = useAlert();
    const {error,loading,isAuthenticated} = useSelector(state => state.admin)

    const loginTab = useRef(null);

    const[loginEmail , setLoginEmail] = useState("");
    const[loginPassword, setLoginPassword] = useState("");
 
    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAdmin(loginEmail, loginPassword))
    }

    useEffect(() =>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(isAuthenticated){
            Navigate("/Admin/Dashboard")
        }
    },[dispatch,error,alert,Navigate,isAuthenticated])
  return (
    <>
    {loading?<Loader/>:(
        <div className="container login-form-cont">
        <div className="card login-form-card p-4 shadow">
          <h2 className="text-center mt-2">Admin Login</h2>
  
          <div className="login-form mt-3">
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
