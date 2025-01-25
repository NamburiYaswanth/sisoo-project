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

      <div className="left-sidebar">
        <span className="side-icon">
          <p>
            <FaTachometerAlt />
          </p>
          <p> Dashboard</p>
        </span>
        <span className="side-icon">
          <p>
            <FaUserTie />{" "}
          </p>
          <p> Trainer list</p>
        </span>
        <span className="side-icon">
          <p>
            <FaClipboardList />
          </p>
          <p> Post a Requirements</p>
        </span>
        <span className="side-icon">
          <p>
            <FaClipboardCheck />
          </p>
          <p> My Training Programs</p>
        </span>
        <span className="side-icon">
          <p>
            <FaBook />
          </p>
          <p> Trainers Directory</p>
        </span>
        <span className="side-icon">
          <p>
            <FaEnvelope />
          </p>
          <p> Messages</p>
        </span>
        <span className="side-icon">
          <p>
            <FaFileAlt />
          </p>
          <p>Proposal Management</p>
        </span>
        <span className="side-icon">
          <p>
            <FaCog />
          </p>
          <p> Settings</p>
        </span>
        <span className="side-icon">
          <p>
            <FaCreditCard />
          </p>
          <p> Billing & Payments</p>
        </span>
        <span className="side-icon">
          <p>
            <FaChartLine />{" "}
          </p>
          <p> Training Analytics</p>
        </span>
        <span className="side-icon">
          <p>
            <FaFolderOpen />{" "}
          </p>
          <p>Training Resource</p>
        </span>
      </div>
    </div>
  );
};

export default DashBoard;
