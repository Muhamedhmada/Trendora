import "./Shop.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CollectionSlider from "../../Components/CollectionSlider/CollectionSlider";
import ViewAllBtn from "../../Components/ViewAllBtn/ViewAllBtn";
import ShopLandPage from "../../Components/ShopLandPage/ShopLandPage";
function Shop() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ShopLandPage/>
      <div className='shop-container container'>
        <div className='shop-content content'>
          <div>
            <SectionHeader header='find your perfect dress' />
            <CollectionSlider category={"Women"} />
            <ViewAllBtn />
          </div>
          <div>
            <SectionHeader header={`every tops you'll love`} />
            <CollectionSlider category={"Women"} />
            <ViewAllBtn />
          </div>
          <div>
            <SectionHeader header='Find Your Perfect Fit Below' />
            <CollectionSlider category={"Women"} />
            <ViewAllBtn />
          </div>
          <div>
            <SectionHeader header='Comfy Looks for Cozy Days' />
            <CollectionSlider category={"Women"} />
            <ViewAllBtn />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
