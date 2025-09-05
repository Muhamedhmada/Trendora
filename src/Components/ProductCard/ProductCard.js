import { Car, Heart } from '../../Assets/SVGs'
import Button from '../Button/Button'
import ColorTable from '../ColorTable/ColorTable';
import OfferBtn from '../OfferBtn/OfferBtn';
import Rates from '../Rates/Rates';
import './ProductCard.css'
function ProductCard({isBestSeller , isLiked , img , type , collection , productName , colors , currentColor , price , oldPrice , offer , func}){
  return (
    <div className='productCard-container' onClick={func}>
      {isBestSeller ? <Button value={"Best seller"} className="bestSeller" /> : null}
      {isLiked ? (
        <div className='liked'>
          <Heart width='25px' />
        </div>
      ) : null}
      <div className='productImage'>
        <img src={img} alt='' />
      </div>
      <div className='productInfo'>
        <p>
          <span>{type}</span> - <span>{collection}</span>
        </p>
        <h4>{productName}</h4>
        <Rates width="15px"/>
        <ColorTable colors={colors} currentColor={currentColor}/>
      </div>

      <div className="price">
        <div>
          <p>EGP {price}.00</p>
          {
            offer?
            <OfferBtn offer={offer}/>
            :<p className='offer'>30% OFF</p>
          }
        </div>
        <div>
          <p><del>EGP {oldPrice}.00</del></p>
          <p>
            <Car width="20px"/>
            Free Delivery
          </p>
        </div>
      </div>


    </div>
  );
}
export default ProductCard