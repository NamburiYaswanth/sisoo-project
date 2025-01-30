import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Settings from "./Settings";
import "./../../stylesall/accpref.css";
const AccountPrefrence = () => {
  return (
    <Settings>
      <div className="part2-main">
        <div className="profile-part">
          <p>Profile information</p>
          <p>
            Name, Occupation, Company, skills, certification & Contact
            Information
          </p>
        </div>
        <div className="profile-part1">
          <p>General preference</p>
          <div className="lan">
            <p>Language</p>
            <span>
              <p>English</p>
              <span className="arr-icon">
                <IoIosArrowForward />
              </span>
            </span>
          </div>
          <div className="lan">
            <p>Showing profile</p>
            <span>
              <p>show for all</p>
              <span className="arr-icon">
                <IoIosArrowForward />
              </span>
            </span>
          </div>
          <div className="lan">
            <p>show contact information</p>
            <span>
              <p>No one</p>
              <span className="arr-icon">
                <IoIosArrowForward />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Settings>
  );
};

export default AccountPrefrence;
