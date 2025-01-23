import React from 'react';
import Card from './components/Card';
import TraininProgramme from "./components/TrainingProgramme";
import DashBoard from "./components/DashBoard";
import Text from "./components/Text";
import "../styles/style.css";
import Ongoing from './components/Ongoing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animate from './components/Animate';
import Otppage from './components/Otppage';
import LoginPage from './components/LoginPage';
const App = () => {
  return (
    <div>
      <div>hello</div>
      {/* <Card />
      <Text /> 
      <TraininProgramme /> 
      <DashBoard />   */} 
      {/* <Ongoing />   */}

      <Router>
      <Routes>
        <Route path="/" element={<Animate />} />
        <Route path="/another-page" element={<LoginPage />} />
        <Route path="/otp-page" element={<Otppage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
