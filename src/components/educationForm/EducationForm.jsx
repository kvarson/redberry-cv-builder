import React, { useEffect, useState } from "react";
import "./educationForm.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const EducationForm = ({
  educationInputs,
  setEducationInputs,
  index,
  validationDegreeId,
  setValidationDegreeId,
  validationDescription,
  setValidationDescription,
  validationDueDate,
  setValidationDueDate,
  validationInstitute,
  setValidationInstitute,
}) => {
  const [sessionSavedData, setSessionSavedData] = useState(null);
  const handleEducationInputChange = (event, index) => {
    if (!educationInputs) return;
    const name = event.target.name;
    const values = [...educationInputs];
    if (!values[index]) values[index] = {};
    values[index][name] = event.target.value;
    setEducationInputs(values);
    localStorage.setItem("educationInputs", JSON.stringify(values));
    handleValidation(name, index);
  };

  const valuesForInputs = localStorage.getItem("educationInputs");
  const valuesForInputsParsed = JSON.parse(valuesForInputs);
  console.log(valuesForInputsParsed, "LOCALSTORAGE");
  // useEffect(() => {
  //   const savedData = sessionStorage.getItem("valuesSaved");
  //   const savedDataParsed = JSON.parse(savedData);
  //   // console.log(savedDataParsed);
  //   setSessionSavedData(savedDataParsed);
  //   console.log(sessionSavedData);
  // }, []);
  const [degree, setDegree] = useState([]);

  const handleValidation = (name, index) => {
    switch (name) {
      case "institute":
        setValidationInstitute(
          educationInputs[index]?.institute.length >= 2 ? 1 : -1
        );
        break;
      case "degree_id":
        setValidationDegreeId(educationInputs[index]?.degree_id ? 1 : -1);
        break;

      case "due_date":
        setValidationDueDate(educationInputs[index]?.due_date ? 1 : -1);
        break;
      case "description":
        setValidationDescription(
          educationInputs[index]?.description.length >= 1 ? 1 : -1
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Fetch the options data from the API or other source
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((data) => setDegree(data));
  }, []);

  return (
    <div>
      <div className='form-wrapper'>
        <div className='education-facility-container'>
          <p className='education-facility-text'>სასწავლებელი</p>
          <input
            type='text'
            name='institute'
            className={
              (validationInstitute === 0 && "education-facility-input") ||
              (validationInstitute === 1 &&
                "education-facility-input border-green") ||
              (validationInstitute === -1 &&
                "education-facility-input border-red")
            }
            placeholder='სასწავლებელი'
            value={
              educationInputs[index]?.institute === ""
                ? valuesForInputsParsed?.institute
                : educationInputs[index]?.institute
            }
            onChange={(e) => handleEducationInputChange(e, index)}
          />
          {validationInstitute === 1 && (
            <CheckCircleIcon className='position-check-circle-remastered' />
          )}
          {validationInstitute === -1 && (
            <ReportProblemIcon className='position-error-icon-remastered' />
          )}

          <p className='education-facility-min-req'>მინიმუმ 2 სიმბოლო</p>
        </div>
        <div className='education-degree-ending-date-container'>
          <div className='education-degree-container'>
            <p className='education-degree-text'>ხარისხი</p>
            <select
              onChange={(e) => handleEducationInputChange(e, index)}
              name='degree_id'
              value={
                educationInputs[index]?.degree_id === ""
                  ? valuesForInputsParsed?.degree_id
                  : educationInputs[index]?.degree_id
              }
              className={
                (validationDegreeId === 1 &&
                  "education-degree-select border-green") ||
                (validationDegreeId === -1 &&
                  "education-degree-select border-red") ||
                (validationDegreeId === 0 && "education-degree-select")
              }
            >
              <option
                className='option-to-disapear'
                value=''
                disabled
                label='აირჩიეთ ხარისხი'
                selected
              />

              {degree.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>

          <div className='education-ending-date-container'>
            <p className='education-ending-date-text'>დამთავრების რიცხვი</p>
            <input
              onChange={(e) => handleEducationInputChange(e, index)}
              type='date'
              value={
                educationInputs[index]?.due_date === ""
                  ? valuesForInputsParsed?.due_date
                  : educationInputs[index]?.due_date
              }
              name='due_date'
              className={
                (validationDueDate === 1 &&
                  "education-ending-input border-green") ||
                (validationDueDate === -1 &&
                  "education-ending-input border-red") ||
                (validationDueDate === 0 && "education-ending-input")
              }
            />
          </div>
        </div>

        <div className='education-description-container'>
          <p className='education-description-text'>აღწერა</p>
          <textarea
            onChange={(e) => handleEducationInputChange(e, index)}
            name='description'
            value={
              educationInputs[index]?.description === ""
                ? valuesForInputsParsed?.description
                : educationInputs[index]?.description
            }
            className={
              (validationDescription === 1 &&
                "education-description-input border-green") ||
              (validationDescription === -1 &&
                "education-description-input border-red") ||
              (validationDescription === 0 && "education-description-input")
            }
            placeholder='განათლების აღწერა'
          />
        </div>

        <div className='education-bottom-line'></div>
      </div>
    </div>
  );
};

export default EducationForm;
