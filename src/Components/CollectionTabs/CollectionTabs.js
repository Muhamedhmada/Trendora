import './CollectionTabs.css'
function CollectionTabs({collection , func}){
  return(
    <div className="collectionTabs-container">
      <ul>
        <li className={collection==="Men"?"active":null}  onClick={()=>func("Men")}>men</li>
        <li className={collection==="Women"?"active":null} onClick={()=>func("Women")}>women</li>
        <li className={collection==="Kids"?"active":null} onClick={()=>func("Kids")}>kids</li>
      </ul>
    </div>
  )
}
export default CollectionTabs