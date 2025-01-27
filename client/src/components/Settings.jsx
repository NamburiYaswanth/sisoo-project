import React, { useState } from "react";
import AccountPrefrence from "./pages/AccountPrefrence";
import LoginandSecurity from "./pages/LoginandSecurity";
import Visibility from "./pages/Visibility";
import Notification from "./pages/Notification";

const Settings = () => {
  const [active, setActive] = useState("");

  const renderContent = () => {
    
    if (active === "accoutpreferenc") return <AccountPrefrence />;
    if (active === "loginandsecurity") return <LoginandSecurity />;
    if (active === "visibility") return <Visibility  />;
    if (active === "notification") return <Notification  />;
    return <AccountPrefrence />;
  };

  return (
    <div className="set-main">
      <div className="part1-main">
        <button
          className="set-btn"
          onClick={() => setActive("accoutpreferenc")}
        >
          Account preference
        </button>
        <button
          className="set-btn"
          onClick={() => setActive("loginandsecurity")}
        >
          Login and security
        </button>
        <button className="set-btn"  onClick={() => setActive("visibility")}>Visibility</button>
        <button className="set-btn" onClick={() => setActive("notification")}>Notification</button>
      </div>
      <div className="part2-main">{renderContent()}

      </div>
    </div>
  );
};

export default Settings;
