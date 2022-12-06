import React from 'react';
import Header from '../../components/Header';
import LastArticles from '../../components/LastArticles';
import ListOfCourses from '../../components/ListOfCourses';
import Services from '../../components/Services';
import './Index.css';

const Index = () => {
  return (
    <div>
      <Header />
      <ListOfCourses />
      <Services />
      <LastArticles />
    </div>
  );
};

export default Index;
