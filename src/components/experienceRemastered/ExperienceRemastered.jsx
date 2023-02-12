import React, { useState } from "react";
import "./experienceRemastered.css";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ExperienceForm from "../experienceForm/ExperienceForm";
import ExperienceFormOutput from "../experienceFormOutput/ExperienceFormOutput";
import { useNavigate } from "react-router";

const ExperienceRemastered = () => {
  const [inputs, setInputs] = useState(() => {
    const savedInputs = JSON.parse(localStorage.getItem("experienceInputs"));
    return (
      savedInputs || [
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: "",
        },
      ]
    );
  });

  const [validationPosition, setValidationPosition] = useState(0);
  const [validationEmployer, setValidationEmployer] = useState(0);
  const [validationStartDate, setValidationStartDate] = useState(0);
  const [validationDueDate, setValidationDueDate] = useState(0);
  const [validationDescription, setValidationDescription] = useState(0);

  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [description, setDescription] = useState("");
  const [forms, setForms] = useState([]);
  // const [inputs, setInputs] = useState([
  //   {
  //     position: "",
  //     employer: "",
  //     start_date: "",
  //     due_date: "",
  //     description: "",
  //   },
  // ]);

  const [renderCount, setRenderCount] = useState(0);

  const handleAddExperience = () => {
    // setForms([...forms, "counter"]);
    setInputs([
      ...inputs,
      {
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: "",
      },
    ]);
  };
  const handleChevronLeft = () => {
    localStorage.clear();
    navigate("/");
  };

  const navigate = useNavigate();
  const handleNextButton = () => {
    // if validated
    const experienceData = JSON.stringify(inputs);
    // Store the data in localStorage
    localStorage.setItem("formData", experienceData);

    // navigate to the education page !!
    if (
      validationDescription === 1 &&
      validationDueDate === 1 &&
      validationEmployer === 1 &&
      validationPosition === 1 &&
      validationStartDate === 1
    ) {
      navigate("/education");
    }
  };

  return (
    <div>
      <div className='layout-flex-container-remastered'>
        <div className='forms-container-remastered'>
          <div className='experience-header-remastered'>
            <p className='experience-header-text-remastered'>გამოცდილება</p>
            <p className='experience-header-page-number-remastered'>2/3</p>
          </div>
          <ChevronLeftOutlinedIcon
            onClick={handleChevronLeft}
            className='back-chevron-left-remastered'
          />

          <div className='bottom-line-for-header-remastered'></div>

          {/* <ExperienceForm
            position={position}
            setPosition={setPosition}
            employer={employer}
            setEmployer={setEmployer}
            startingDate={startingDate}
            setStartingDate={setStartingDate}
            endingDate={endingDate}
            setEndingDate={setEndingDate}
            description={description}
            setDescription={setDescription}
          /> */}

          {inputs.map((form, index) => {
            return (
              <ExperienceForm
                key={index}
                index={index}
                inputs={inputs}
                setInputs={setInputs}
                position={position}
                setPosition={setPosition}
                employer={employer}
                setEmployer={setEmployer}
                startingDate={startingDate}
                setStartingDate={setStartingDate}
                endingDate={endingDate}
                setEndingDate={setEndingDate}
                description={description}
                setDescription={setDescription}
                validationPosition={validationPosition}
                setValidationPosition={setValidationPosition}
                validationEmployer={validationEmployer}
                setValidationEmployer={setValidationEmployer}
                validationStartDate={validationStartDate}
                setValidationStartDate={setValidationStartDate}
                validationDueDate={validationDueDate}
                setValidationDueDate={setValidationDueDate}
                validationDescription={validationDescription}
                setValidationDescription={setValidationDescription}
              />
            );
          })}
          <button
            className='add-more-experience-remastered'
            onClick={handleAddExperience}
          >
            მეტი გამოცდილების დამატება
          </button>
          <button className='go-back-button-remastered'>უკან</button>
          <button
            className='go-next-button-remastered'
            onClick={handleNextButton}
          >
            შემდეგი
          </button>
        </div>
        <div className='outputs-all'>
          <ExperienceFormOutput
            inputs={inputs}
            forms={forms}
            position={inputs?.position}
            employer={inputs?.employer}
            startingDate={inputs?.start_date}
            endingDate={inputs?.due_date}
            description={inputs?.description}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceRemastered;
