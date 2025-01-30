import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Settings from './Settings';

const Visibility = () => {
  return (
    <Settings>
        <div className="settings-section">
            <h3>Display mode</h3>
            <p>mode</p>
        </div>
       <div className="settings-section">
        <h3>Visibility Of Your Profile</h3>
        <div className="settings-item">
          <p>Profile Image</p>
          <IoIosArrowForward />
        </div>
        <div className="settings-item">
          <p>Banner Image</p>
          <IoIosArrowForward />
        </div>
        <div className="settings-item">
          <p>Certifications Informations</p>
          <IoIosArrowForward />
        </div>
        <div className="settings-item">
          <p>Available Dates</p>
          <IoIosArrowForward />
        </div>
      </div>
    </Settings>
  );
}

export default Visibility;
