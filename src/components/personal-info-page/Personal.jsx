import React, { useState } from "react";
import "./personal.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router";
import LittleLogo from "../../assets/bottom-logo.png";

const Personal = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [nameValid, setNameValid] = useState(0);
  const [surnameValid, setSurnameValid] = useState(0);
  const [aboutMeValid, setAboutMeValid] = useState(0);
  const [emailValid, setEmailValid] = useState(0);
  const [numberValid, setNumberValid] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [validatedImage, setValidatedImage] = useState("");
  const [fileSaved, setFileSaved] = useState("");

  console.log(uploadedImage);
  const formatedNumber =
    number.slice(0, 4) +
    " " +
    number.slice(4, 7) +
    " " +
    number.slice(7, 10) +
    " " +
    number.slice(10, 13);
  const handleNameChange = (e) => {
    setName(e.target.value);
    const geoRegex = /^[ა-ჰ]+$/g;
    if (geoRegex.test(name)) {
      setNameValid(1);
    } else {
      setNameValid(-1);
    }
    localStorage.setItem("nameSaved", JSON.stringify(name));
  };

  const handleSurnameChange = (e) => {
    const geoRegex = /^[ა-ჰ]+$/g;
    setSurname(e.target.value);
    if (geoRegex.test(surname)) {
      setSurnameValid(1);
    } else {
      setSurnameValid(-1);
    }
    localStorage.setItem("surnameSaved", JSON.stringify(surname));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // const regex = /[a-zA-Z]@redberry\.ge/g;
    if (e.target.value.endsWith("redberry.ge")) {
      setEmailValid(1);
    } else {
      setEmailValid(-1);
    }
    localStorage.setItem("emailSaved", JSON.stringify(email));
  };
  const handlePictureChange = (e) => {};
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    const phoneRegex = /^(\+?995)?\d{9}$/;
    if (phoneRegex.test(e.target.value.replace(/\s/g, ""))) {
      setNumberValid(1);
    } else {
      setNumberValid(-1);
    }
    localStorage.setItem("numberSaved", JSON.stringify(number));
  };
  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
    if (e.target.value.length > 0) {
      setAboutMeValid(1);
    } else {
      setAboutMeValid(-1);
    }
    localStorage.setItem("aboutMeSaved", JSON.stringify(aboutMe));
  };
  console.log(nameValid, "nameValid");
  console.log(surnameValid, "surnameValid");
  console.log(numberValid, "numberValid");
  console.log(aboutMeValid, "aboutMeValid");
  console.log(emailValid, "emailValid");

  const nameSaved = localStorage.getItem("nameSaved");
  const nameSavedParsed = JSON.parse(nameSaved);
  const surnameSaved = localStorage.getItem("surnameSaved");
  const surnameSavedParsed = JSON.parse(surnameSaved);
  const emailSaved = localStorage.getItem("emailSaved");
  const emailSavedParsed = JSON.parse(emailSaved);
  const numberSaved = localStorage.getItem("numberSaved");
  const numberSavedParsed = JSON.parse(numberSaved);
  const aboutMeSaved = localStorage.getItem("aboutMeSaved");
  const aboutMeSavedParsed = JSON.parse(aboutMeSaved);

  const fileSelectedHandler = (e) => {
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
    setFileSaved(e.target.files[0]);
    localStorage.setItem(
      "uploadedImageSecond",
      URL.createObjectURL(e.target.files[0])
    );
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const dataUrl = reader.result;
      localStorage.setItem("myFile", dataUrl);
    };
    reader.readAsDataURL(file);
  };
  const navigate = useNavigate();

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    // if validated

    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("aboutMe", aboutMe);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("uploadedImage", uploadedImage);
    localStorage.setItem("fileSaved", fileSaved);

    // navigate to the experience page
    if (
      nameValid === 1 &&
      surnameValid === 1 &&
      emailValid === 1 &&
      numberValid === 1 &&
      aboutMeValid === 1 &&
      uploadedImage
    ) {
      navigate("/experience");
    }
  };

  const handleChevronLeft = () => {
    localStorage.clear();
    navigate("/");
  };

  const fileUploadHandler = () => {};
  return (
    <div>
      <div className='personal-container'>
        <div className='private-info'>
          <div className='personal-info-text'>პირადი ინფო</div>
          <div className='first-out-of-three'>1/3</div>
        </div>

        <div className='chevron-left'>
          <ChevronLeftOutlinedIcon onClick={handleChevronLeft} />
        </div>
        <div className='bottom-line-second'></div>

        <form className='form'>
          <div className='name-surname-container'>
            <div className='name-container'>
              <label className='name-label'>სახელი</label>
              <input
                onChange={(e) => handleNameChange(e)}
                required
                value={name === "" ? nameSavedParsed : name}
                className={`${
                  (nameValid === 1 && "name-input success") ||
                  (nameValid === -1 && "name-input unsuccess") ||
                  (nameValid === 0 && "name-input")
                } `}
                type='text'
                placeholder='ანზორ'
              />

              {nameValid === 1 && (
                <CheckCircleIcon className='success-icon-name success-with-icon' />
              )}
              {nameValid === -1 && (
                <ReportProblemIcon className='unsuccess-icon-name unsuccess-with-icon' />
              )}

              {/* <span className='unsuccess-icon-name'>
              <ReportProblemIcon />
            </span> */}
              <span className='minimum-req-for-name'>
                მინიმუმ 2 ასო, ქართული ასოებით
              </span>
            </div>

            <div className='surname-container'>
              <label className='surname-label'>გვარი</label>
              <input
                value={surname === "" ? surnameSavedParsed : surname}
                onChange={(e) => handleSurnameChange(e)}
                required
                className={
                  (surnameValid === 0 && "surname-input") ||
                  (surnameValid === 1 && "surname-input border-green") ||
                  (surnameValid === -1 && "surname-input border-red")
                }
                type='text'
                placeholder='მუმლაძე'
              />
              <span className='minimum-req-for-surname'>
                მინიმუმ 2 ასო, ქართული ასოებით
              </span>

              {surnameValid === 1 && (
                <CheckCircleIcon className='success-icon-surname success-with-icon' />
              )}

              {surnameValid === -1 && (
                <ReportProblemIcon className='unsuccess-icon-surname unsuccess-with-icon' />
              )}

              {/* <span className='unsuccess-icon-surname'>
              <ReportProblemIcon />
            </span> */}
            </div>
          </div>
          <div className='upload-photo-container'>
            <p className='upload-photo-text'>პირადი ფოტოს ატვირთვა</p>

            <label className='upload-photo-button' onClick={fileUploadHandler}>
              ატვირთვა
              <input
                className='hidden-input'
                type='file'
                onChange={fileSelectedHandler}
                accept='image/*'
              />
            </label>

            {/* <span className='upload-text'>ატვირთვა</span> */}
          </div>

          <div className='about-me-container'>
            <p className='about-me-header'>ჩემ შესახებ (არასავალდებულო)</p>
            <textarea
              value={aboutMe === "" ? aboutMeSavedParsed : aboutMe}
              onChange={(e) => handleAboutMeChange(e)}
              className={
                (aboutMeValid === 0 && "about-me-textarea") ||
                (aboutMeValid === 1 && "about-me-textarea border-green") ||
                (aboutMeValid === -1 && "about-me-textarea border-red")
              }
              placeholder='ზოგადი ინფო შენ შესახებ'
            ></textarea>
          </div>

          <div className='email-container'>
            <label className='email-label'>ელ.ფოსტა</label>
            <input
              value={email === "" ? emailSavedParsed : email}
              onChange={(e) => handleEmailChange(e)}
              required
              className={
                (emailValid === 1 && "email-input border-green") ||
                (emailValid === -1 && "email-input border-red") ||
                (emailValid === 0 && "email-input")
              }
              type='text'
              placeholder='anzorr666@redberry.ge'
            />
            <span className='min-req-email'>
              უნდა მთავრდებოდეს @redberry.ge-თი
            </span>

            {emailValid === 1 && (
              <CheckCircleIcon className='success-icon-email success-with-icon' />
            )}

            {emailValid === -1 && (
              <ReportProblemIcon className='unsuccess-icon-email unsuccess-with-icon' />
            )}
          </div>

          <div className='mobile-number-container'>
            <label className='mobile-number-label'>მობილურის ნომერი</label>
            <input
              value={number === "" ? numberSavedParsed : number}
              onChange={(e) => handleNumberChange(e)}
              required
              type='text'
              className={
                (numberValid === 1 && "mobile-number-input border-green") ||
                (numberValid === 0 && "mobile-number-input") ||
                (numberValid === -1 && "mobile-number-input border-red")
              }
              placeholder='+995 551 12 34 56'
            />
            <span className='mobile-number-req'>
              უნდა აკმაყოფილებდეს მობილური ნომრის ქართულ ფორმატს
            </span>

            {numberValid === 1 && (
              <CheckCircleIcon className='success-icon-number success-with-icon' />
            )}

            {numberValid === -1 && (
              <ReportProblemIcon className='unsuccess-icon-number unsuccess-with-icon' />
            )}
          </div>

          <button className='next-btn'>
            <span
              className='next-span'
              onClick={(e) => handleNextButtonClick(e)}
            >
              შემდეგი
            </span>
          </button>
        </form>
      </div>
      <div className='output-container'>
        <p className='firstname-output-container'>
          {name === "" ? nameSavedParsed : name}{" "}
          {surname === "" ? surnameSavedParsed : surname}
        </p>

        <div className='email-and-phone-container'>
          <div className='email-output-container'>
            <span
              className={
                email || emailSavedParsed
                  ? "email-icon-mui show"
                  : "email-icon-mui"
              }
            >
              <AlternateEmailIcon />
            </span>
            <p className='email-output'>
              {email === "" ? emailSavedParsed : email}
            </p>
          </div>
          <div className='phone-output-container'>
            <span
              className={
                number || numberSavedParsed
                  ? "number-mui-icon show-number-icon"
                  : "number-mui-icon"
              }
            >
              <PhoneIcon />
            </span>
            <p className='number-output'>
              {number === "" ? numberSavedParsed : formatedNumber}
            </p>
          </div>
        </div>

        <div className='about-me-output-container'>
          <p
            className={
              aboutMe || aboutMeSavedParsed
                ? "about-me-output-header header-show"
                : "about-me-output-header"
            }
          >
            ჩემს შესახებ
          </p>
          <p className='about-me-output'>
            {aboutMe === "" ? aboutMeSavedParsed : aboutMe}
          </p>
        </div>
        <div>
          <img className='image-uploaded' src={uploadedImage} alt='person' />
        </div>

        {nameValid && <img className='little-logo' src={LittleLogo} alt='' />}
      </div>
    </div>
  );
};

export default Personal;
