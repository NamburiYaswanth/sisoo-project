import React from "react";
import { useNavigate } from "react-router-dom";
 
const LoginPage = () => {
    const navigate = useNavigate();
    const otpPgae = () =>{
        navigate("/otp-page")
    }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={otpPgae}>OTP</button>
    </div>
  );
};


export default LoginPage;
