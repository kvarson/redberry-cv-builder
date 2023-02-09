import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import "./resumeFinished.css";
import MappedFormsForEducation from "../mappedFormsForEducation/MappedFormsForEducation";
import EducationFormOutput from "../educationFormOutput/EducationFormOutput";
import EducationFormOutputForResume from "../educationFormOutputForResume/EducationFormOutputForResume";
const ResumeFinished = () => {
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const aboutMe = localStorage.getItem("aboutMe");
  const number = localStorage.getItem("number");
  const email = localStorage.getItem("email");
  const uploadedImage = localStorage.getItem("uploadedImage");

  const experienceInputs = localStorage.getItem("formData");
  const experienceData = experienceInputs ? JSON.parse(experienceInputs) : [];

  const educationInputs = localStorage.getItem("formEducationData");
  const educationData = educationInputs ? JSON.parse(educationInputs) : [];
  const [validatedImage, setValidatedImage] = useState("");

  const uploadedImageString = JSON.stringify(uploadedImage);
  useEffect(() => {
    // fetch(uploadedImage)
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     const file = new File([blob], "File name", { type: "image/png" });
    //     setValidatedImage(file);
    //   });
    fetch(uploadedImageString)
      .then((response) => response.blob())
      .then((blob) => setValidatedImage(blob));
  }, [uploadedImage]);
  console.log(validatedImage);

  const newCvToSend = {
    name: name,
    surname: surname,
    email: email,
    phone_number: number,
    experiences: [...experienceData],
    educations: [...educationData],
    image: validatedImage,
    about_me: aboutMe,
  };
  console.log(JSON.stringify(newCvToSend));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://resume.redberryinternship.ge/api/cvs",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: newCvToSend,
          }
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
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
    <div>
      <div className='resume-container'>
        <div className='personal-info-container-for-resume'>
          <div className='resume-personal-container'>
            <p className='resume-name-surname'>
              {name} {surname}
            </p>
            <div className='resume-email'>
              <AlternateEmailIcon className='resume-email-icon' />
              <p className='resume-email-text'>{email}</p>
            </div>
            <div className='resume-phone'>
              <PhoneIcon className='resume-phone-icon' />
              <p className='resume-phone-text'>{formatedNumber}</p>
            </div>
          </div>
          <div className='resume-image-container'>
            <img
              className='resume-finished-image'
              src={uploadedImage}
              alt='Person'
            />
          </div>
          <div className='resume-about-me-container'>
            <p className='resume-about-me-text'>ჩემს შესახებ</p>

            <div className='resume-about-me-value'>{aboutMe}</div>
            <div className='resume-personal-botton-line'></div>
          </div>
        </div>

        <div className='resume-experience-container'>
          {experienceData.map((exp, index) => {
            return (
              <MappedFormsForEducation
                experienceData={experienceData}
                key={index}
                index={index}
              />
            );
          })}
        </div>
        <div className='resume-education-container'>
          {educationData.map((educationdt, index) => {
            return (
              <EducationFormOutputForResume
                educationData={educationData}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeFinished;
