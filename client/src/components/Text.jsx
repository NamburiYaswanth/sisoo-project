import { FaArrowLeft } from 'react-icons/fa';
import "./../stylesall/text.css";
const Text = () => {
  return (
    <div className="welcome-container">
      <div className="back-icon">
        <FaArrowLeft />
      </div>
      <h1 className="welcome-title">
        Welcome, Employers!
        <br />
        <span>Elevate Team Excellence</span>
        <br />
        <span>
          with <span className="highlight">sissoo Training</span>
        </span>
      </h1>
    </div>
  );
};

export default Text;
