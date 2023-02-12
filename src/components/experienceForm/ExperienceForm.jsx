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
  index,
  inputs,
  setInputs,
  validationDescription,
  validationDueDate,
  validationEmployer,
  validationPosition,
  validationStartDate,
  setValidationDescription,
  setValidationDueDate,
  setValidationEmployer,
  setValidationPosition,
  setValidationStartDate,
}) => {
  const handleInputChange = (event, index) => {
    if (!inputs) return;
    const name = event.target.name;
    const values = [...inputs];
    if (!values[index]) values[index] = {};
    values[index][name] = event.target.value;
    localStorage.setItem("experienceInputs", JSON.stringify(values));
    setInputs(values);

    // handleValidation();
    handleValidation(name, index);
  };
  const valuesForInputs = localStorage.getItem("educationInputs");
  const valuesForInputsParsed = JSON.parse(valuesForInputs);
  // console.log(inputs[index]?.position.length);

  const handleValidation = (name, index) => {
    switch (name) {
      case "position":
        setValidationPosition(inputs[index]?.position.length >= 2 ? 1 : -1);
        break;
      case "employer":
        setValidationEmployer(inputs[index]?.employer.length >= 2 ? 1 : -1);
        break;
      case "start_date":
        setValidationStartDate(inputs[index]?.start_date ? 1 : -1);
        break;
      case "due_date":
        setValidationDueDate(inputs[index]?.due_date ? 1 : -1);
        break;
      case "description":
        setValidationDescription(
          inputs[index]?.description.length >= 1 ? 1 : -1
        );
        break;
      default:
        break;
    }
  };

  // console.log(validationPosition, "validationPosition");
  // console.log(validationEmployer, "validationEmployer");
  // console.log(validationDescription, "validationDescription");
  // console.log(validationStartDate, "validationStartDate");
  // console.log(validationDueDate, "validationDueDate");

  return (
    <div>
      <div>
        <div className='position-container-remastered'>
          <p className='position-text-remastered'>თანამდებობა</p>
          <input
            onChange={(e) => handleInputChange(e, index)}
            value={
              inputs[index]?.position === ""
                ? valuesForInputsParsed?.position
                : inputs[index]?.position
            }
            name='position'
            className={
              (validationPosition === 1 &&
                "position-input-remastered border-green") ||
              (validationPosition === 0 && "position-input-remastered") ||
              (validationPosition === -1 &&
                "position-input-remastered border-red")
            }
            placeholder='დეველოპერი, დიზაინერი, ა.შ'
            type='text'
          />
          {validationPosition === 1 && (
            <CheckCircleIcon
              className={"position-check-circle-remastered show-success-icon"}
            />
          )}

          {validationPosition === -1 && (
            <ReportProblemIcon className='position-error-icon-remastered show-error-icon' />
          )}

          <p className='position-min-req-remastered'>მინიმუმ 2 სიმბოლოსგან</p>
        </div>

        <div className='employer-container-remastered'>
          <p className='employer-text-remastered'>დამსაქმებელი</p>
          <input
            name='employer'
            value={
              inputs[index]?.employer === ""
                ? valuesForInputsParsed?.employer
                : inputs[index]?.employer
            }
            onChange={(e) => handleInputChange(e, index)}
            placeholder='დამსაქმებელი'
            className={
              (validationEmployer === 1 &&
                "employer-input-remastered border-green") ||
              (validationEmployer === -1 &&
                "employer-input-remastered border-red") ||
              (validationEmployer === 0 && "employer-input-remastered")
            }
            type='text'
          />
          {validationEmployer === 1 && (
            <CheckCircleIcon
              className={"position-check-circle-remastered show-success-icon"}
            />
          )}

          {validationEmployer === -1 && (
            <ReportProblemIcon className='position-error-icon-remastered show-error-icon' />
          )}
          <p className='employer-min-req-remastered'>მინიმუმ 2 სიმბოლოსგან</p>
        </div>
        <div className='starting-ending-date-container-remastered'>
          <div className='starting-date-container-remastered'>
            <p className='starting-date-text-remastered'>დაწყების რიცხვი</p>
            <input
              name='start_date'
              value={
                inputs[index]?.start_date === ""
                  ? valuesForInputsParsed?.start_date
                  : inputs[index]?.start_date
              }
              onChange={(e) => handleInputChange(e, index)}
              className={
                (validationStartDate === 1 &&
                  "starting-date-input-remastered border-green") ||
                (validationStartDate === -1 &&
                  "starting-date-input-remastered border-red") ||
                (validationStartDate === 0 && "starting-date-input-remastered")
              }
              type='date'
              placeholder='MM / DD / YYYY'
            />
          </div>
          <div className='ending-date-container-remastered'>
            <p className='ending-date-text-remastered'>დამთავრების რიცხვი</p>
            <input
              name='due_date'
              onChange={(e) => handleInputChange(e, index)}
              value={
                inputs[index]?.due_date === ""
                  ? valuesForInputsParsed?.due_date
                  : inputs[index]?.due_date
              }
              // className='ending-date-input-remastered'
              className={
                (validationDueDate === 1 &&
                  "ending-date-input-remastered border-green") ||
                (validationDueDate === -1 &&
                  "ending-date-input-remastered border-red") ||
                (validationDueDate === 0 && "ending-date-input-remastered")
              }
              placeholder='MM / DD / YYYY'
              type='date'
            />
          </div>
        </div>
        <div className='description-container-remastered'>
          <p className='description-text-remastered'>აღწერა</p>
          <textarea
            name='description'
            onChange={(e) => handleInputChange(e, index)}
            value={
              inputs[index]?.description === ""
                ? valuesForInputsParsed?.description
                : inputs[index]?.description
            }
            // className='description-input-remastered'
            className={
              (validationDescription === 1 &&
                "description-input-remastered border-green") ||
              (validationDescription === -1 &&
                "description-input-remastered border-red") ||
              (validationDescription === 0 && "description-input-remastered")
            }
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
