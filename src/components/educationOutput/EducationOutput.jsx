import React from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MappedForms from "../MappedForms/MappedForms";
import MappedFormsForEducation from "../mappedFormsForEducation/MappedFormsForEducation";
const EducationOutput = () => {
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const aboutMe = localStorage.getItem("aboutMe");
  const number = localStorage.getItem("number");
  const email = localStorage.getItem("email");
  const uploadedImage = localStorage.getItem("uploadedImage");

  const experienceInputs = localStorage.getItem("formData");

  const experienceData = experienceInputs ? JSON.parse(experienceInputs) : [];

  console.log(experienceData);

  const formatedNumber =
    number.slice(0, 4) +
    " " +
    number.slice(4, 7) +
    " " +
    number.slice(7, 10) +
    " " +
    number.slice(10, 13);

  return (
    <div>
      <div className='output-container-remastered'>
        <p className='firstname-output-container-remastered'>
          {name} {surname}
        </p>
        <div className='image-container-remastered'>
          <img
            className='image-uploaded-remastered'
            src={uploadedImage}
            alt='person'
          />
        </div>

        <div className='email-and-phone-container-remastered'>
          <div className='email-output-container-remastered'>
            <p
              className={
                email
                  ? "email-icon-mui-remastered show-remastered"
                  : "email-icon-mui-remastered"
              }
            >
              <AlternateEmailIcon />
            </p>
            <p className='email-output-remastered'>{email}</p>
          </div>
          <div className='phone-output-container-remastered'>
            <span
              className={
                number
                  ? "number-mui-icon-remastered show-number-icon-remastered"
                  : "number-mui-icon-remastered"
              }
            >
              <PhoneIcon />
            </span>
            <p className='number-output-remastered'>{formatedNumber}</p>
          </div>
        </div>

        <div className='about-me-output-container-remastered'>
          <p
            className={
              aboutMe
                ? "about-me-output-header-remastered header-show-remastered"
                : "about-me-output-header-remastered"
            }
          >
            ჩემს შესახებ
          </p>
          <p className='about-me-output-remastered'>{aboutMe}</p>
        </div>
        {experienceData.map((exp, index) => {
          return (
            <MappedFormsForEducation
              experienceData={experienceData}
              key={index}
              index={index}
            />
          );
        })}

        {/* <div className='bottom-line-after-about-me-remastered'></div> */}
      </div>
    </div>
  );
};

export default EducationOutput;
