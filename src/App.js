import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './pages/bio';
import Work from './pages/work';
import contactForm from './pages/contactForm';
import Resume from './pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
  
export default function App() {
  return (
    <Router>
      <div className ="sec-div">
        <Header />
        <Switch>
          <Route path='/' exact component={Bio} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={contactForm} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

  

