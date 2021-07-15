import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Bio from './pages/bio';
import Work from './pages/work';
import ContactForm from './pages/contactForm';
import Resume from './pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


import './App.css';
import { useState } from 'react';


library.add(fab);

export default function App() {

  const [ currentPage, setCurrentPage] = useState('/')

  const renderPage = () => {
    if (currentPage === '/') {
      return <Bio />;
    }
    if (currentPage === 'work') {
      return <Work />;
    }
    if (currentPage === 'contact') {
      return <ContactForm />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    return <Bio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );

};



