import { Add, Delete, Heart, Minus } from '../../Assets/SVGs'
import './BuyingCard.css'
function BuyingCard({image , type , name , collection , color , size , price , oldPrice , counter}){
  return(
    <div className="buyingCard-container content">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <div className='header'>
          <p>{type} - {collection}</p>
          <h3>{name}</h3>
        </div>
        <div className='size-color'>
          <div className="color">
            <p>color:</p>
            <p style={{backgroundColor:color}}></p>
          </div>
          <div className="size">
            <p>size:</p>
            <p>{size}</p>
          </div>
        </div>

      </div>
      <div className="three">
        <div className='prices'>
          <p><del>EGP {oldPrice}.00</del></p>
          <p><b>EGP {price}.00</b></p>
        </div>
        <div className="btns">
          <div className="counter">
            <Minus width="15px"/>
            {counter}
            <Add width="15px"/>
          </div>
          <div className="icon">
            <Heart width="20px"/>
          </div>
          <div className="icon">
            <Delete width="15px"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BuyingCard