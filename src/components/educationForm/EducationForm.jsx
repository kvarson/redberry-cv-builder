import React from "react";
import "./educationForm.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EducationForm = () => {
  return (
    <div>
      <div className='form-wrapper'>
        {/* <div className='education-header-bottom-line'></div> */}

        <div className='education-facility-container'>
          <p className='education-facility-text'>სასწავლებელი</p>
          <input
            type='text'
            className='education-facility-input'
            placeholder='სასწავლებელი'
            value=''
            onChange=''
          />
          <CheckCircleIcon className='position-check-circle-remastered' />

          <p className='education-facility-min-req'>მინიმუმ 2 სიმბოლო</p>
        </div>
        <div className='education-degree-ending-date-container'>
          <div className='education-degree-container'>
            <p className='education-degree-text'>ხარისხი</p>
            <select className='education-degree-select' placeholder=''>
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
            <input type='date' className='education-ending-input' />
          </div>
        </div>

        <div className='education-description-container'>
          <p className='education-description-text'>აღწერა</p>
          <textarea
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
