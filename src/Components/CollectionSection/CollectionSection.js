import {useState} from "react";
import CollectionSlider from "../CollectionSlider/CollectionSlider";
import CollectionTabs from "../CollectionTabs/CollectionTabs";
import SectionHeader from "../SectionHeader/SectionHeader";
import ViewAllBtn from "../ViewAllBtn/ViewAllBtn";
import "./CollectionSection.css";
function CollectionSection({category , header}) {
  const [collection, setCollection] = useState(category);
  return (
    <>
      <div className='collectionSection-container'>
        <SectionHeader header={header}/>
        <CollectionTabs collection={collection} func={setCollection} />
        <CollectionSlider category={collection}/>
        <ViewAllBtn/>
      </div>
    </>
  );
}
export default CollectionSection;
