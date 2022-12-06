import React from 'react';
import './CourseDetailBox.css';

const CourseDetailBox = ({ title, text, icon }) => {
  return (
    <div className='col-4'>
      <div className='course-boxes__box'>
        <div className='course-boxes__box-right'>
          <i className={`course-boxes__box-right-icon ${icon}`}></i>
        </div>
        <div className='course-boxes__box-left'>
          <span className='course-boxes__box-left-title'>{title}</span>
          <span className='course-boxes__box-left--subtitle'>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailBox;
