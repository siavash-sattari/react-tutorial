import Index from './pages/Index';
import CourseInfo from './pages/CourseInfo';
import Category from './pages/Category';
import ArticleInfo from './pages/ArticleInfo';
import Courses from './pages/Courses';

const routes = [
  { path: '/', element: <Index /> },
  { path: '/course-info/:courseName', element: <CourseInfo /> },
  { path: '/category-info/:categoryName', element: <Category /> },
  { path: '/article-info/:articleName', element: <ArticleInfo /> },
  { path: '/courses', element: <Courses /> }
];

export default routes;
