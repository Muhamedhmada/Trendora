import { Star } from '../../Assets/SVGs'
import './Rates.css'
function Rates({width}){
  return(
    <div className="rates">
      <Star width={width}/>
      <Star width={width}/>
      <Star width={width}/>
      <Star width={width}/>
      <Star width={width}/>
    </div>
  )
}
export default Rates