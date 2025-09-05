import './HomePage.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import HomeLandPage from '../../Components/HomeLandPage/HomeLandPage'
import Exploring from '../../Components/Exploring/Exploring'
import CollectionSection from '../../Components/CollectionSection/CollectionSection'
import img from '../../Assets/Images/saleImage.png'
import Experience from '../../Components/Experience/Experience'
import Testimonials from '../../Components/Testimonials/Testimonials'
function HomePage(){
  return(
    <>
      <Topbar/>
      <Navbar/>
      <div className="homePage-container">
        {/* <div className="homePage-content">

        </div> */}

        <HomeLandPage/>
        <Exploring/>
        <CollectionSection category={"Women"} header="new collections"/>
        <Experience />
        <CollectionSection category={"Men"} header="trending now"/>
        <div className='saleImage'>
          <img src={img} alt="" />
        </div>
        <CollectionSection category={"Kids"} header="offers"/>
        <Testimonials/>
      </div>
      <Footer/>
    </>
  )
}
export default HomePage