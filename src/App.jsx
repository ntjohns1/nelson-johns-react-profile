import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import WelcomeSection from './components/WelcomSection';
import Home from './pages/Home';
import LessonsList from './components/LessonsList';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex',
        minHeight: '100vh',
        background: 'linear-gradient(to top, var(--midnight-green) 0%, 5%, var(--rich-black) 100%)',
        position: 'relative',
        zIndex: 0,
      }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <WelcomeSection />
          <Box id="home" sx={{ minHeight: '100vh', py: 4 }}>
            <Home />
          </Box>
          <Box id="lessons" sx={{ minHeight: '50vh', py: 4, px: 4 }}>
            <LessonsList />
          </Box>
          {/* Other sections will be added here */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;