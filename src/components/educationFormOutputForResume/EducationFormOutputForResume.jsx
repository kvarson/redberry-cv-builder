import React from "react";
// import "./educationFormOutput.css";
const EducationFormOutput = ({ educationData, index }) => {
  return (
    <div>
      <div className='experience-output-container-form-remastered'>
        <p className='experience-output-text-form-remastered'>
          {educationData[index]?.facility ? "განათლება" : ""}
        </p>
        <p className='position-output-text-input-form-remastered'>
          {educationData[index]?.facility
            ? `${educationData[index]?.facility},`
            : ""}{" "}
          {educationData[index]?.degree}
        </p>
      </div>

      <div className='experience-starting-ending-output-form-remastered'>
        {educationData[index]?.studyEnding.replaceAll("-", "/")}{" "}
      </div>

      <div className='description-output-form-remastered'>
        {educationData[index]?.studyDescription}
      </div>

      {educationData[index]?.facility && (
        <div className='border-line-for-experience'></div>
      )}
    </div>
  );
};

export default EducationFormOutput;
