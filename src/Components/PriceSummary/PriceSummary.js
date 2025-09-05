import { ArrowRight } from '../../Assets/SVGs'
// import Button from '../Button/Button'
import './PriceSummary.css'
function PriceSummary(){
  return(
    <div className="priceSummary-container content container">
      <h3>price summary</h3>
      <ul>
        <li>subtotal  <span>EGP 1500.00</span></li>
        <li>shipping  <span>EGP 800.00</span></li>
        <li>Discount  <span>EGP 100.00</span></li>
      </ul>
      <div>
        <h4>Do you have a promo Code?</h4>
        <p>To use a gift card, that next step</p>
      </div>
      <div className="input">
        <input type="text" placeholder='apply code here' />
        <button>apply</button>
      </div>
      <button>checkout <ArrowRight width="20px"/></button>
    </div>
  )
}
export default PriceSummary