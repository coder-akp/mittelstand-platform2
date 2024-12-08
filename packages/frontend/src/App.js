import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Box, Typography, AppBar, Toolbar, Button, CssBaseline, Menu, MenuItem } from '@mui/material';  // Material UI components
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import './App.css';  // Importing the CSS file

function App() {
  const { t } = useTranslation();  // Access the translation function
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleSolutionsClick = (event) => {
    setSolutionsAnchorEl(event.currentTarget);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSolutionsAnchorEl(null);
    setServicesAnchorEl(null);
  };

  return (
    <Router>
      <div className="App">
        <CssBaseline /> {/* Global reset for styles */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">NextGen Succession</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" onClick={handleSolutionsClick}>Solutions</Button>
            <Menu
              anchorEl={solutionsAnchorEl}
              open={Boolean(solutionsAnchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Cloud Services</MenuItem>
              <MenuItem onClick={handleClose}>Consulting</MenuItem>
              <MenuItem onClick={handleClose}>Support</MenuItem>
            </Menu>
            <Button color="inherit" onClick={handleServicesClick}>Services</Button>
            <Menu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Service 1</MenuItem>
              <MenuItem onClick={handleClose}>Service 2</MenuItem>
              <MenuItem onClick={handleClose}>Service 3</MenuItem>
            </Menu>
            <Button color="inherit" href="/about">About</Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            {t('Mittelstand Succession Planning')}
          </Typography>
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;