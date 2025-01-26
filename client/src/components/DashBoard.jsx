import React from "react";
import { Link, Routes, Route, BrowserRouter as Router, Outlet } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import Siscoo from "../assets/sissoo1.svg";
import {
  FaTachometerAlt,
  FaUserTie,
  FaClipboardList,
  FaClipboardCheck,
  FaBook,
  FaEnvelope,
  FaFileAlt,
  FaCog,
  FaCreditCard,
  FaChartLine,
  FaFolderOpen,
} from "react-icons/fa";
import DashBoardPgae from "./pages/DashBoardPgae";
import AccountPrefrence from "./pages/AccountPrefrence";
import TrainerList from "./pages/TrainerList";
import Requirement from "./pages/Requirement";
import Mytraininng from "./pages/Mytraininng";
import TrainersDirectory from "./pages/TrainersDirectory";
import Messages from "./pages/Messages";
import ProposalManagment from "./pages/ProposalManagment";
import Settings from "./pages/Settings";
import BillingPayment from "./pages/BillingPayment";
import TraininngAnalytics from "./pages/TraininngAnalytics";
import TrainingResources from "./pages/TrainingResources";

const DashBoard = () => {
  return (
    <div className="main">
      <div className="header">
        <div>
          <img src={Siscoo} />
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Write something here...."
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="not-icon">
          <MdOutlineNotifications size={30} />
        </div>
        <div className="profile-section">
          <div>
            <img
              className="profile"
              src="https://media.istockphoto.com/id/2158247728/photo/wild-male-bengal-tiger-or-panthera-tigris-hiding-in-grass-and-stalking-his-prey-in-golden.webp?a=1&b=1&s=612x612&w=0&k=20&c=8qHEx5AVV36F63vqldHoERkc5czvFo_37joaK-s0YqY="
            />
          </div>
          <div className="profile-name">
            <span>yaswanth</span>
            <span>yaswanth</span>
          </div>
        </div>
      </div>
      <div className="total">
      <div className="left-sidebar">
      <span className="side-icon">
        <Link to="/dashboard-page" className="side-icon">
          <FaTachometerAlt />
          <p>Dashboard</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/trainer-list" className="side-icon">
          <FaUserTie /> <p>Trainer list</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/post-requirements" className="side-icon">
          <FaClipboardList />
          <p>Post a Requirements</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/my-training-programs" className="side-icon">
          <FaClipboardCheck />
          <p>My Training Program's</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/trainers-directory" className="side-icon">
          <FaBook />
          <p>Trainers Directory</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/messages" className="side-icon">
          <FaEnvelope />
          <p>Messages</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/proposal-management" className="side-icon">
          <FaFileAlt />
          <p>Proposal Management</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/settings" className="side-icon">
          <FaCog />
          <p>Settings</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/billing-payments" className="side-icon">
          <FaCreditCard />
          <p>Billing & Payments</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/training-analytics" className="side-icon">
          <FaChartLine />
          <p>Training Analytics</p>
        </Link>
      </span>
      <span className="side-icon">
        <Link to="/training-resource" className="side-icon">
          <FaFolderOpen />
          <p>Training Resource</p>
        </Link>
      </span>
    </div>
      <div className="left-rightside">
            <Routes>
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
             

            </Routes>
            <Outlet />
          </div>
    </div>
    </div>
  );
};

export default DashBoard;
