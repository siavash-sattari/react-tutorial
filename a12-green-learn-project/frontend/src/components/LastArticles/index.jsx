import React from 'react';
import ArticleBox from '../ArticleBox';
import SectionHeader from '../SectionHeader';
import './LastArticles.css';

const LastArticles = () => {
  return (
    <section className='articles'>
      <div className='container'>
        <SectionHeader title='جدیدترین مقاله ها' desc='پیش به سوی ارتقای دانش' btnTitle='تمامی مقاله ها' />
        <div className='articles__content'>
          <div className='row'>
            <ArticleBox
              title='آشنایی با قابلیت های اخیر جاوااسکریپت'
              image='images/blog/3.jpeg'
              desc='گمان نمی‌کنم هیچ زبان برنامه نویسی پویایی جاوا اسکریپت را در بین زبان‌های برنامه نویسی مختلف داشته باشد. جامعه کاربری بزرگ و فعال آن باعث شده‌اند تا ...'
            />
            <ArticleBox
              title='آشنایی با قابلیت های اخیر جاوااسکریپت'
              image='images/blog/3.jpeg'
              desc='گمان نمی‌کنم هیچ زبان برنامه نویسی پویایی جاوا اسکریپت را در بین زبان‌های برنامه نویسی مختلف داشته باشد. جامعه کاربری بزرگ و فعال آن باعث شده‌اند تا ...'
            />
            <ArticleBox
              title='آشنایی با قابلیت های اخیر جاوااسکریپت'
              image='images/blog/3.jpeg'
              desc='گمان نمی‌کنم هیچ زبان برنامه نویسی پویایی جاوا اسکریپت را در بین زبان‌های برنامه نویسی مختلف داشته باشد. جامعه کاربری بزرگ و فعال آن باعث شده‌اند تا ...'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastArticles;
