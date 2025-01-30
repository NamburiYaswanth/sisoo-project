
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import Siscoo from "../assets/sissoo1.svg";
import {
  FaTachometerAlt,
  FaUserTie,
  FaClipboardList,
  FaClipboardCheck,
  FaBook,
  FaEnvelope,
  FaCog,
  FaCreditCard,
  FaChartLine,
  FaFolderOpen,
} from "react-icons/fa";
import "./../stylesall/layout.css";

const sidebarLinks = [
  { to: "/dashboard-page", icon: <FaTachometerAlt />, label: "Dashboard" },
  { to: "/trainer-list", icon: <FaUserTie />, label: "Trainer list" },
  { to: "/post-requirements", icon: <FaClipboardList />, label: "Post a Requirements" },
  { to: "/my-training-programs", icon: <FaClipboardCheck />, label: "My Training Program's" },
  { to: "/trainers-directory", icon: <FaBook />, label: "Trainers Directory" },
  { to: "/messages", icon: <FaEnvelope />, label: "Messages" },
  { to: "/settings", icon: <FaCog />, label: "Settings" },
  { to: "/billing-payments", icon: <FaCreditCard />, label: "Billing & Payments" },
  { to: "/training-analytics", icon: <FaChartLine />, label: "Training Analytics" },
  { to: "/training-resource", icon: <FaFolderOpen />, label: "Training Resource" },
];

const Layout = ({ children }) => {
  return (
    <div className="main">
      <div className="header">
        <img src={Siscoo} alt="Logo" />
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Write something here...." />
          <span className="search-icon">🔍</span>
        </div>
        <MdOutlineNotifications size={30} className="not-icon" />
        <div className="profile-section">
          <img
            className="profile"
            src="https://media.istockphoto.com/id/2158247728/photo/wild-male-bengal-tiger-or-panthera-tigris-hiding-in-grass-and-stalking-his-prey-in-golden.webp?a=1&b=1&s=612x612&w=0&k=20&c=8qHEx5AVV36F63vqldHoERkc5czvFo_37joaK-s0YqY="
            alt="Profile"
          />
          <div className="profile-name">
            <span>yaswanth</span>
            <span>yaswanth</span>
          </div>
        </div>
      </div>
      <div className="total">
        <div className="left-sidebar">
          {sidebarLinks.map(({ to, icon, label }) => (
            <Link key={to} to={to} className="side-icon">
              {icon}
              <p>{label}</p>
            </Link>
          ))}
        </div>
        <div className="left-rightside">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
