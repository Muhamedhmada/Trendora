import './SignUp.css'
import img from '../../Assets/Images/82f3b86b25774b20c3c94f7979a704f1b3e2427d.jpg'
import FormHeader from '../../Components/FormHeader/FormHeader';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
// import { Checkbox } from 'antd';

function SignUp(){
  const nav = useNavigate()

  const createAccount = ()=>{
    nav('/home-page')
  }
  return(
    <div className="signUp-container">
      <div className="signUp-content">
      <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="form">
          <FormHeader header="Create Account" paragraph={"Fill your information below or register with your social account."}/>
          {/* value func label id placeholder type */}
          <div className='twoInput'>
            <Input type={"text"} label={"First Name"} id="first" placeholder = "enter your name" />
            <Input type={"text"} label={"last Name"} id="last" placeholder = "enter your name" />
          </div>
          <Input type={"email"} label={"email"} id="email" placeholder = "your name@gmail.com" />
          <Input type={"password"} label={"password"} id="password" placeholder = "12234#@R" />
          <Input type={"password"} label={"Re-enter password"} id="rePassword" placeholder = "12234#@R" />
          <div className="check">
            {/* <Checkbox>Checkbox</Checkbox> */}
            <input type="checkbox" id='checkbox'
            style={{
              width: '20px',
              height: '20px',
              accentColor: '#D8C3A5', // لتغيير اللون في المتصفحات الحديثة
              cursor: 'pointer'
            }}
            />
            <label htmlFor="checkbox"> agree with <span>terms & condition</span></label>
          </div>
          {/* value func className */}
          <Button onClick={()=>createAccount()} value={"create account"}/>
          <p>Already have an account? <b onClick={()=>nav('/')}>Sign in</b> </p>
        </div>
      </div>
    </div>
  )
}
export default SignUp