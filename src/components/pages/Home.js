import React from "react";
import herosecimg from "../images/hero-sec-img.png";
import whatsappIcon from "../images/whatsapp.png";
import "../inc/css/Home.css";
import { Link } from "react-router-dom";
import { BoxArrowInRight, PersonRolodex} from "react-bootstrap-icons";
import { useState } from "react";
import AllVisaCard from "../inc/AllVisaCard";
import SingleEntryVisaCard from "../inc/SingleEntryVisaCard";
import MultipleVisaCard from "../inc/MultipleEntryVisaCard";
import Requirement from "../inc/Requirement";



function Home() {
    const[visaType,setVisaType] = useState(<AllVisaCard/>);
    const onOptionChange = (e)=>{
        if(e.target.value==="all"){
            setVisaType(<AllVisaCard/>)
            
        }else if(e.target.value==="SingleEntry"){
            <SingleEntryVisaCard/>
            setVisaType(<SingleEntryVisaCard/>)
        }
        else if(e.target.value==="MultipleEntry"){
            setVisaType(<MultipleVisaCard/>)
        }
        
    }
  return (
    <div className="bg-light home-body">
      <div className="container-fluid herosec p-0">
        <img src={herosecimg} alt="Hero-img" class="w-100" />

        <h1 className="text-light hero-sec-header">
          Apply for Dubai Visa in Just a Few <br /> Clicks
        </h1>
        <Link to="/ApplyVisa/:id" class="nav-link ">
          Apply Now <BoxArrowInRight className="ms-1 BoxArrowInRight"  />
        </Link>
        <div className="bottom-text">
          <h1 className="text-center">Select your VISA type</h1>
          <p className="text-center">No hidden fees! All tax included.</p>
        </div>
      </div>
      <div className="container secondsec p-0">
        <div className="second-sec-selector mt-5">
            <div class="form-check d-flex justify-content-center align-items-center">
                <input class="with-gap me-2" name="visaType" type="radio" value="all" id="all" onChange={onOptionChange} />
                <label for="all">All</label>
                <input class="with-gap ms-4 me-2" type="radio" name="visaType" value="SingleEntry" id="SingleEntry" onChange={onOptionChange} />
                <label for="SingleEntry">Single Entry</label>
                <input class="with-gap ms-4 me-2" type="radio" name="visaType" value="MultipleEntry" id="MultipleEntry" onChange={onOptionChange} />
                <label for="MultipleEntry">Multiple Entry</label>
            </div>
            <div className="container">
                {visaType}
            </div>
        </div>
      </div>
      <div className="container AssistanceContact mt-lg-5 mt-md-3 mb-lg-5 mb-md-3">
        <h1 className="text-center mt-md-3 mb-4">Need Assistance Contact Our Experts</h1>
        <div className="AssistanceContactLink d-flex text-center">

          <a href="https://wa.me/8826450975" class="nav-link me-4 d-flex justify-content-center align-items-center"><img src={whatsappIcon} alt="whatsappIcon" class="me-2 whatsapp-img" />WhatsApp</a>
          <a href="/" class="nav-link me-2 text-light AssistanceContactBtn d-flex justify-content-center align-items-center" role='button'  data-bs-toggle="modal" data-bs-target="#contact"><PersonRolodex className="me-2"  />Contact Us</a>
            
        </div>
      </div>
      <Requirement/>
      <div className="whatapp-icon fixed-bottom"> <Link to="https://wa.me/8826450975" class="nav-link ">
          <img src={whatsappIcon} alt="whatsappIcon" />
        </Link>
        
        </div> 
  
    </div>
  );
}
export default Home;
