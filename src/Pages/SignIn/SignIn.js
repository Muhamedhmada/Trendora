import './SignIn.css'
import img from '../../Assets/Images/82f3b86b25774b20c3c94f7979a704f1b3e2427d.jpg'
import FormHeader from '../../Components/FormHeader/FormHeader';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
function SignIn(){
  const nav = useNavigate()
  return(
    <div className="signIn-container">
      <div className="signIn-content">
        
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="form">
          <FormHeader header="Sign In" paragraph={"Hi! Welcome Back. you have been missed"}/>
          {/* value func label id placeholder type */}
          <Input type={"text"} label={"email"} id="email" placeholder = "your name@gmail.com" />
          <div className='password'>
            <Input type={"password"} label={"password"} id="password" placeholder = "12234#@R" />
            <p>forget password?</p>
          </div>
          {/* value func className */}
          <Button func={()=>nav('/home-page')} value={"sign in"}/>
          <p>Don't have an account? <b onClick={()=>nav('/sign-up')}>create account</b> </p>
        </div>
      </div>
    </div>
  )
}
export default SignIn