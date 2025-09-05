import { useNavigate } from "react-router-dom";
import { ArrowRight } from "../../Assets/SVGs";
import "./ViewAllBtn.css";
function ViewAllBtn({func}) {
  const nav = useNavigate()
  return (
    <button className='viewAll' onClick={()=>nav('/category')}>
      view all <ArrowRight width='30' />
    </button>
  );
}
export default ViewAllBtn;
