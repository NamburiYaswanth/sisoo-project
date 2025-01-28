import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animate from "./pages/Animate";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
// import Card from './components/Card';
// import DashBoard from './components/DashBoard';
// import Settings from './components/Settings';
// import Text from './components/Text';
//
// import TrainingProgramme from './components/TrainingProgramme';
// import Ongoing from './components/Ongoing';
// import TrainerCard from './components/TrainerCard';
// import Profile from './components/Profile';

import "../styles/style.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Animate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          {/* <Route path="/text" element={<Text />} />
          <Route path="/card" element={<Card />} />
          <Route path="/traning-programme" element={<TrainingProgramme />} />
          <Route path="/ongoing" element={<Ongoing />} />

         
          <Route path="/settings-page" element={<Settings />} />
          <Route path="/" element={<Animate />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/otp-page" element={<Otppage />} /> */}
          {/* <Route  path  = "/trainers" element= {<TrainerCard />} />
        <Route path = "/profile"  element = {<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
