import React, { useState } from "react";
import "./experienceRemastered.css";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ExperienceForm from "../experienceForm/ExperienceForm";
import ExperienceFormOutput from "../experienceFormOutput/ExperienceFormOutput";

const ExperienceRemastered = () => {
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [description, setDescription] = useState("");

  const [forms, setForms] = useState([]);

  const handleAddExperience = () => {
    setForms([...forms, "counter"]);
  };
  // console.log(forms);
  return (
    <div>
      <div className='layout-flex-container-remastered'>
        <div className='forms-container-remastered'>
          <div className='experience-header-remastered'>
            <p className='experience-header-text-remastered'>გამოცდილება</p>
            <p className='experience-header-page-number-remastered'>2/3</p>
          </div>
          <ChevronLeftOutlinedIcon className='back-chevron-left-remastered' />

          <div className='bottom-line-for-header-remastered'></div>

          <ExperienceForm
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
          />

          {forms.map((form, index) => {
            return (
              <ExperienceForm
                key={index}
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
          <button className='go-next-button-remastered'>შემდეგი</button>
        </div>
        <div className='outputs-all'>
          <ExperienceFormOutput
            forms={forms}
            position={position}
            employer={employer}
            startingDate={startingDate}
            endingDate={endingDate}
            description={description}
          />
          {/* {forms.map((outForm, index) => {
            return (
              <ExperienceFormOutput
                forms={forms}
                key={index}
                position={position}
                employer={employer}
                startingDate={startingDate}
                endingDate={endingDate}
                description={description}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default ExperienceRemastered;
