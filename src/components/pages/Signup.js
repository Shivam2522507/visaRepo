import React from "react";
import "../inc/css/Login.css";
import {Link} from 'react-router-dom';
import GoogleImg from "../images/google-Logo.png";
import FacebookImg from "../images/facebookLogo.png";

function Signup(){
    return (
        <div className="container login-form-cont">
            <div className="card login-form-card p-4 shadow">
                <h2 className="text-center mt-2">Create an account</h2>
                <div className="social-login mt-3 px-5" >
                <a href="/" class="nav-link me-4"><img src={GoogleImg} alt="googleIcon" class="me-2 google-icon" />Google</a>
                <a href="/" class="nav-link"><img src={FacebookImg} alt="facebookIcon" class="me-2 facebook-icon" />Facebook</a>
                </div>
                <div className="division mt-3">
                    <div className="line"><hr/></div>
                    <div className="or m-0 p-0">or</div>
                </div>
                <div className="login-form">
                    <form method="POST">
                        <div class="p-4 py-3 pb-0">
                            <div class="mb-3">
                                <label class="form-label">Email<span className="text-danger">*</span></label>
                                <input name="email" required type="email" class="form-control shadow-none bg-light" placeholder="Email"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password<span className="text-danger">*</span></label>
                                <input name="pass" required type="password" class="form-control shadow-none bg-light" placeholder="Password"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Conform Password<span className="text-danger">*</span></label>
                                <input name="conformPass" required type="password" class="form-control shadow-none bg-light" placeholder="Password"/>
                            </div>
                            <div class="mb-4 d-flex align-itmes-center">
                
                            <input class="form-check-input mt-0 shadow-none me-2 mt-1" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                            I agree with <Link to="/" class="nav-link text-danger ms-2"> Privacy Policy</Link> and <Link to="/" class="nav-link text-danger ms-2"> Terms of Conditions</Link> 
                            </div>

                            <div class="d-flex align-items-center justify-content-center mb-2">
                                <button type="submit" name="Signup" class="btn btn-success w-100">Create account</button>
                            </div>
                        </div>
                    </form>
                    <p className=" d-flex justify-content-center">Already have an account? <Link to="/Login" class="nav-link text-danger ms-2"> Sign in here</Link></p>
                </div>

            </div>
        </div>
    );
}
export default Signup;