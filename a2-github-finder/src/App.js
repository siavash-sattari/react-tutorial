import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GithubProvider } from './context/GithubContext';
import { AlertProvider } from './context/AlertContext';

import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Alert from './layout/Alert';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
