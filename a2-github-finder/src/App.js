import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main>Content</main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
