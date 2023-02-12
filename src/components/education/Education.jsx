import React, { useEffect, useState } from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import "./education.css";
import EducationForm from "../educationForm/EducationForm";
import EducationOutput from "../educationOutput/EducationOutput";
import { useNavigate } from "react-router";
const Education = () => {
  const [educationInputs, setEducationInputs] = useState(() => {
    const savedInputs = JSON.parse(localStorage.getItem("educationInputs"));
    return (
      savedInputs || [
        { institute: "", degree_id: "", due_date: "", description: "" },
      ]
    );
  });
  // const [educationInputs, setEducationInputs] = useState([
  //   { institute: "", degree_id: "", due_date: "", description: "" },
  // ]);

  const [validationInstitute, setValidationInstitute] = useState(0);
  const [validationDegreeId, setValidationDegreeId] = useState(0);
  const [validationDescription, setValidationDescription] = useState(0);
  const [validationDueDate, setValidationDueDate] = useState(0);
  const addEducation = () => {
    setEducationInputs([
      ...educationInputs,
      {
        institute: "",
        degree_id: "",
        due_date: "",
        description: "",
      },
    ]);
  };
  const handleChevronLeft = () => {
    localStorage.clear();
    navigate("/");
  };

  const navigate = useNavigate();

  const handleEndButton = () => {
    // if validated
    const educationData = JSON.stringify(educationInputs);
    // Store the data in localStorage
    localStorage.setItem("formEducationData", educationData);

    // navigate to the resumeFinished page !!
    if (
      validationDegreeId === 1 &&
      validationDescription === 1 &&
      validationDueDate === 1 &&
      validationInstitute === 1
    ) {
      navigate("/resume");
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("valuesSaved", JSON.stringify(educationInputs));
  // }, [educationInputs]);
  return (
    <div>
      <div className='education-flex'>
        <div className='education-form-container'>
          <div className='education-header'>
            <p className='education-header-text'>განათლება</p>
            <p className='education-header-page'>3/3</p>
          </div>
          <ChevronLeftOutlinedIcon
            onClick={handleChevronLeft}
            className='back-chevron-left-remastered'
          />
          {educationInputs.map((educ, index) => {
            return (
              <EducationForm
                validationDegreeId={validationDegreeId}
                setValidationDegreeId={setValidationDegreeId}
                validationDescription={validationDescription}
                setValidationDescription={setValidationDescription}
                validationDueDate={validationDueDate}
                setValidationDueDate={setValidationDueDate}
                validationInstitute={validationInstitute}
                setValidationInstitute={setValidationInstitute}
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
            <button className='end-btn' onClick={handleEndButton}>
              დასრულება
            </button>
          </div>
        </div>

        <div className='education-output-container'>
          <EducationOutput educationInputs={educationInputs} />
        </div>
      </div>
    </div>
  );
};

export default Education;
