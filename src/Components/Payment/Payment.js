import Button from '../Button/Button'
import Input from '../Input/Input'
import './Payment.css'
import paypal from '../../Assets/Images/paypal.png'
import visa from '../../Assets/Images/visa.png'
import googlePay from '../../Assets/Images/googlePay.png'
function Payment(){
  return(
    <div className="payment-container">
      <div className='method'>
        <div className="logo">
          <img src={paypal} alt="" />
          <p>paypal</p>
        </div>
        <a href="/">link account</a>
      </div>
      <div className='method'>
        <div className="logo">
          <img src={visa} alt="" />
          <p>**** **** **** 875</p>
        </div>
        <span>delete</span>
      </div>
      <div className='method'>
        <div className="logo">
          <img src={googlePay} alt="" />
          <p>google Pay</p>
        </div>
        <a href="/">link account</a>
      </div>
      <div className="credit">
        <h3>add new credit / debit card</h3>
        <Input label={"card holder name"} type="text" placeholder={"ex: muhamed"}/>
        <Input label={"card number"} type="text" placeholder={"8956 4310 6914 5108"}/>
        <div className="twoInput">
          <Input label={"expiry date"} type="text" placeholder={"02/4"}/>
          <Input label={"CVV"} type="text" placeholder={"00"}/>
        </div>
        <div className="check">
            {/* <Checkbox>Checkbox</Checkbox> */}
            <input type="checkbox" id='checkbox'
            style={{
              width: '30px',
              height: '30px',
              accentColor: '#D8C3A5', // لتغيير اللون في المتصفحات الحديثة
              cursor: 'pointer'
            }}
            />
            <label htmlFor="checkbox"> save card for future payments</label>
          </div>
        <Button value={"add card"}/>
      </div>
    </div>
  )
}
export default Payment