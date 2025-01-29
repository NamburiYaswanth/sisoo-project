import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Settings from './Settings';

const LoginandSecurity = () => {
  return (
    <Settings>
      <div className="settings-section">
        <h3>Account Access</h3>
        <div className="settings-item">
          <p>Mobile Number</p>
          <p className="settings-value">8825984044<span className='arr-icon1'><IoIosArrowForward /></span>
          </p>
        </div>
        <div className="settings-item">
          <p>Activated Devices 
          </p>
          <p className="settings-value">02<span className='arr-icon1'><IoIosArrowForward /></span>
          </p>
        </div>
        <div className="settings-item">
          <p>Close Account</p>
        </div>
      </div>
    </Settings>
  );
}

export default LoginandSecurity;
