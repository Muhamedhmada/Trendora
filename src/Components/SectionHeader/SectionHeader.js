import './SectionHeader.css'
// import heart1 from '../../Assets/Images/Vector.png'
// import heart2 from '../../Assets/Images/Vector-1.png'
import { Hearts } from '../../Assets/SVGs'
function SectionHeader({header}){
  return(
    <div className="sectionHeader-container">
      <h2>{header}</h2>
      <div className="icon">
        <Hearts width="40"/>
      </div>
      {/* <div className="icons">
        <img src={heart1} alt="" />
        <img src={heart2} alt="" />
      </div> */}
    </div>
  )
}
export default SectionHeader