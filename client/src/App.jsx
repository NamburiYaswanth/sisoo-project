import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import DashBoard from './components/DashBoard';
import Settings from './components/Settings';
import Text from './components/Text';
import LoginPage from './components/pages/LoginPages';
import Otppage from './components/pages/Otppage';
import Animate from "./components/Animate"
import TrainingProgramme from './components/TrainingProgramme';
import Ongoing from './components/Ongoing';
import "../styles/style.css";
// import TrainerCard from './components/TrainerCard';
// import Profile from './components/Profile';

const App = () => {
  return ( 
    <div>
      <Router>
        <DashBoard />
      <Routes>

         <Route path="/" element={<Animate />} />
         <Route path="/text" element={<Text />} />
         <Route path="/card" element={<Card />} />
         <Route path="/traning-programme" element={<TrainingProgramme />} />
         <Route path="/ongoing" element={<Ongoing />} />
         <Route path="/login-page" element={<LoginPage />} />
         <Route path="/otp-page" element={<Otppage />} />
         <Route path="/settings-page" element={<Settings />} />
        <Route path="/" element={<Animate />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/otp-page" element={<Otppage />} />
        {/* <Route  path  = "/trainers" element= {<TrainerCard />} />
        <Route path = "/profile"  element = {<Profile />} /> */}

      </Routes>
    </Router>
    </div>
  );
}

export default App;
