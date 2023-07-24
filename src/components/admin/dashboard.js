import React, { useEffect} from "react";
import "../inc/css/Login.css";
// import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {clearErrors} from "../../actions/adminAction"
import {useAlert} from "react-alert"
import Loader from "../inc/Loader/Loader";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const Navigate = useNavigate(); 
    const dispatch = useDispatch();
    const alert = useAlert();
    const {error,loading,isAuthenticated} = useSelector(state => state.admin)


    useEffect(() =>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(!isAuthenticated){
            Navigate("/login/Admin")
        }
    },[dispatch,error,alert,Navigate,isAuthenticated])

  return (
    <>
    {loading?<Loader/>:(
    <></>
    )}
    </>
  );
}
export default Dashboard;
