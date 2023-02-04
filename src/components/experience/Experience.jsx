import React from "react";
import "./experience.css";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
const Experience = () => {
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
      <div className='position-container'>
        <p className='position-text'>თანამდებობა</p>
        <input
          className='position-input'
          placeholder='დეველოპერი, დიზაინერი, ა.შ'
          type='text'
        />
        <p className='position-min-req'>მინიმუმ 2 სიმბოლოსგან</p>
      </div>

      <div className='employer-container'>
        <p className='employer-text'>დამსაქმებელი</p>
        <input
          placeholder='დამსაქმებელი'
          className='employer-input'
          type='text'
        />
        <p className='employer-min-req'>მინიმუმ 2 სიმბოლოსგან</p>
      </div>

      <div className='starting-date-container'>
        <p className='starting-date-text'>დაწყების რიცხვი</p>
        <input
          className='starting-date-input'
          type='date'
          placeholder='MM / DD / YYYY'
        />
      </div>
      <div className='ending-date-container'>
        <p className='ending-date-text'>დამთავრების რიცხვი</p>
        <input
          className='ending-date-input'
          placeholder='MM / DD / YYYY'
          type='date'
        />
      </div>

      <div className='description-container'>
        <p className='description-text'>აღწერა</p>
        <textarea
          className='description-input'
          placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
          type='text'
        />
      </div>
      <div className='bottom-border'></div>

      <button className='add-more-experience-button'>
        მეტი გამოცდილების დამატება
      </button>

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
