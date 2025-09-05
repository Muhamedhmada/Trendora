import './Profile.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo'
import { useState } from 'react'
import Address from '../../Components/Address/Address'
import PasswordManager from '../../Components/PasswordManager/PasswordManager'
import Logout from '../../Components/Logout/Logout'
import Payment from '../../Components/Payment/Payment'
function Profile(){
  const [showedComponent , setShowedComponent] = useState("payment")

  const choosedComponent = ()=>{

    switch(showedComponent){
      case "personalInfo":
        return <PersonalInfo/>
      case "address":
        return <Address/>
      case "passwordManager":
        return <PasswordManager/>
      case "logout":
        return <Logout/>
      case "payment":
        return <Payment/>
      default:
        break      
    }
  }
  console.log(choosedComponent)
  return(
    <>
      <Topbar/>
      <Navbar/>
      <div className="profile-container container">
        <div className="btns">
          <Button value={"personal information"} className={showedComponent==="personalInfo"?"active":null} func={()=>setShowedComponent("personalInfo")}/>
          <Button value={"my order"} />
          <Button value={"manage address"} className={showedComponent==="address"?"active":null} func={()=>setShowedComponent("address")}/>
          <Button value={"payment method"} className={showedComponent==="payment"?"active":null} func={()=>setShowedComponent("payment")}/>
          <Button value={"password manager"} className={showedComponent==="passwordManager"?"active":null} func={()=>setShowedComponent("passwordManager")}/>
          <Button value={"logout"} className={showedComponent==="logout"?"active":null} func={()=>setShowedComponent("logout")}/>
        </div>
        <div className="section">
          {choosedComponent()}
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Profile