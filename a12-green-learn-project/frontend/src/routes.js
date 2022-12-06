import Index from './pages/Index';
import CourseInfo from './pages/CourseInfo';
import Category from './pages/Category';
import ArticleInfo from './pages/ArticleInfo';

const routes = [
  { path: '/', element: <Index /> },
  { path: '/course-info/:courseName', element: <CourseInfo /> },
  { path: '/category-info/:categoryName', element: <Category /> },
  { path: '/article-info/:articleName', element: <ArticleInfo /> }
];

export default routes;
