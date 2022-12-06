import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import './Login.css';

const Login = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <section className='login-register'>
        <div className='login'>
          <span className='login__title'>ورود به حساب کاربری</span>
          <span className='login__subtitle'>خوشحالیم دوباره میبینیمت دوست عزیز :)</span>
          <div className='login__new-member'>
            <span className='login__new-member-text'>کاربر جدید هستید؟</span>
            <Link className='login__new-member-link' to='/register'>
              ثبت نام
            </Link>
          </div>
          <form action='#' className='login-form'>
            <div className='login-form__username'>
              <input className='login-form__username-input' type='text' placeholder='نام کاربری یا آدرس ایمیل' />
              <i className='login-form__username-icon fa fa-user'></i>
            </div>
            <div className='login-form__password'>
              <input className='login-form__password-input' type='text' placeholder='رمز عبور' />
              <i className='login-form__password-icon fa fa-lock-open'></i>
            </div>
            <button className='login-form__btn' type='submit'>
              <i className='login-form__btn-icon fas fa-sign-out-alt'></i>
              <span className='login-form__btn-text'>ورود</span>
            </button>
            <div className='login-form__password-setting'>
              <label className='login-form__password-remember'>
                <input className='login-form__password-checkbox' type='checkbox' />
                <span className='login-form__password-text'>مرا به خاطر داشته باش</span>
              </label>
              <label className='login-form__password-forget'>
                <a className='login-form__password-forget-link' href='#'>
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className='login__des'>
            <span className='login__des-title'>سلام کاربر محترم:</span>
            <ul className='login__des-list'>
              <li className='login__des-item'>لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید.</li>
              <li className='login__des-item'>ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.</li>
              <li className='login__des-item'>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
