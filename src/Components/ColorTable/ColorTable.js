import './ColorTable.css'
function ColorTable({colors , currentColor}){
  return (
    <div className='colorTable'>
      {colors?.map((item) => (
        <>
          <div className={currentColor === item ? "active outer" : "outer"}>
            <div className='inner' style={{backgroundColor: item}}></div>
          </div>
        </>
      ))}
    </div>
  );
}
export default ColorTable