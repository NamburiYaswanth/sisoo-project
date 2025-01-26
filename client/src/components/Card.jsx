import { IoPeople } from "react-icons/io5";
import { FaPeopleLine } from "react-icons/fa6";


const Card = () => {
  return (
    <div className="role-selector-container">
      <h1 className="role-title">Trailblazer or Voyager, Select Your Role!</h1>
      <div className="role-card">
        <div className='icons'>
            <IoPeople className="role-icon"  size={50}/>
        </div>
        <div className="role-content">
          <h2 className="role-heading">Unlock Team Excellence</h2>
          <p className="role-description">
            Lead team growth effortlessly as an</p>
            <p className='role-description'> Employer with sissoo Training.
          </p>
        </div>
      </div>
      <div className="role-card">
        <div  className='icon'>
            <FaPeopleLine className="role-icon" size={50}/>
        </div>
        <div className="role-content">
          <h2 className="role-heading">Inspire Learning Journey</h2>
          <p className="role-description">
            Shape learning as a Trainer with </p>
            <p className="role-description"> sissoo crafting engaging courses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
