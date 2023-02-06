import React, { useState } from "react";
import "./experience.css";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ExperienceForm from "../experienceForm/ExperienceForm";

const Experience = () => {
  const [forms, setForms] = useState([]);
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddForm = () => {
    setForms([...forms, "count"]);
    console.log(forms);
  };
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const aboutMe = localStorage.getItem("aboutMe");
  const number = localStorage.getItem("number");
  const email = localStorage.getItem("email");
  const uploadedImage = localStorage.getItem("uploadedImage");
  return (
    <div>
      <div className='experience-container'>
        <div className='experience-header'>
          <p className='experience-header-text'>გამოცდილება</p>
          <p className='experience-header-page-number'>2/3</p>
          <ChevronLeftOutlinedIcon className='back-chevron-left' />
        </div>
        <div className='bottom-line-for-header'></div>
      </div>

      <ExperienceForm />

      <div className='experience-added-form-container'>
        {forms.map((form, index) => {
          return (
            <div className='experience-added-form-item' key={index}>
              <ExperienceForm />
            </div>
          );
        })}
      </div>
      <div className='bottom-border'></div>

      <button className='add-more-experience-button' onClick={handleAddForm}>
        მეტი გამოცდილების დამატება
      </button>

      <div className='output-container'>
        <p className='firstname-output-container'>
          {name} {surname}
        </p>

        <div className='email-and-phone-container'>
          <div className='email-output-container'>
            <span className={email ? "email-icon-mui show" : "email-icon-mui"}>
              <AlternateEmailIcon />
            </span>
            <p className='email-output'>{email}</p>
          </div>
          <div className='phone-output-container'>
            <span
              className={
                number ? "number-mui-icon show-number-icon" : "number-mui-icon"
              }
            >
              <PhoneIcon />
            </span>
            <p className='number-output'>{number}</p>
          </div>
        </div>

        <div className='about-me-output-container'>
          <p
            className={
              aboutMe
                ? "about-me-output-header header-show"
                : "about-me-output-header"
            }
          >
            ჩემს შესახებ
          </p>
          <p className='about-me-output'>{aboutMe}</p>
        </div>
        <div>
          <img className='image-uploaded' src={uploadedImage} alt='person' />
        </div>

        <div className='bottom-line-after-about-me'></div>
      </div>

      <button className='go-back-button'>
        <span className='go-back-button-text'>უკან</span>
      </button>

      <button className='go-next-button'>
        <span className='go-next-button-text'>შემდეგი</span>
      </button>
    </div>
  );
};

export default Experience;
