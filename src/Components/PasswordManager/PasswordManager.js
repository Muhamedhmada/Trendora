import Button from '../Button/Button'
import Input from '../Input/Input'
import './PasswordManager.css'
function PasswordManager(){
  return(
    <div className="passwordManager-container">
      <Input  label={"password"} type={"password"} placeholder={"enter password"} isPassword={true}/>
      <a href="/">forget password?</a>
      <Input  label={"new password"} type={"password"} placeholder={"enter new password"}  isPassword={true}/>
      <Input  label={"confirmpassword"} type={"password"} placeholder={"enter new password"} isPassword={true}/>
      <Button value={"update password"}/>
    </div>
  )
}
export default PasswordManager