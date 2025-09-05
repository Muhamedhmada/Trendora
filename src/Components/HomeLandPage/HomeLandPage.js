import Button from '../Button/Button'
import './HomeLandPage.css'
import img from '../../Assets/Images/homeLandPage.png'
function HomeLandPage(){
  return(
    <div className="homeLandPage-container">
      <div className="homeLandPage-content">
        <div className="info">
          <div className="header">
            <h1>Redefining modest fashion</h1>
            <p>Elegant. Modest. you</p>
          </div>
          <p>A curated collection of timeless pieces for women who <br /> love to feel confident, elegant, and effortlessly modest.</p>
          <Button value={"shop now"}/>
        </div>
        <div className="image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
export default HomeLandPage