import React, { useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const ExperienceForm = ({}) => {
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [description, setDescription] = useState("");
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  const handleStartingDateChange = (e) => {
    setStartingDate(e.target.value);
  };

  const handleEndingDateChange = (e) => {
    setEndingDate(e.target.value);
  };
  const handleEmployerChange = (e) => {
    setEmployer(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div>
      <>
        <div className='position-container'>
          <p className='position-text-two'>თანამდებობა</p>
          <input
            onChange={(e) => handlePositionChange(e)}
            value={position}
            className='position-input'
            placeholder='დეველოპერი, დიზაინერი, ა.შ'
            type='text'
          />
          <CheckCircleIcon className='position-check-circle' />
          <ReportProblemIcon className='position-error-icon' />
          <p className='position-min-req'>მინიმუმ 2 სიმბოლოსგან</p>
        </div>

        <div className='employer-container'>
          <p className='employer-text'>დამსაქმებელი</p>
          <input
            value={employer}
            onChange={(e) => handleEmployerChange(e)}
            placeholder='დამსაქმებელი'
            className='employer-input'
            type='text'
          />
          <CheckCircleIcon className='position-check-circle' />
          <ReportProblemIcon className='position-error-icon' />
          <p className='employer-min-req'>მინიმუმ 2 სიმბოლოსგან</p>
        </div>

        <div className='starting-date-container'>
          <p className='starting-date-text'>დაწყების რიცხვი</p>
          <input
            onChange={(e) => handleStartingDateChange(e)}
            className='starting-date-input'
            type='date'
            placeholder='MM / DD / YYYY'
          />
        </div>
        <div className='ending-date-container'>
          <p className='ending-date-text'>დამთავრების რიცხვი</p>
          <input
            onChange={(e) => handleEndingDateChange(e)}
            className='ending-date-input'
            placeholder='MM / DD / YYYY'
            type='date'
          />
        </div>

        <div className='description-container'>
          <p className='description-text'>აღწერა</p>
          <textarea
            onChange={(e) => handleDescriptionChange(e)}
            className='description-input'
            placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
            type='text'
          />
        </div>
        <div className='bottom-border'></div>
      </>
    </div>
  );
};

export default ExperienceForm;
