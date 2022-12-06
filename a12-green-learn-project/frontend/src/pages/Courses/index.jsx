import React from 'react';
import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import CourseBox from '../../components/CourseBox';
import './Courses.css';

const Courses = () => {
  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: 'خانه', to: '' },
          {
            id: 2,
            title: 'تمامی دوره ها',
            to: 'courses'
          }
        ]}
      />

      <section class='courses'>
        <div class='container'>
          <div class='courses-content'>
            <div class='container'>
              <div class='row'>
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>

          <div class='courses-pagination'>
            <ul class='courses__pagination-list'>
              <li class='courses__pagination-item'>
                <a href='#' class='courses__pagination-link'>
                  <i class='fas fa-long-arrow-alt-right courses__pagination-icon'></i>
                </a>
              </li>
              <li class='courses__pagination-item'>
                <a href='#' class='courses__pagination-link courses__pagination-link--active'>
                  1
                </a>
              </li>
              <li class='courses__pagination-item'>
                <a href='#' class='courses__pagination-link'>
                  2
                </a>
              </li>
              <li class='courses__pagination-item'>
                <a href='#' class='courses__pagination-link'>
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;
