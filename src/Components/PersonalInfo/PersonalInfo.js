import Input from '../Input/Input'
import './PersonalInfo.css'
import userImage from '../../Assets/Images/6526f5ba6204ac81240ba4526ae39a342cc9dcf1.jpg'
import { Edit } from '../../Assets/SVGs'
import Button from '../Button/Button'
function PersonalInfo(){
  return(
    <div className="personalInfo-container">
      <div className="userImage">
        <img src={userImage} alt="" />
        <div className="icon">
          <Edit width="30px"/>
        </div>
      </div>
      <div className="twoInput">
        <Input label={"first name"} type={"text"} value="muhamed"  />
        <Input label={"last name"} type={"text"} value="hamada"  />
      </div>
      <Input label={"email"} type={"email"} value="hamada@gmail.com"/>
      <Input label={"phone"} type={"number"} value="01000473458"/>
      <Button value={"update change"}/>
    </div>
  )
}
export default PersonalInfo