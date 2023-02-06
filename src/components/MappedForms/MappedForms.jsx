import React from "react";
import "../experienceFormOutput/experienceFormOutput.css";
const MappedForms = ({
  position,
  employer,
  startingDate,
  endingDate,
  description,
  forms,
}) => {
  return (
    <div>
      <div className='experience-output-container-form-remastered'>
        <p className='experience-output-text-form-remastered'>
          {position ? "გამოცდილება" : ""}
        </p>
        <p className='position-output-text-input-form-remastered'>
          {position ? `${position},` : ""} {employer}
        </p>
      </div>

      <div className='experience-starting-ending-output-form-remastered'>
        {startingDate.replaceAll("-", "/")} {startingDate ? "-" : ""}{" "}
        {endingDate.replaceAll("-", "/")}
      </div>

      <div className='description-output-form-remastered'>{description}</div>

      {position && <div className='border-line-for-experience'></div>}
    </div>
  );
};

export default MappedForms;
