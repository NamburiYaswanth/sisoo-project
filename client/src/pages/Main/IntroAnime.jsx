import logo from './assets/tick.png';
import logo2 from './assets/tick2.png';
import "../../App.css";
const IntroAnim = () => {
  return (
    <div className='image-container'>
       <img className='before' src={logo}  alt=''></img>
       <img className='after' src={logo2} alt=''></img>
    </div>
  )
}

export default IntroAnim;