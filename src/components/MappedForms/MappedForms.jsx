import React from "react";
import "../experienceFormOutput/experienceFormOutput.css";
const MappedForms = ({
  position,
  employer,
  startingDate,
  endingDate,
  description,
  forms,
  index,
  inputs,
}) => {
  return (
    <div>
      <div className='experience-output-container-form-remastered'>
        <p className='experience-output-text-form-remastered'>
          {inputs[index]?.position ? "გამოცდილება" : ""}
        </p>
        <p className='position-output-text-input-form-remastered'>
          {inputs[index]?.position ? `${inputs[index]?.position},` : ""}{" "}
          {inputs[index]?.employer}
        </p>
      </div>

      <div className='experience-starting-ending-output-form-remastered'>
        {inputs[index]?.startingDate.replaceAll("-", "/")}{" "}
        {inputs[index]?.startingDate ? "-" : ""}{" "}
        {inputs[index]?.endingDate.replaceAll("-", "/")}
      </div>

      <div className='description-output-form-remastered'>
        {inputs[index]?.description}
      </div>

      {inputs[index]?.position && (
        <div className='border-line-for-experience'></div>
      )}
    </div>
  );
};

export default MappedForms;
