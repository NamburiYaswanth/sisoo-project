
import logo from '../assets/HERO1_logo.png';
import logo2 from '../assets/Vector.png';
import logo3 from '../assets/Vector1.png';
import DropDown from './DropDown';
const Header = () => {
  return (
    <div className="container">
        <div className='hero1'>
        <img className="hero" src={logo} alt="Hero Logo" />
        </div>
  
        <div className="hero2">
        <img className="help" src={logo2} alt="Help Icon" />
        {/* <div className='language'>
          <img className='globe' src = {logo3} alt='/home'></img>
        <select className="options" name="options">
      <option className='option' value="English">English</option>
      <option className='option' value="French">French</option>
      </select>
        </div> */}.
        <div style={{display:'flex', gap:"10px"}}>
        <img style={{height:'30px', width:'30px'}} className='globe' src = {logo3} alt='/home'></img>
        
        <DropDown />
        </div>
         
        </div>
       
    </div>
  
  )
}

export default Header
