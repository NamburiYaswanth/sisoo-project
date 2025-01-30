import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card"
import Text from "./components/Text"
import LoginPage from "./components/pages/LoginPages";
import Otppage from "./components/pages/Otppage";
import Ongoing from "./components/Ongoing";
import "../styles/style.css";
import TrainingResources from "./components/pages/TrainingResources";
import Messages from "./components/pages/Messages";
import DashBoardPgae from "./components/pages/DashBoardPgae";
import TrainerList from "./components/pages/TrainerList";
import Requirement from "./components/pages/Requirement";
import Mytraininng from "./components/pages/Mytraininng";
import TrainersDirectory from "./components/pages/TrainersDirectory";
import ProposalManagment from "./components/pages/ProposalManagment";
import BillingPayment from "./components/pages/BillingPayment";
import TraininngAnalytics from "./components/pages/TraininngAnalytics";
import Layout from "./components/Layout";
import Animate from "./components/Animate"
import TrainingProgramme from "./components/TrainingProgramme"
import Settings from "./components/pages/Settings";
import Settingscompo from "./components/Settings";
import AccountPrefrence from "./components/pages/AccountPrefrence";
import HelpandSupport from "./components/HelpandSupport";
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
      <Router>
        <Routes>
          <Route path="/" element={<Animate />} />
          <Route path="/text" element={<Text />} />
          <Route path="/card" element={<Card />} />
          <Route path="/traning-programme" element={<TrainingProgramme />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/settings-page" element={<Settings />} />
          <Route path="/" element={<Animate />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/otp-page" element={<Otppage />} />
          <Route path="/dashboard" element={<Layout />} />
          <Route path="/dashboard-page" element={<DashBoardPgae />} />
          <Route path="/trainer-list" element={<TrainerList />} />
          <Route path="/post-requirements" element={<Requirement />} />
          <Route path="/my-training-programs" element={<Mytraininng />} />
          <Route path="/trainers-directory" element={<TrainersDirectory />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/proposal-management" element={<ProposalManagment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing-payments" element={<BillingPayment />} />
          <Route path="/training-analytics" element={<TraininngAnalytics />} />
          <Route path="/training-resource" element={<TrainingResources />} />
          <Route path="/sett" element={<Settingscompo />} />
          <Route path="/preference" element={<AccountPrefrence />} />
          <Route path="/help" element={<HelpandSupport />} />

        </Routes>
      </Router>
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
