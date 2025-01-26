import mail_logo from '../assets/mail.png';
import git_logo from '../assets/git.png';
// import '../App.css'
const Footer = () => {
  return (     

    <div>
        <div className='line'>
            <span className="p">Or With</span>
        </div>
    <div className='footer'>
       <img className='foot1' src = {mail_logo}></img>
       <img className='foot1' src = {git_logo}></img>

    </div>
    </div>
    
        
  )
}

export default Footer
