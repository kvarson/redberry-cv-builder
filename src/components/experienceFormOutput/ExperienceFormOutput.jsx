import React from "react";
import "./experienceFormOutput.css";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MappedForms from "../MappedForms/MappedForms";
const ExperienceFormOutput = ({
  position,
  employer,
  startingDate,
  endingDate,
  description,
  forms,
}) => {
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const aboutMe = localStorage.getItem("aboutMe");
  const number = localStorage.getItem("number");
  const email = localStorage.getItem("email");
  const uploadedImage = localStorage.getItem("uploadedImage");

  const formatedNumber =
    number.slice(0, 4) +
    " " +
    number.slice(4, 7) +
    " " +
    number.slice(7, 10) +
    " " +
    number.slice(10, 13);

  // console.log(forms);
  return (
    <>
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

        <div className='bottom-line-after-about-me-remastered'></div>

        <div className='experience-output-container-form-remastered'>
          <p className='experience-output-text-form-remastered'>
            {position ? "გამოცდილება" : ""}
          </p>
          <p className='position-output-text-input-form-remastered'>
            {position ? `${position},` : ""} {employer}
          </p>
        </div>

        <div className='experience-starting-ending-output-form-remastered'>
          {startingDate.replaceAll("-", "/")} {startingDate ? "-" : ""}{" "}
          {endingDate.replaceAll("-", "/")}
        </div>

        <div className='description-output-form-remastered'>{description}</div>

        {position && <div className='border-line-for-experience'></div>}

        {forms.length > 0 &&
          forms.map((form, index) => {
            return (
              <MappedForms
                key={index}
                forms={forms}
                position={position}
                employer={employer}
                startingDate={startingDate}
                endingDate={endingDate}
                description={description}
              />
            );
          })}
      </div>
    </>
  );
};

export default ExperienceFormOutput;
