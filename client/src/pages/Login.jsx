import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Login = () => {
  const navigate = useNavigate();

  const otpPage = () => {
    navigate("/verify");
  };

  return (
    <Layout>
      <h1>Login Page</h1>
      <button onClick={otpPage}>OTP</button>
    </Layout>
  );
};

export default Login;
