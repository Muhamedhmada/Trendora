import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Topbar from '../../Components/Topbar/Topbar'
import './Category.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Category(){


  
  return(
    <>
      <Topbar/>
      <Navbar/>
      <div className="category-container content">
      </div>
      <Footer/>
    </>
  )
}
export default Category