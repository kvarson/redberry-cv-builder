import React from "react";
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
              name='degree'
              value={educationInputs?.degree}
              className='education-degree-select'
            >
              <option
                className='education-degree-option'
                value=''
                disabled
                selected
                hidden
              >
                აირჩიეთ ხარისხი
              </option>
              <option style={{ width: "370px" }} value=''>
                blabla
              </option>
              <option style={{ width: "370px" }} value=''>
                blabla
              </option>
              <option style={{ width: "370px" }} value=''>
                blabla
              </option>
              <option style={{ width: "370px" }} value=''>
                blabla
              </option>
              <option style={{ width: "370px" }} value=''>
                blabla
              </option>
            </select>
          </div>

          <div className='education-ending-date-container'>
            <p className='education-ending-date-text'>დამთავრების რიცხვი</p>
            <input
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
