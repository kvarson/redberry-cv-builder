import React from "react";
import "./starting.css";
import LOGO from "../../assets/LOGO-02 3.png";
import SecondLOGO from "../../assets/LOGO-40 1.png";
import { useNavigate } from "react-router";

const Starting = () => {
  const navigate = useNavigate();

  const handleAddResume = (e) => {
    navigate("/personal");
  };
  return (
    <div className='container'>
      <div className='logo-container'>
        <img className='logo' src={LOGO} alt='' />
        <div className='bottom-line'></div>
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={(e) => handleAddResume(e)}>
          რეზიუმეს დამატება
        </button>
      </div>

      <img className='redberry-second-logo' src={SecondLOGO} alt='' />
    </div>
  );
};

export default Starting;
