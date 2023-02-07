import React, { useState } from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import "./education.css";
import EducationForm from "../educationForm/EducationForm";
import EducationOutput from "../educationOutput/EducationOutput";
const Education = () => {
  const [educationInputs, setEducationInputs] = useState([
    { facility: "", degree: "", studyEnding: "", studyDescription: "" },
  ]);
  console.log(educationInputs);
  const addEducation = () => {
    setEducationInputs([
      ...educationInputs,
      {
        facility: "",
        degree: "",
        studyEnding: "",
        studyDescription: "",
      },
    ]);
  };

  return (
    <div>
      <div className='education-flex'>
        <div className='education-form-container'>
          <div className='education-header'>
            <p className='education-header-text'>განათლება</p>
            <p className='education-header-page'>3/3</p>
          </div>
          <ChevronLeftOutlinedIcon className='back-chevron-left-remastered' />
          {educationInputs.map((educ, index) => {
            return (
              <EducationForm
                key={index}
                index={index}
                educationInputs={educationInputs}
                setEducationInputs={setEducationInputs}
              />
            );
          })}

          <button className='add-more-education-btn' onClick={addEducation}>
            სხვა სასწავლებლის დამატება
          </button>
          <div className='button-container'>
            <button className='go-back-btn'>უკან</button>
            <button className='end-btn'>დასრულება</button>
          </div>
        </div>

        <div className='education-output-container'>
          <EducationOutput />
        </div>
      </div>
    </div>
  );
};

export default Education;
