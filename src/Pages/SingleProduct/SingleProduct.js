import { useLocation } from 'react-router-dom'
import AdditionlProdInfo from '../../Components/AdditionlProdInfo/AdditionlProdInfo'
import CollectionSlider from '../../Components/CollectionSlider/CollectionSlider'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import SingleProductInfo from '../../Components/SingleProductInfo/SingleProductInfo'
import Topbar from '../../Components/Topbar/Topbar'
import './SingleProduct.css'
function SingleProduct(){
  const location = useLocation()
  const data = location.state.productInfo
  console.log(data)
  return(
    <>
      <Topbar/>
      <Navbar/>
      <div className="singleProduct-container container content">
        <SingleProductInfo data = {data}/>
        <div className="slider">
          <AdditionlProdInfo data={data}/>
          <h2>you may also like</h2>
          <CollectionSlider category={"Women"}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default SingleProduct