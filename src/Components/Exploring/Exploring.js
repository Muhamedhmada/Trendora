import "./Exploring.css";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import ExploreCard from "../ExploreCard/ExploreCard";
import img from "../../Assets/Images/explore1.png";
import img2 from "../../Assets/Images/explore2.png";
import img3 from "../../Assets/Images/explore3.png";
function Exploring() {
  return (
    <div className='exploring-container container'>
      <div className='exploring-content content'>
        <SectionHeader header='Explore Our Collections' />
        <div className='cards'>
          <ExploreCard
            header={"Cute and comfy outfits for little ones"}
            paragraph={"Everyday wear and special events."}
            image={img}
          />
          <ExploreCard
            header={"Stylish and comfortable looks for him"}
            paragraph={"From casual to formal wear"}
            image={img2}
          />
          <ExploreCard
            header={"Elegant modest wear for everyday & occasions"}
            paragraph={"Shop dresses, abayas, sets & more"}
            image={img3}
          />
        </div>
      </div>
    </div>
  );
}
export default Exploring;
