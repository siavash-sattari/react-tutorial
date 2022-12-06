import React from 'react';
import ServiceBox from '../ServiceBox';
import SectionHeader from '../SectionHeader';
import './Services.css';

const Services = () => {
  return (
    <div className='about-us'>
      <div className='container'>
        <SectionHeader title='ما چه کمکی بهتون میکنیم؟' desc='از اونجایی که آکادمی آموزشی گرین لرن یک آکادمی خصوصی هست' />
        <div className='container'>
          <div className='row'>
            <ServiceBox icon='far fa-copyright' title='دوره های اختصاصی' desc='با پشتیبانی و کیفیت بالا ارائه میده !' />
            <ServiceBox icon='fa fa-leaf' title='اجازه تدریس' desc='به هر مدرسی رو نمیده. چون کیفیت براش مهمه !' />
            <ServiceBox
              icon='fa fa-gem'
              title='دوره پولی و رایگان'
              desc='براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده'
            />
            <ServiceBox
              icon='fa fa-crown'
              title='اهمیت به کاربر'
              desc='اولویت اول و آخر آکادمی آموزش برنامه نویسی گرین لرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
