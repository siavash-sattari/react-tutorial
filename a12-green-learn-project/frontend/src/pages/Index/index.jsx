import React from 'react';
import Header from '../../components/Header';
import ListOfCourses from '../../components/ListOfCourses';
import Services from '../../components/Services';
import './Index.css';

const Index = () => {
  return (
    <div>
      <Header />
      <ListOfCourses />
      <Services />
    </div>
  );
};

export default Index;
