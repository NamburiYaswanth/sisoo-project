import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Settings = ({ children }) => {
  return (
    <Layout>
    <div className="set-main">
      <div className="part1-main">
        <Link to="/preference" className="set-btn">
          Account preference
        </Link>
        <button className="set-btn">Login and security</button>
        <button className="set-btn">Visibility</button>
        <button className="set-btn">Notification</button>
      </div>
      <div className="part2-main">{children}</div>
    </div>
    </Layout>
  );
};

export default Settings;
