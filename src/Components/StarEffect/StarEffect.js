import { Star } from '../../Assets/SVGs'
import './StarEffect.css'
function StarEffect(){
  return(
    <div className="starEffect">
      <div className="big">
        <Star width="30px"/>
      </div>
      <div className="small">
        <Star width="20px"/>
      </div>
    </div>
  )
}
export default StarEffect