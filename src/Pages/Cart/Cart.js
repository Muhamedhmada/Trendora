import BuyingCard from '../../Components/BuyingCard/BuyingCard'
import CollectionSlider from '../../Components/CollectionSlider/CollectionSlider'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import ViewAllBtn from '../../Components/ViewAllBtn/ViewAllBtn'
import './Cart.css'
import img from '../../Assets/Images/singleProduct1.png'
import PriceSummary from '../../Components/PriceSummary/PriceSummary'
function Cart(){
  return(
    <>
      <Topbar/>
      <Navbar/>
      <div className="cart-container">
        <div className="buyingCards">
          <h2>You're only 400 EGP away from free delivery by Trendora!</h2>
          <div className="bar">
            <div className="innerBar">

            </div>
          </div>
          <BuyingCard
            image={img}
            type={"Dress"}
            collection={"summer collection"}
            name={"Linen Modest Dress – Beige"}
            color="#29514A"
            size={"XL"}
            price={"749"}
            oldPrice={"899"}
            counter={"2"}
          />
            <BuyingCard
            image={img}
            type={"Dress"}
            collection={"summer collection"}
            name={"Linen Modest Dress – Beige"}
            color="#29514A"
            size={"XL"}
            price={"749"}
            oldPrice={"899"}
            counter={"2"}
          />
            <BuyingCard
            image={img}
            type={"Dress"}
            collection={"summer collection"}
            name={"Linen Modest Dress – Beige"}
            color="#29514A"
            size={"XL"}
            price={"749"}
            oldPrice={"899"}
            counter={"2"}
          />
        </div>
        <PriceSummary/>
        <div className="slider">
          <h2>you may also like</h2>
          <CollectionSlider category={"Women"}/>
          <ViewAllBtn/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Cart