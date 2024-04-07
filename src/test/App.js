import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import UserInfo from './UserInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
