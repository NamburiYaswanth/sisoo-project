import Layout from "./Layout";
import "./../stylesall/verify.css";
import OtpInput from 'react-otp-input';
import { useState } from "react";

const Verify = () => {
  const [otp, setOtp] = useState('');

  return (
    <Layout>
      <div className = "prime-part">
        <div className="leftside-part">
        <div className="main">
        <h1 className = "heading">Verify Your Account</h1>
        <p className = "para">Enter the 4-digit OTP to verify your Sissoo Training App account,Resend OTP if needed</p>
        <otpInput
        className = "input"
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} 
        />}
       />
        <button className = "button"> Verify</button>
        <p className = "message">If you haven't received the OTP?  <span className = "span"> Resend !</span></p>
      </div>
        </div>
        <div className = "right-part">
        <div className = "right-left">
            <h1>What's New</h1>
            <p>We are thrilled to announce new features and enhancements</p>
        </div>
        <img className='image' src= "https://www.figma.com/file/EYSwkmvYkIjC1kAqozASUR/image/05ee9c5b8b9ad7ff195d4fc299e0205d62637448"/>
      </div>
      
    </div>
    </Layout>
  );
};

export default Verify;
