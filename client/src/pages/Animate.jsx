import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Animated from "../assets/group1.png";

const Animate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="image-container">
      <img src={Animated} className="animated-image" />
    </div>
  );
};

export default Animate;
