import './SizeTable.css'
function SizeTable({size , currentSize}){
  return (
    <div className='sizeTable'>
      {size?.map((item) => (
        <>
          <div className={currentSize === item ? "active outer" : "outer"}>
            <div className='inner' style={{backgroundColor: item}}>{item}</div>
          </div>
        </>
      ))}
    </div>
  );
}
export default SizeTable