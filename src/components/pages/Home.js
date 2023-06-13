import React from "react";
import herosecimg from "../images/hero-sec-img.png";
import whatsappIcon from "../images/whatsappIcon.png";
import sepratorIMG from "../images/seprator.svg";
import "../inc/css/Home.css";
import { Link } from "react-router-dom";
import { BoxArrowInRight, PersonRolodex} from "react-bootstrap-icons";
import { useState } from "react";
import AllVisaCard from "../inc/AllVisaCard";
import SingleEntryVisaCard from "../inc/SingleEntryVisaCard";
import MultipleVisaCard from "../inc/MultipleEntryVisaCard";
import Requirement from "../inc/Requirement";
import Footer from "../inc/Footer";




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
    <div className="bg-light">
      <div className="container-fluid herosec p-0">
        <img src={herosecimg} alt="Hero-img" class="w-100" />

        <h1 className="text-light hero-sec-header">
          Apply for Dubai Visa in Just a Few <br /> Clicks
        </h1>
        <Link to="/ApplyVisa" class="nav-link ">
          Apply Now <BoxArrowInRight className="ms-1" size={36} />
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
                <input class="with-gap ms-4 me-2" type="radio" name="visaType" value="SingleEntry" id="SingleEntry"onChange={onOptionChange} />
                <label for="SingleEntry">Single Entry</label>
                <input class="with-gap ms-4 me-2" type="radio" name="visaType" value="MultipleEntry" id="MultipleEntry" onChange={onOptionChange} />
                <label for="MultipleEntry">Multiple Entry</label>
            </div>
            <div className="container">
                {visaType}
            </div>
        </div>
      </div>
      <div className="container AssistanceContact mt-5 mb-5">
        <h1 className="text-center mb-4">Need Assistance Contact Our Experts</h1>
        <div className="AssistanceContactLink text-center">

        <a href="https://wa.me/8826450975" class="nav-link me-4"><img src={whatsappIcon} alt="whatsappIcon" class="me-1" />WhatsApp</a>
        <a href="/" class="nav-link me-2 text-light" role='button'  data-bs-toggle="modal" data-bs-target="#contact"><PersonRolodex className="me-2" size={33} />Contact Us</a>
          
        </div>
      </div>
      <Requirement/>

      <img src={sepratorIMG} alt="whatsappIcon" class="footer-seprator-img" />
      <div><Footer/></div>
  
    </div>
  );
}
export default Home;
