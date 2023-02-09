import React from "react";
// import "./educationFormOutput.css";
const EducationFormOutput = ({ educationData, index }) => {
  return (
    <div>
      <div className='experience-output-container-form-remastered'>
        <p className='experience-output-text-form-remastered'>
          {educationData[index]?.institute ? "განათლება" : ""}
        </p>
        <p className='position-output-text-input-form-remastered'>
          {educationData[index]?.institute
            ? `${educationData[index]?.institute},`
            : ""}{" "}
          {educationData[index]?.degree_id}
        </p>
      </div>

      <div className='experience-starting-ending-output-form-remastered'>
        {educationData[index]?.due_date.replaceAll("-", "/")}{" "}
      </div>

      <div className='description-output-form-remastered'>
        {educationData[index]?.description}
      </div>

      {educationData[index]?.institute && (
        <div className='border-line-for-experience'></div>
      )}
    </div>
  );
};

export default EducationFormOutput;
