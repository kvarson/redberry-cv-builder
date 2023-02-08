import React, { useState } from "react";
import "./personal.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router";

const Personal = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameValid, setNameValid] = useState(null);
  const [surnameValid, setSurnameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

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
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const validateName = (name) => {};

  const handleSurnameChange = (e) => {
    const geoRegex = /^[ა-ჰ]+$/g;
    setSurname(e.target.value);
    if (geoRegex.test(surname)) {
      setSurnameValid(true);
    } else {
      setSurnameValid(false);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // const regex = /[a-zA-Z]@redberry\.ge/g;
    if (e.target.value.endsWith("redberry.ge")) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    console.log(emailValid);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    const phoneRegex = /^(\+?995)?\d{9}$/;
    if (phoneRegex.test(e.target.value.replace(/\s/g, ""))) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
  };
  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };
  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
  };
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    // if validated

    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("aboutMe", aboutMe);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("uploadedImage", uploadedImage);
    // navigate to the experience page

    navigate("/experience");
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
          <ChevronLeftOutlinedIcon />
        </div>
        <div className='bottom-line-second'></div>

        <form className='form'>
          <div className='name-surname-container'>
            <div className='name-container'>
              <label className='name-label'>სახელი</label>
              <input
                onChange={(e) => handleNameChange(e)}
                required
                value={name}
                className={`${
                  nameValid ? "name-input success" : "name-input unsuccess"
                } `}
                type='text'
                placeholder='ანზორ'
              />
              <span
                className={
                  nameValid
                    ? "success-icon-name success-with-icon"
                    : "unsuccess-icon-name unsuccess-with-icon"
                }
              >
                {nameValid ? <CheckCircleIcon /> : <ReportProblemIcon />}
              </span>
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
                value={surname}
                onChange={(e) => handleSurnameChange(e)}
                required
                className='surname-input'
                type='text'
                placeholder='მუმლაძე'
              />
              <span className='minimum-req-for-surname'>
                მინიმუმ 2 ასო, ქართული ასოებით
              </span>

              <span
                className={
                  surnameValid
                    ? "success-icon-surname success-with-icon"
                    : "unsuccess-icon-surname unsuccess-with-icon"
                }
              >
                {surnameValid ? <CheckCircleIcon /> : <ReportProblemIcon />}
              </span>
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
              onChange={(e) => handleAboutMeChange(e)}
              className='about-me-textarea'
              placeholder='ზოგადი ინფო შენ შესახებ'
            ></textarea>
          </div>

          <div className='email-container'>
            <label className='email-label'>ელ.ფოსტა</label>
            <input
              value={email}
              onChange={(e) => handleEmailChange(e)}
              required
              className={
                emailValid ? "email-input success" : "email-input unsuccess"
              }
              type='text'
              placeholder='anzorr666@redberry.ge'
            />
            <span className='min-req-email'>
              უნდა მთავრდებოდეს @redberry.ge-თი
            </span>

            <span
              className={
                emailValid
                  ? "success-icon-email success-with-icon"
                  : "unsuccess-icon-email unsuccess-with-icon"
              }
            >
              {emailValid ? <CheckCircleIcon /> : <ReportProblemIcon />}
            </span>
            {/* <span className='unsuccess-icon-email'>
            <ReportProblemIcon />
          </span> */}
          </div>

          <div className='mobile-number-container'>
            <label className='mobile-number-label'>მობილურის ნომერი</label>
            <input
              value={number}
              onChange={(e) => handleNumberChange(e)}
              required
              type='text'
              className={
                numberValid
                  ? "mobile-number-input success"
                  : "mobile-number-input unsuccess"
              }
              placeholder='+995 551 12 34 56'
            />
            <span className='mobile-number-req'>
              უნდა აკმაყოფილებდეს მობილური ნომრის ქართულ ფორმატს
            </span>

            <span
              className={
                numberValid
                  ? "success-icon-number success-with-icon"
                  : "unsuccess-icon-number unsuccess-with-icon"
              }
            >
              {numberValid ? <CheckCircleIcon /> : <ReportProblemIcon />}
            </span>
            {/* <span className='unsuccess-icon-number'>
            <ReportProblemIcon />
          </span> */}
          </div>

          <button className='next-btn'>
            <span className='next-span' onClick={handleNextButtonClick}>
              შემდეგი
            </span>
          </button>
        </form>
      </div>
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
            <p className='number-output'>{formatedNumber}</p>
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
      </div>
    </div>
  );
};

export default Personal;
