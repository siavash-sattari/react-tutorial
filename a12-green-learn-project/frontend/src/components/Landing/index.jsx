import React from 'react';
import Typewriter from 'typewriter-effect';
import { CourseIcon, StudentIcon, TimeIcon } from '../icons';
import LandingCounter from '../LandingCounter';
import './Landing.css';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='container'>
        <h1 className='landing__title'>
          <Typewriter
            onInit={typeWriter => {
              typeWriter
                .typeString('ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم!')
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString('گرین لرن - آکادمی خصوصی برنامه نویسی')
                .start()
                .pauseFor(2000);
            }}
            options={{
              loop: true
            }}
          />
        </h1>
        <h2 className='landing__subtitle'>با آکادمی گرین لرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.</h2>
        <div className='landing__searchbar'>
          <input type='text' className='landing__searchbar-input' placeholder='چه چیزی دوست داری یاد بگیری ...' />
          <button className='landing__searchbar-btn' type='submit'>
            <i className='fas fa-search landing__searchbar-icon'></i>
          </button>
        </div>
        <div className='landing-status'>
          <div className='landing-status__item'>
            <StudentIcon />
            <LandingCounter count={1071} />
            <span className='landing-status__text'>کاربر توی گرین لرن ثبت نام کردن</span>
          </div>

          <div className='landing-status__item'>
            <CourseIcon />
            <LandingCounter count={90} />
            <span className='landing-status__text'>دوره آموزشی داریم</span>
          </div>

          <div className='landing-status__item'>
            <TimeIcon />
            <LandingCounter count={2418} />
            <span className='landing-status__text'>دقیقه آموزش تولید کردیم</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
