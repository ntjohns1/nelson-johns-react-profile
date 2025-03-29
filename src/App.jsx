import React from 'react';
import Sidebar from './components/Sidebar';
import WelcomeSection from './components/WelcomSection';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <WelcomeSection />
    </>
  );
};

export default App;