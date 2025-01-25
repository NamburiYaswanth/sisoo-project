import "./TrainerCard.css";
import img from "../../assets/git.png"
// import bookmark from "../../assets/bookmark.png"
import { useState } from "react";
const TrainerCard = () => {
    const [ setHire] = useState('Hire')
    const [toggle ,setToggle] = useState(true)
    const afterClick = () =>{
        setHire('Request Sent')
        setToggle((pre) => !pre)
      }
  return (
    <div className="trainer-card">
      <div className="card-header">
        <img
          className="profile-picture"
          src={img}
          alt="Profile"
        />
        <div className="trainer-info">
          <h4 className="trainer-name">Wills</h4>
          <p className="trainer-role">UIUX Trainer</p>
        </div>
        <button onClick={afterClick} className="hire-button">{toggle ? 'Hire' : 'Message Sent'}</button>
        <div className="bookmark">🔖</div>
        <div className="menu-icon">⋮</div>
      </div>
      <div className="card-body">
        <h5 className="training-title">UIUX Training</h5>
        <p className="training-description">
          I am willing to share my knowledge with my juniors in the UIUX domain
          at a lower price. If you are interested, just hire me. I will give
          you an exciting future.
        </p>
        <p className="budget">
          <strong>Budget - </strong><span className="price"> ₹ 1000 - ₹ 5000</span>
        </p>
        <p className="mode">
          <strong>Mode of Training - </strong> <span className="price">Offline</span>
        </p>
      </div>
      <div className="card-footer">
        <button className="action-button">👍</button>
        <button className="action-button">💬</button>
        <button className="action-button">📤</button>
      </div>
    </div>
  );
};

export default TrainerCard;
