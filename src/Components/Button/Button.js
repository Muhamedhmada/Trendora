import './Button.css'
function Button({value , func , className}){
  return(
    <div className="button-container">
      <button onClick={func} className={className}>
        {value}
      </button>
    </div>
  )
}
export default Button