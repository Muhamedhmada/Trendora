import ColorTable from '../ColorTable/ColorTable';
import Rates from '../Rates/Rates';
import SizeTable from '../SizeTable/SizeTable';
import './SingleProductInfo.css'
import img1 from '../../Assets/Images/singleProduct1.png'
import img2 from '../../Assets/Images/singleProduct2.png'
import img3 from '../../Assets/Images/singleProduct3.png'
import img4 from '../../Assets/Images/singleProduct4.png'
import img5 from '../../Assets/Images/singleProduct5.png'
import img6 from '../../Assets/Images/singleProduct6.png'
import OfferBtn from '../OfferBtn/OfferBtn';
import { Add, Heart, Minus } from '../../Assets/SVGs';
import Button from '../Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SingleProductInfo({data}){
  const nav = useNavigate() 
  let [counter , setCounter] = useState(0)
  let dataOfProduct = data
  console.log(dataOfProduct)
  return (
    <div className='singleProductInfo-container container'>
      <div className="images">
        <div className="mainProduct">
          <img src={img1} alt="" />
        </div>
        <div className="imageSlider">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
      <div className='info'>
        <div className='btns'>
          {dataOfProduct.isBestSeller ? <button> best seller </button> : null}
          <button >{dataOfProduct.collectionType}</button>
        </div>

        <div className="productName">  
          <p>{dataOfProduct.nameOfProduct} - {dataOfProduct.collectionType}</p>
          <h3>{dataOfProduct.nameOfProduct} - {"Beige"}</h3>
        </div>

        <div className="price">
          <b>EGP {dataOfProduct.price}.00</b>
          <del>EGP {dataOfProduct.oldPrice}.00</del>
        </div>

        <Rates width="30px"/>

        <div className="size">
          <span>size:</span>
          <SizeTable currentSize={dataOfProduct?.currentSize} size={dataOfProduct.sizes}/>
          <span>size Guide</span>
        </div>

        <div className='color'>
          <span>colors:</span>
          <ColorTable colors={dataOfProduct.colors} currentColor={dataOfProduct.currentColor}/>
        </div>

        <div className="offer">
          <p>only {dataOfProduct.stock} left in stock</p>
          <OfferBtn offer={dataOfProduct.offer}/>
        </div>

        <div className="add">
          <div className='counter'>
            <div className="icon" onClick={()=>setCounter(counter--)}>
              <Minus width="20"/>
            </div>
            {counter}
            <div className="icon" onClick={()=>setCounter(counter++)}>
              <Add width="20"/>
            </div>
          </div>
          <Button  value={"add to bag"}/>
          <span>
            <Heart width="30"/>
          </span>
        </div>

        <div className="relatedImage">
          <h3>Frequently bought together:</h3>
          <div className="images">
            <img src={img5} alt="" />
            <Add width="40"/>
            <img src={img6} alt="" />
          </div>
          <Button func={()=>nav('/cart')} value={"buy now"}/>
        </div>
      </div>
    </div>
  );
}
export default SingleProductInfo