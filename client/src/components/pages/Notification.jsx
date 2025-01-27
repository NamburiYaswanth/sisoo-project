import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Notification = () => {
  return (
    <div>
       <div className="settings-section">
        <h3>Notification you Receive</h3>
        <div className="settings-item">
          <p>Messages</p>
          <IoIosArrowForward />
        </div>
        <div className="settings-item">
          <p>Update Profile</p>
          <IoIosArrowForward />
        </div>
        <div className="settings-item">
          <p>News & Reports</p>
          <IoIosArrowForward />
        </div>
        <div className="settings-item">
          <p>Proposal</p>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default Notification;
