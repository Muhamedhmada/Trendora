import './FormHeader.css'
function FormHeader({header , paragraph}){
  return(
    <div className="formHeader-container">
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </div>
  )
}
export default FormHeader