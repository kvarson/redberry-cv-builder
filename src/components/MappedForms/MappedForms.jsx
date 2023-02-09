import React from "react";
import "../experienceFormOutput/experienceFormOutput.css";
const MappedForms = ({
  position,
  employer,
  startingDate,
  due_date,
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
        {inputs[index]?.start_date.replaceAll("-", "/")}{" "}
        {inputs[index]?.start_date ? "-" : ""}{" "}
        {inputs[index]?.due_date.replaceAll("-", "/")}
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
