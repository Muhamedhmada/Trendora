import './OfferBtn.css'
function OfferBtn({offer}){
  return(
    <div className="offerBtn">
      <button>{offer}</button>
    </div>
  )
}
export default OfferBtn