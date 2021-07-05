import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './components/pages/bio';
import Work from './components/pages/work';
import contactForm from './components/pages/contactForm';
import Resume from './components/pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';

library.add(fab);

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

  

