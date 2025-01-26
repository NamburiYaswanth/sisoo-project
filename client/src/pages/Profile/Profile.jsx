import "./Profile.css"
import close from "../../assets/close.png"
import img from "../../assets/img687.png"
import vector from "../../assets/Vector.svg"
import { Link } from "react-router-dom"
const Profile = () => {
  return (
    <div className="main">
       <div>
        <img src = {img}></img>
       </div>

       <div  className="main2">
        
        <div><img src = {vector}></img></div>
        <div><Link href = "">Post</Link></div>
        <div><img src = {close}></img></div>

       </div>
    </div>
  )
}

export default Profile
