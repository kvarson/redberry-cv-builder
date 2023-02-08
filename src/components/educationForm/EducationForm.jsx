import React, { useEffect, useState } from "react";
import "./educationForm.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const EducationForm = ({ educationInputs, setEducationInputs, index }) => {
  const handleEducationInputChange = (event, index) => {
    if (!educationInputs) return;
    const name = event.target.name;
    const values = [...educationInputs];
    if (!values[index]) values[index] = {};
    values[index][name] = event.target.value;
    setEducationInputs(values);
  };
  console.log(educationInputs);
  const [degree, setDegree] = useState([]);

  useEffect(() => {
    // Fetch the options data from the API or other source
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((data) => setDegree(data));
  }, []);
  return (
    <div>
      <div className='form-wrapper'>
        {/* <div className='education-header-bottom-line'></div> */}

        <div className='education-facility-container'>
          <p className='education-facility-text'>სასწავლებელი</p>
          <input
            type='text'
            name='facility'
            className='education-facility-input'
            placeholder='სასწავლებელი'
            value={educationInputs?.facility}
            onChange={(e) => handleEducationInputChange(e, index)}
          />
          <CheckCircleIcon className='position-check-circle-remastered' />
          <ReportProblemIcon className='position-error-icon-remastered' />

          <p className='education-facility-min-req'>მინიმუმ 2 სიმბოლო</p>
        </div>
        <div className='education-degree-ending-date-container'>
          <div className='education-degree-container'>
            <p className='education-degree-text'>ხარისხი</p>
            <select
              onChange={(e) => handleEducationInputChange(e, index)}
              name='degree'
              value={educationInputs?.degree}
              className='education-degree-select'
            >
              <option
                className='option-to-disapear'
                value=''
                disabled
                label='აირჩიეთ ხარისხი'
                selected
              />

              {degree.map((option) => (
                <option key={option.id} value={option.title}>
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
              value={educationInputs?.studyEnding}
              name='studyEnding'
              className='education-ending-input'
            />
          </div>
        </div>

        <div className='education-description-container'>
          <p className='education-description-text'>აღწერა</p>
          <textarea
            onChange={(e) => handleEducationInputChange(e, index)}
            name='studyDescription'
            value={educationInputs?.studyDescription}
            className='education-description-input'
            placeholder='განათლების აღწერა'
          />
        </div>

        <div className='education-bottom-line'></div>
      </div>
    </div>
  );
};

export default EducationForm;
