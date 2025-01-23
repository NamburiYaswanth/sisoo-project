import React,{useState} from 'react';
import { Stepper, Step } from "react-form-stepper";

const Ongoing = () => {
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
             <div className="trainer">
               <p>Type of training</p>
               <p className="full-min">corporate</p>
             </div>
             <div className="trainer">
               <p>Duration of training</p>
               <p className="full-min">10 days </p>
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
               <div className='status'>
               <div >
                <p className='programme'>Progrmmae status</p>
                <p className='proposal' >you're send a proposal</p>
               </div>
               <div>
                <button className='btn-app'>Applied</button>
               </div>
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
}

export default Ongoing;
