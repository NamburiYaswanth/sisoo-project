import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Settings from './Settings';

const Notification = () => {
  return (
    <Settings>
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
    </Settings>
  );
}

export default Notification;
