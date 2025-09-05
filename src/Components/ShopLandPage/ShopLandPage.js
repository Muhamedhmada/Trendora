import './ShopLandPage.css'
import img from '../../Assets/Images/ShopImage.png'
import StarEffect from '../StarEffect/StarEffect'
function ShopLandPage(){
  return(
    <div className="shopLandPage">
        <StarEffect/>
        <div className="info">
          <div>
            <h2>New Season, New Style</h2>
            <p>Discover the latest arrivals in women’s fashion</p>
          </div>
          <div className="sale">
            <StarEffect/>
            <h2>UP TO 40% OFF</h2>
            <h3>SUMMER  COLLECTION</h3>
            <StarEffect/>
          </div>
          <button>shop the sale</button>
        </div>
        <div className="image">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <StarEffect/>
        </div>
      </div>
  )
}
export default ShopLandPage