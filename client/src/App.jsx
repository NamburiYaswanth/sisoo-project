import "../styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animate from './components/Animate';
import Otppage from './components/Otppage';
import LoginPage from './components/LoginPage';
import TrainerCard from './pages/TrainerCard/TrainerCard'
import Profile from './pages/Profile/Profile';
const App = () => {
  return (
    <div>
      <div>hello</div>
      {/* <Card />
      <Text /> 
      <TraininProgramme /> 
      <DashBoard />   */} 
      {/* <Ongoing />   */}
     <TrainerCard /> 
      <Router>
      <Routes>
        <Route path="/" element={<Animate />} />
        <Route path="/another-page" element={<LoginPage />} />
        <Route path="/otp-page" element={<Otppage />} />
        <Route  path  = "/trainers" element= {<TrainerCard />} />
        < Route path = "/profile"  element = {<Profile />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
