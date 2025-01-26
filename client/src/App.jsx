import React from 'react';
import Card from './components/Card';
import TraininProgramme from "./components/TrainingProgramme";
import DashBoard from "./components/DashBoard";
import Text from "./components/Text";
import "../styles/style.css";
import Ongoing from './components/Ongoing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animate from './components/Animate';
import Settings from './components/Settings';
import LoginPage from './components/pages/LoginPages';
import Otppage from './components/pages/Otppage';
const App = () => {
  return ( 
    <div>
      <Router>
        <DashBoard />
      <Routes>
         <Route path="/" element={<Animate />} />
         <Route path="/text" element={<Text />} />
         <Route path="/card" element={<Card />} />
         <Route path="/traning-programme" element={<TraininProgramme />} />
         <Route path="/ongoing" element={<Ongoing />} />
         <Route path="/login-page" element={<LoginPage />} />
         <Route path="/otp-page" element={<Otppage />} />
         <Route path="/settings-page" element={<Settings />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
