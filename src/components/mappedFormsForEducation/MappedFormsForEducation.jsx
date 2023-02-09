import React from "react";
import "../experienceFormOutput/experienceFormOutput.css";
const MappedFormsForEducation = ({ index, experienceData }) => {
  console.log(experienceData);
  return (
    <div>
      <div className='experience-output-container-form-remastered'>
        <p className='experience-output-text-form-remastered'>
          {experienceData[index]?.position ? "გამოცდილება" : ""}
        </p>
        <p className='position-output-text-input-form-remastered'>
          {experienceData[index]?.position
            ? `${experienceData[index]?.position},`
            : ""}{" "}
          {experienceData[index]?.employer}
        </p>
      </div>

      <div className='experience-starting-ending-output-form-remastered'>
        {experienceData[index]?.start_date.replaceAll("-", "/")}{" "}
        {experienceData[index]?.start_date ? "-" : ""}{" "}
        {experienceData[index]?.due_date.replaceAll("-", "/")}
      </div>

      <div className='description-output-form-remastered'>
        {experienceData[index]?.description}
      </div>

      {experienceData[index]?.position && (
        <div className='border-line-for-experience'></div>
      )}
    </div>
  );
};

export default MappedFormsForEducation;
