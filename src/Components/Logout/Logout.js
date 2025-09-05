import Button from "../Button/Button";
import './Logout.css'
function Logout(){
  return(
    <div className="logout-container">
      <h2>logout</h2>
      <p>are you sure you want to log out?</p>
      <Button value="yes, logout"/>
    </div>
  )
}
export default Logout