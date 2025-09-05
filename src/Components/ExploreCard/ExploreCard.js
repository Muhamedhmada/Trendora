import Button from '../Button/Button'
import './ExploreCard.css'
function ExploreCard({header , image , paragraph , func}){
  return(
    <div className="exploreCard-container">
      <h2>{header}</h2>
      <p>{paragraph}</p>
      <Button value = "shop now" func={func}/>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}
export default ExploreCard