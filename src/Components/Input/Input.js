import { useState } from 'react'
import { Eye, EyeSlash } from '../../Assets/SVGs'
import './Input.css'
function Input({type,placeholder,value,func,label ,id , isPassword }){
  const [hidePassword , setHidePassword] = useState(true)
  return (
    <div className='input-container'>
      <div>
        <label htmlFor={id}>{label}</label>
        <div className="input">

        <input
          id={id}
          type={hidePassword?type:"text"}
          onChange={func}
          placeholder={placeholder}
          value={value}
        />
        {isPassword?(
              <div className='icon' onClick={()=>setHidePassword((prev)=>!prev)}>
                {hidePassword?
                <EyeSlash width='20px' />
                :
                <Eye width='20px' />
                }
              </div>
            )
          : null}
        </div>
      </div>
    </div>
  );
}
export default Input