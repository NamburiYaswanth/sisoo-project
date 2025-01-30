import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import "./../stylesall/loginpage.css"
const Login = () => {
  const navigate = useNavigate();

  const otpPage = () => {
    navigate("/verify");
  };

  return (
    <Layout>
      <main className = "main-part">
    <div className = "white-part">
      <div className = "left-part">
        <h2 >WELCOME TO MINDSTAY TECHNOLOGY</h2>
        <input type = "text" placeholder="Enter Email" />
        <button onClick={otpPage}>GET OTP</button>
      </div>
      <div className = "right-part">
        <div className = "right-left">
            <h1>What's New</h1>
            <p>We are thrilled to announce new features and enhancements</p>
        </div>
        <img src= "https://www.figma.com/file/EYSwkmvYkIjC1kAqozASUR/image/05ee9c5b8b9ad7ff195d4fc299e0205d62637448"/>
      </div>
    </div>
    </main>
    </Layout>
  );
};

export default Login;
