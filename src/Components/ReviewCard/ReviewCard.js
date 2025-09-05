import { Star } from '../../Assets/SVGs'
import Rates from '../Rates/Rates'
import './ReviewCard.css'
function ReviewCard({userImage , name , job , comment , backgroundImage , rate}){
  return(
    <div className="reviewCard-container" style={{backgroundImage:`url(${backgroundImage})` , backgroundColor:"red" }}>
      <div className="content">
        <div className="image">
          <img src={userImage} alt="" />
        </div>
        <div className="reviewerInfo">
          <h3>{name}</h3>
          <p className="job-title">{job}</p>
        </div>
        <div className="comment">
          <p>"{comment}"</p>
        </div>
        <Rates width={"20px"}/>
      </div>
    </div>
  )
}
export default ReviewCard