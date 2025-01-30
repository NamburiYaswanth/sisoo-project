import React from "react";
import "../../styles/help.css"
const HelpandSupport = () => {
  const helpTopics = [
    { title: "Sissoo Basics", description: "Welcome to Sissoo, your go-to application.", icon: "🕊️" },
    { title: "Account & Network", description: "Empowering Account Management and Network Growth.", icon: "👤" },
    { title: "Log in", description: "We're excited to announce a more secure and efficient way to log in to your account.", icon: "🔑" },
    { title: "Account & Network", description: "At Sissoo, our community’s insights drive innovation.", icon: "📊" },
    { title: "Faq", description: "We provided frequently asked questions.", icon: "❓" }
  ];

  const faqs = [
    "What is Sissoo, and how can it benefit me?",
    "How do I create a Sissoo account?"
  ];

  return (
    <div className="help-center">
      <div className="search-bar">
        <input type="text" placeholder="Search help articles by keywords" />
      </div>

      <div className="help-topics">
        {helpTopics.map((topic, index) => (
          <div className="help-card" key={index}>
            <span className="icon">{topic.icon}</span>
            <div className="tt-ds">
              <p>{topic.title}</p>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="faq-title">Most Asked FAQ’s</h2>
      <div className="faq-list">
        {faqs.map((question, index) => (
          <div className="faq-item" key={index}>
            <span>{question}</span>
            <span className="arrow">➡️</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpandSupport;
