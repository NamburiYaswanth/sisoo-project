import React from "react";
import "./../stylesall/profile.css";
import logo from "./../assets/logo.png";

const connections = [
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo },
  { name: "Richard", role: "UI UX Devop", img: logo }
];

const Profile = () => {
  return (
    <div className="container">
      <div className="connections-list">
        <h3 className="title">343,4 Connections</h3>
        {connections.map((user, index) => (
          <div key={index} className="connection-item">
            <img src={user.img} alt={user.name} className="avatar" />
            <div className="info">
              <p className="name">{user.name}</p>
              <p className="role">{user.role}</p>
            </div>
            <div className="actions">
              <button className="message">Message</button>
              <button className="disconnect">Disconnect</button>
            </div>
          </div>
        ))}
      </div>

      <div className="profile-card">
        <img
          src={logo}
          alt="Martin Hook"
          className="profile-pic"
        />
        <h3>Martin Hook</h3>
        <p className="role">UI UX Developer</p>
        <p className="skills">
          Figma | Illustrator | Photoshop | Adobe XD | Coreldraw | Balsamiq | Wireframe | Prototyping
        </p>
        <div className="profile-links">
          <span>Help & support</span>
          <span>Settings</span>
          <span>Faq</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
