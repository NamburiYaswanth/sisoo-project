import React, { useState } from "react";
import { GoStar } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { SiPython, SiFigma, SiAdobexd } from "react-icons/si";
import { Stepper, Step } from "react-form-stepper";

const TrainingProgramme = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" },
    { label: "Step 4" },
  ];

  return (
    <>
      <div className="totalpart">
        <div className="firstpart">
          <div className="trainer">
            <p>Training programme name </p>
            <p className="full">Full stack developer</p>
          </div>
          <div className="trainer">
            <p>Training topics&subjects</p>
            <p className="full-min">java,js,python,react native </p>
          </div>

          <p className="trainer">Trainer</p>
          <div className="left-img">
            <div>
              <img
                src="https://images.unsplash.com/photo-1735597821463-05f8cbd08fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
                className="card-img"
              />
            </div>
            <div className="second-one">
              <span className="name">Koushik</span>
              <span className="dev">ui/ux developer</span>
              <div className="icons">
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
              </div>
              <div className="icons">
                <FaReact />
                <SiPython />
                <SiFigma />
                <SiAdobexd />
              </div>
            </div>
          </div>
          <div className="date">
            <div>
              <p className="date-section">start date</p>
              <p className="sec-section">14-10-2024</p>
            </div>
            <div>
              <p className="date-section">End date</p>
              <p className="sec-section">14-10-2024</p>
            </div>
          </div>
        </div>
        <div className="secondpart">
          <div style={{ fontFamily: "Arial, sans-serif" }}>
            <div
              style={{
                maxWidth: "80rem",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Stepper
                activeStep={currentStep}
                styleConfig={{
                  activeBgColor: "#028A0F",
                  completedBgColor: "#028A0F",
                  size: "2.5em",
                }}
              >
                {steps.map((step, index) => (
                  <Step key={index} label={step.label} />
                ))}
              </Stepper>
            </div>

            <div className="info-container">
              <div className="left-panel">
                <p>Total Participants</p>
                <p className="large-text">
                  205 <span className="small-text">Members</span>
                </p>
                <p>Mode</p>
                <p>Offline</p>
                <p>Location</p>
                <p>Bangalore</p>
                <div className="left-panel-buttons">
                  <button className="delete-btn">Delete</button>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>

              <div className="right-panel">
                <p>Notes</p>
                <textarea
                  placeholder="Taking Some Notes"
                  defaultValue="Taking Some Notes"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="totalpart" style={{padding : "10px 0px 0px 0px "}}>
        <div className="firstpart">
          <div className="trainer">
            <p>Training programme name </p>
            <p className="full">Full stack developer</p>
          </div>
          <div className="trainer">
            <p>Training topics&subjects</p>
            <p className="full-min">java,js,python,react native </p>
          </div>

          <p className="trainer">Trainer</p>
          <div className="left-img">
            <div>
              <img
                src="https://images.unsplash.com/photo-1735597821463-05f8cbd08fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
                className="card-img"
              />
            </div>
            <div className="second-one">
              <span className="name">Koushik</span>
              <span className="dev">ui/ux developer</span>
              <div className="icons">
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
                <GoStar style={{ fontSize: "17px" }} />
              </div>
              <div className="icons">
                <FaReact />
                <SiPython />
                <SiFigma />
                <SiAdobexd />
              </div>
            </div>
          </div>
          <div className="date">
            <div>
              <p className="date-section">start date</p>
              <p className="sec-section">14-10-2024</p>
            </div>
            <div>
              <p className="date-section">End date</p>
              <p className="sec-section">14-10-2024</p>
            </div>
          </div>
        </div>
        <div className="secondpart">
          <div style={{ fontFamily: "Arial, sans-serif" }}>
            <div
              style={{
                maxWidth: "80rem",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Stepper
                activeStep={currentStep}
                styleConfig={{
                  activeBgColor: "#028A0F",
                  completedBgColor: "#028A0F",
                  size: "2.5em",
                }}
              >
                {steps.map((step, index) => (
                  <Step key={index} label={step.label} />
                ))}
              </Stepper>
            </div>

            <div className="info-container">
              <div className="left-panel">
                <p>Total Participants</p>
                <p className="large-text">
                  205 <span className="small-text">Members</span>
                </p>
                <p>Mode</p>
                <p>Offline</p>
                <p>Location</p>
                <p>Bangalore</p>
                <div className="left-panel-buttons">
                  <button className="delete-btn">Delete</button>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>

              <div className="right-panel">
                <p>Notes</p>
                <textarea
                  placeholder="Taking Some Notes"
                  defaultValue="Taking Some Notes"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingProgramme;
