import React, { useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import "./experienceForm.css";
import ExperienceFormOutput from "../experienceFormOutput/ExperienceFormOutput";
const ExperienceForm = ({
  position,
  setPosition,
  employer,
  setEmployer,
  setStartingDate,
  startingDate,
  setEndingDate,
  endingDate,
  description,
  setDescription,
}) => {
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
      <div>
        <div className='position-container-remastered'>
          <p className='position-text-remastered'>თანამდებობა</p>
          <input
            onChange={(e) => handlePositionChange(e)}
            value={position}
            className='position-input-remastered'
            placeholder='დეველოპერი, დიზაინერი, ა.შ'
            type='text'
          />
          <CheckCircleIcon className='position-check-circle-remastered' />
          <ReportProblemIcon className='position-error-icon-remastered' />
          <p className='position-min-req-remastered'>მინიმუმ 2 სიმბოლოსგან</p>
        </div>

        <div className='employer-container-remastered'>
          <p className='employer-text-remastered'>დამსაქმებელი</p>
          <input
            value={employer}
            onChange={(e) => handleEmployerChange(e)}
            placeholder='დამსაქმებელი'
            className='employer-input-remastered'
            type='text'
          />
          <CheckCircleIcon className='position-check-circle-remastered' />
          <ReportProblemIcon className='position-error-icon-remastered' />
          <p className='employer-min-req-remastered'>მინიმუმ 2 სიმბოლოსგან</p>
        </div>
        <div className='starting-ending-date-container-remastered'>
          <div className='starting-date-container-remastered'>
            <p className='starting-date-text-remastered'>დაწყების რიცხვი</p>
            <input
              onChange={(e) => handleStartingDateChange(e)}
              className='starting-date-input-remastered'
              type='date'
              placeholder='MM / DD / YYYY'
            />
          </div>
          <div className='ending-date-container-remastered'>
            <p className='ending-date-text-remastered'>დამთავრების რიცხვი</p>
            <input
              onChange={(e) => handleEndingDateChange(e)}
              className='ending-date-input-remastered'
              placeholder='MM / DD / YYYY'
              type='date'
            />
          </div>
        </div>
        <div className='description-container-remastered'>
          <p className='description-text-remastered'>აღწერა</p>
          <textarea
            onChange={(e) => handleDescriptionChange(e)}
            className='description-input-remastered'
            placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
            type='text'
          />
        </div>
      </div>

      <div className='bottom-border-form-remastered'></div>
    </div>
  );
};

export default ExperienceForm;
