import React from "react";
import "../inc/css/VisaForm.css"
import {BoxArrowUpRight} from "react-bootstrap-icons";
import { useState } from "react";


function VisaFormStep4(){
    const[couponCodeInput,setcouponCodeInput] = useState("");
    const couponCode = (e)=>{
        if(e.target.value==="couponCode"){ 
            setcouponCodeInput(<div className="d-flex align-items-center"><input name="couponCode" required type="text" class="form-control shadow-none ms-5" placeholder="Coupon Code"/>
            <button type="submit" name="couponCodeApply" class="btn btn-success ms-4">Apply Now</button></div>);
        }
        else{
            setcouponCodeInput("");
        }
    }
    return (
        <div className="container">
            <div className="card mt-4 pb-5">
                <div className="card-head pt-4 mb-4 d-flex  align-items-center">
                    <div className="steps-no-form me-4 d-flex justify-content-center align-items-center">4</div>
                    Make Payment
                </div>
                <div className="couponCode px-4 d-flex align-items-center">
                    <input class="form-check-input mt-0 shadow-none me-2" type="checkbox" value="couponCode" aria-label="Checkbox for following text input" onChange={couponCode}/>
                    I have a coupon code
                    {couponCodeInput}
                    
                </div>
                <div className="px-4 mt-1">
                    <hr/>
                </div>
                <div className="px-4 mt-4 d-flex justify-content-end align-items-center">
                    <p className="total m-0">Total- price display</p>
                    <button type="submit" name="Step-4-Pay" class="btn btn-success ms-4">Pay Now <BoxArrowUpRight className="ms-2 text-white mb-1"  size={16} /></button>
                </div>
            </div>

        </div>
    );
}
export default VisaFormStep4;