import React,{useState} from "react";
import {BoxArrowInRight} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import { deleteTravelerAction } from "../../../actions/applyVisaAction";
import { useDispatch} from "react-redux";
import axios from "axios";


const OrderData = ({ mainTraveler, index }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTravelerAction(mainTraveler._id));
  }

  const getDetails = () =>{
    Navigate(`/OrderDetails/${mainTraveler._id}`)
  }

  const [visaName , setVisaName] = useState("")
  const getVisaCardName = async (id) => {
    const {data} = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/VisaCard/${id}`
    )
    setVisaName(data.visaCard.name)
  }
  if(!visaName){
    getVisaCardName(mainTraveler.visaType)
  }
  

  return (
    <>
   

      <tr className="align-middle">
        <td>{index}</td>
        <td>{mainTraveler.bookingId}</td>
        <td>{visaName}</td>
        <td>{mainTraveler.onwardDate}</td>
        <td>{mainTraveler.returnDate}</td>
        <td>{mainTraveler.numberOfPassengers}</td>
        <td>{mainTraveler.firstName + " " + mainTraveler.lastName}</td>
        <td>{mainTraveler.bookingDate}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary shadow-none me-2 btn-sm"
            onClick={getDetails}
          >
           <BoxArrowInRight size={24} className="me-1"/>
          </button>
          <button
            type="button"
            className="btn btn-danger shadow-none btn-sm me-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
 
    </>
  );
};

export default OrderData;
