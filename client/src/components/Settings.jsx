import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
const Settings = () => {
  return (
    <div className='set-main'>
      <div className='part1-main'>
           <button className='set-btn'>Account preference</button>
           <button className='set-btn'>Login and security</button>
           <button className='set-btn'>Visibility</button>
           <button className='set-btn'>Notification</button>
      </div>
      <div className='part2-main'>
        <div className='profile-part'>
      <p>Profile information</p>
      <p>Name, Occupation, Company, skills, certification & Contact Information</p>
      </div>
      <div className='profile-part1'>
      <p>General preference</p>
      <div className='lan'>
      <p>Language</p>
      <span>
      <p>English</p>
      <span className='arr-icon'><IoIosArrowForward /></span>
      </span>
      </div>
      <div className='lan'>
      <p>Showing profile</p>
      <span>
      <p>show for all</p>
      <span className='arr-icon'><IoIosArrowForward /></span>
      </span>
      </div>
      <div className='lan'>
      <p>show contact information</p>
      <span>
      <p>No one</p>
      <span className='arr-icon'><IoIosArrowForward /></span>
      </span>
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default Settings;
