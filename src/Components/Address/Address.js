import Button from '../Button/Button'
import Input from '../Input/Input'
import './Address.css'
function Address(){
  return(
    <div className="address-container">
      <div className="address">
        <div>
          <h4>shobra, cairo</h4>
          <p>81 salah salem, shobra, cairo</p>
        </div>
        <div>
          <span>edit</span>
          <span>delete</span>
        </div>
      </div>
      <h3>Add new address</h3>
      <div className="twoInput">
        <Input label="first name" type={"text"} placeholder={"Ex: Muhamed"}/>
        <Input label="last name" type={"text"} placeholder={"Ex: hamada"}/>
      </div>
      <div className="selectInput">
        <label>country</label>
        <select>
          <option value="" selected disabled>select</option>
          <option value="tanta">egypt</option>
          <option value="shoubra">KSA</option>
        </select>
      </div>
      <Input label="street address" type={"text"} placeholder={"enter street address"}/>
      <div className="selectInput">
        <label>city</label>
        <select>
          <option value="" selected disabled>select</option>
          <option value="tanta">tanta</option>
          <option value="shoubra">shoubra</option>
        </select>
      </div>
      <Input label="phone" type={"number"} placeholder={"enter phone number"}/>
      <Input label="email" type={"email"} placeholder={"enter email"}/>
      <Button value={"add new address"}/>
    </div>
  )
}
export default Address