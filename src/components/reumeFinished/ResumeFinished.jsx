import React, { useEffect, useRef, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import "./resumeFinished.css";
import MappedFormsForEducation from "../mappedFormsForEducation/MappedFormsForEducation";
import EducationFormOutput from "../educationFormOutput/EducationFormOutput";
import EducationFormOutputForResume from "../educationFormOutputForResume/EducationFormOutputForResume";
import LittleLogo from "../../assets/bottom-logo.png";
import axios from "axios";
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
  const fileSaved = localStorage.getItem("fileSaved");
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Retrieving the file from localStorage
    const dataUrl = localStorage.getItem("myFile");
    const blob = dataUrlToBlob(dataUrl);
    const file = new File([blob], "myFileName", { type: "image/png" });
    setValidatedImage(file);

    function dataUrlToBlob(dataUrl) {
      const parts = dataUrl.split(";base64,");
      const contentType = parts[0].split(":")[1];
      const byteCharacters = atob(parts[1]);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
      }
      const byteArray = new Uint8Array(byteArrays);
      return new Blob([byteArray], { type: contentType });
    }
  }, []);

  const postData = (data) => {
    axios({
      method: "post",
      url: "https://resume.redberryinternship.ge/api/cvs",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: data,
    })
      .then(function (response) {
        // console.log(response.data);
        // setResponseData(response);

        setResponseData(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
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

  useEffect(() => {
    postData(newCvToSend);
  }, [validatedImage]);

  console.log(responseData);

  return (
    responseData && (
      <div>
        <div className='resume-container'>
          <div className='personal-info-container-for-resume'>
            <div className='resume-personal-container'>
              <p className='resume-name-surname'>
                {responseData.name} {responseData.surname}
              </p>
              <div className='resume-email'>
                <AlternateEmailIcon className='resume-email-icon' />
                <p className='resume-email-text'>{responseData.email}</p>
              </div>
              <div className='resume-phone'>
                <PhoneIcon className='resume-phone-icon' />
                <p className='resume-phone-text'>
                  {responseData.phone_number.slice(0, 4) +
                    " " +
                    responseData.phone_number.slice(4, 7) +
                    " " +
                    responseData.phone_number.slice(7, 10) +
                    " " +
                    responseData.phone_number.slice(10, 13)}
                </p>
              </div>
            </div>
            <div className='resume-image-container'>
              <img
                className='resume-finished-image'
                src={`https://resume.redberryinternship.ge${responseData.image}`}
                alt='Person'
              />
            </div>
            <div className='resume-about-me-container'>
              <p className='resume-about-me-text'>ჩემს შესახებ</p>

              <div className='resume-about-me-value'>
                {responseData.about_me}
              </div>
              <div className='resume-personal-botton-line'></div>
            </div>
          </div>

          <div className='resume-experience-container'>
            {experienceData.map((exp, index) => {
              return (
                <MappedFormsForEducation
                  experienceData={responseData.experiences}
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
                  educationData={responseData.educations}
                  key={index}
                  index={index}
                />
              );
            })}
          </div>
          <img className='little-logo-resume' src={LittleLogo} alt='' />
        </div>
        <div className='resume-send-successfully'>
          რეზუმე წარმატებით გაიგზავნა 🥳
        </div>
      </div>
    )
  );
};

export default ResumeFinished;
