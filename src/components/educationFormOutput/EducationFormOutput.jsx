import React from "react";
import "./educationFormOutput.css";
const EducationFormOutput = ({ educationInputs, index }) => {
  return (
    <div>
      <div className='experience-output-container-form-remastered'>
        <p className='experience-output-text-form-remastered'>
          {educationInputs[index]?.institute ? "განათლება" : ""}
        </p>
        <p className='position-output-text-input-form-remastered'>
          {educationInputs[index]?.institute
            ? `${educationInputs[index]?.institute},`
            : ""}{" "}
          {educationInputs[index]?.degree_id}
        </p>
      </div>

      <div className='experience-starting-ending-output-form-remastered'>
        {educationInputs[index]?.due_date.replaceAll("-", "/")}{" "}
      </div>

      <div className='description-output-form-remastered'>
        {educationInputs[index]?.description}
      </div>

      {educationInputs[index]?.institute && (
        <div className='border-line-for-experience'></div>
      )}
    </div>
  );
};

export default EducationFormOutput;
