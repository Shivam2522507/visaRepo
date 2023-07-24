import React, {useRef, useState, useEffect} from "react";
import "../inc/css/Login.css";
import { Link } from "react-router-dom";
import GoogleImg from "../images/google-Logo.png";
import FacebookImg from "../images/facebookLogo.png";
import {useAlert} from "react-alert"
import {useDispatch,useSelector} from "react-redux";
import {clearErrors, register} from "../../actions/userAction"
import Loader from "../inc/Loader/Loader";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const registerTab = useRef(null);
    const alert = useAlert();
    const Navigate = useNavigate(); 
    const dispatch = useDispatch();

  const month = new Date().toLocaleString("en-US", { month: "long" });
  const day = new Date().toLocaleString("en-US", { day : '2-digit'});
  const year = new Date().getFullYear();
  const currentDate = day+"-"+month+"-"+year;

    const {error,loading,isAuthenticated} = useSelector(state => state.user)


    const [checked,setChecked] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [conformPassword,setConformPassword] = useState("");

  
    const registerSubmit = (e) =>{
        e.preventDefault();
        if(!(password===conformPassword)){
          alert.error("Password and ConformPassword did not match");
        }
        else{
          const myForm = new FormData();
          myForm.set("email",email);
          myForm.set("password",password)
          myForm.set('date',currentDate);
          dispatch(register(myForm));
        
        }
    }

    useEffect(() =>{
      if(error){
          alert.error(error);
          dispatch(clearErrors());
      }
      if(isAuthenticated){
          Navigate("/")
      }
  },[dispatch,error,alert,Navigate,isAuthenticated])



  return (
    <>
    {loading?<Loader/>:(
    <div className="container signup login-form-cont">
      <div className="card login-form-card p-4 pt-3 pb-3 shadow">
        <h2 className="text-center mt-1">Create an account</h2>
        <div className="social-login mt-2 px-5">
          <a href="/" class="nav-link me-4">
            <img src={GoogleImg} alt="googleIcon" class="me-2 google-icon" />
            Google
          </a>
          <a href="/" class="nav-link">
            <img
              src={FacebookImg}
              alt="facebookIcon"
              class="me-2 facebook-icon"
            />
            Facebook
          </a>
        </div>
        <div className="division mt-2">
          <div className="line">
            <hr />
          </div>
          <div className="or m-0 p-0">or</div>
        </div>
        <div className="login-form">
          <form ref={registerTab} onSubmit={registerSubmit}>
            <div class="p-4 py-2 pb-0">
              <div class="mb-2">
                <label class="form-label">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  name="email"
                  value={email}
                  required
                  type="email"
                  class="form-control shadow-none bg-light"
                  placeholder="Email"
                  onChange={event=>setEmail(event.target.value)}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">
                  Password<span className="text-danger">*</span>
                </label>
                <input
                  name="pass"
                  required
                  type="password"
                  class="form-control shadow-none bg-light"
                  placeholder="Password"
                  value={password}
                  onChange={event=>setPassword(event.target.value)}

                />
              </div>
              <div class="mb-2">
                <label class="form-label">
                  Conform Password<span className="text-danger">*</span>
                </label>
                <input
                  name="conformPassword"
                  required
                  type="password"
                  class="form-control shadow-none bg-light"
                  placeholder="Conform Password"
                  value={conformPassword}
                  onChange={event=>setConformPassword(event.target.value)}
                />
              </div>
              <div class="mb-3 d-flex align-itmes-center">
                <input
                  class="form-check-input mt-0 shadow-none me-2 mt-1"
                  type="checkbox"
                  checked = {checked}
                  onChange={event=>setChecked(event.target.checked)}
                  aria-label="Checkbox for following text input"
                  required

                />
                I agree with{" "}
                <Link to="/" class="nav-link text-danger ms-2">
                  {" "}
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/" class="nav-link text-danger ms-2">
                  {" "}
                  Terms of Conditions
                </Link>
              </div>

              <div class="d-flex align-items-center justify-content-center">
                <button
                  type="submit"
                  name="Signup"
                  class="btn btn-success w-100"
                  disabled = {checked ? false : true}
                >
                  Create account
                </button>
              </div>
            </div>
          </form>
          <p className=" d-flex justify-content-center">
            Already have an account?{" "}
            <Link to="/Login" class="nav-link text-danger ms-2">
              {" "}
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
    )}
    </>
  );
}
export default Signup;
