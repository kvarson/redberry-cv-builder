import React from "react";
import "./educationFormOutput.css";
const EducationFormOutput = ({ educationInputs, index }) => {
  return (
    <div>
      <div className='experience-output-container-form-remastered'>
        <p className='experience-output-text-form-remastered'>
          {educationInputs[index]?.facility ? "განათლება" : ""}
        </p>
        <p className='position-output-text-input-form-remastered'>
          {educationInputs[index]?.facility
            ? `${educationInputs[index]?.facility},`
            : ""}{" "}
          {educationInputs[index]?.degree}
        </p>
      </div>

      <div className='experience-starting-ending-output-form-remastered'>
        {educationInputs[index]?.studyEnding.replaceAll("-", "/")}{" "}
      </div>

      <div className='description-output-form-remastered'>
        {educationInputs[index]?.studyDescription}
      </div>

      {educationInputs[index]?.facility && (
        <div className='border-line-for-experience'></div>
      )}
    </div>
  );
};

export default EducationFormOutput;
